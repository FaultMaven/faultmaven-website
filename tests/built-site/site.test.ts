/**
 * Checks against the BUILT site: `pnpm build` first, then `pnpm test:build`.
 *
 * These start `next start` on a free port and speak HTTP to it, because the
 * rules they hold are about the response, not the source: which headers a
 * page, an asset and an API route carry, which status an unknown route gets,
 * where a date-prefixed post URL lands. None of that is visible to a unit
 * test over a config object.
 *
 * A missing build is a failure here, not a skip: a suite that passes because
 * it had nothing to test proves nothing.
 */
import { spawn, ChildProcess } from 'child_process';
import fs from 'fs';
import net from 'net';
import path from 'path';
import { getAllPostSummaries, getAllPosts } from '@/lib/blog';

const ROOT = path.join(__dirname, '..', '..');
const NEXT_DIR = path.join(ROOT, '.next');
const SITE = 'https://www.faultmaven.ai';
const SITE_DEFAULT_TITLE = 'FaultMaven | AI Troubleshooting Copilot — Self-Hosted or Run for You';
const BRAND_SUFFIX = ' | FaultMaven';

let server: ChildProcess;
let origin: string;

function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.listen(0, '127.0.0.1', () => {
      const address = probe.address();
      if (typeof address === 'object' && address) {
        const { port } = address;
        probe.close(() => resolve(port));
      } else {
        reject(new Error('could not allocate a port'));
      }
    });
  });
}

async function waitForServer(url: string, attempts = 60): Promise<void> {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      if (res.status > 0) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`next start did not answer at ${url}`);
}

function htmlFile(route: string): string {
  return path.join(NEXT_DIR, 'server', 'app', route === '/' ? 'index.html' : `${route}.html`);
}

/** Every prerendered HTML page, as the route it is served at. */
function prerenderedHtmlRoutes(): string[] {
  const manifest = JSON.parse(fs.readFileSync(path.join(NEXT_DIR, 'prerender-manifest.json'), 'utf8'));
  return Object.keys(manifest.routes).filter((route) => fs.existsSync(htmlFile(route)));
}

function titleOf(html: string): string {
  return /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '';
}

function metaContent(html: string, attr: 'property' | 'name', key: string): string | undefined {
  const re = new RegExp(`<meta ${attr}="${key}" content="([^"]*)"`);
  return re.exec(html)?.[1]?.replace(/&amp;/g, '&');
}

function canonicalOf(html: string): string | undefined {
  return /<link rel="canonical" href="([^"]*)"/.exec(html)?.[1];
}

/** The post files by frontmatter status, as `blog.ts` reads them. */
const publishedPosts = getAllPosts();
const unpublishedPosts = getAllPostSummaries().filter((post) => post.status !== 'published');

/** The date-prefixed file name a post is stored under, without `.md`. */
function fileStemOf(slug: string): string {
  const stem = fs
    .readdirSync(path.join(ROOT, 'content', 'blog'))
    .map((f) => f.replace(/\.md$/, ''))
    .find((f) => f.replace(/^\d{4}-\d{2}-\d{2}-/, '') === slug);
  if (!stem) throw new Error(`no post file for slug ${slug}`);
  return stem;
}

beforeAll(async () => {
  if (!fs.existsSync(path.join(NEXT_DIR, 'prerender-manifest.json'))) {
    throw new Error('No production build in .next — run `pnpm build` before `pnpm test:build`.');
  }
  const port = await freePort();
  origin = `http://127.0.0.1:${port}`;
  server = spawn(path.join(ROOT, 'node_modules', '.bin', 'next'), ['start', '-p', String(port), '-H', '127.0.0.1'], {
    cwd: ROOT,
    stdio: 'ignore',
    env: { ...process.env, NODE_ENV: 'production' },
  });
  await waitForServer(`${origin}/`);
}, 60_000);

afterAll(() => {
  server?.kill();
});

const get = (route: string) => fetch(`${origin}${route}`, { redirect: 'manual' });

function expectSecurityHeaders(route: string, h: Headers) {
  expect([route, h.get('x-content-type-options')]).toEqual([route, 'nosniff']);
  expect([route, h.get('x-frame-options')]).toEqual([route, 'DENY']);
  expect([route, h.get('content-security-policy') ?? '']).toEqual([route, expect.stringContaining("frame-ancestors 'none'")]);
  expect([route, h.get('referrer-policy')]).toEqual([route, 'strict-origin-when-cross-origin']);
  expect([route, h.get('permissions-policy') ?? '']).toEqual([route, expect.stringContaining('camera=()')]);
  expect([route, h.get('strict-transport-security') ?? '']).toEqual([route, expect.stringContaining('max-age=')]);
  expect([route, h.get('x-powered-by')]).toEqual([route, null]);
}

describe('security headers reach the browser on every page, asset and API response', () => {
  it('on every prerendered page', async () => {
    const routes = prerenderedHtmlRoutes();
    expect(routes.length).toBeGreaterThan(10);
    for (const route of routes) {
      expectSecurityHeaders(route, (await get(route)).headers);
    }
  }, 60_000);

  it('on the not-found page', async () => {
    const res = await get('/there-is-no-such-page');
    expect(res.status).toBe(404);
    expectSecurityHeaders('/there-is-no-such-page', res.headers);
  });

  it('on a static asset and a build chunk', async () => {
    expectSecurityHeaders('/icon.svg', (await get('/icon.svg')).headers);
    const chunk = /src="(\/_next\/static\/[^"]+\.js)"/.exec(fs.readFileSync(htmlFile('/'), 'utf8'))?.[1];
    expect(chunk).toBeDefined();
    expectSecurityHeaders(chunk!, (await get(chunk!)).headers);
  });

  it('on an API response', async () => {
    const res = await get('/api/hello');
    expect(res.status).toBe(200);
    expectSecurityHeaders('/api/hello', res.headers);
  });

  it('under the production policy: no eval, no preview toolbar', async () => {
    const csp = (await get('/')).headers.get('content-security-policy') ?? '';
    expect(csp).not.toContain("'unsafe-eval'");
    expect(csp).not.toContain('vercel.live');
  });
});

describe('a route that does not exist answers 404', () => {
  // A root `loading.tsx` would be a Suspense boundary above every page, and
  // the 200 would stream before `notFound()` or `redirect()` in the page could
  // run. The blog tests below cannot tell that apart from a page that renders
  // on demand, so the file's absence is a rule of its own.
  it('has no root loading boundary', () => {
    expect(fs.existsSync(path.join(ROOT, 'src', 'app', 'loading.tsx'))).toBe(false);
  });

  it('for an unknown route', async () => {
    expect((await get('/there-is-no-such-page')).status).toBe(404);
  });

  it('for an unknown blog slug', async () => {
    expect((await get('/blog/there-is-no-such-post')).status).toBe(404);
  });

  it('for every unpublished blog slug', async () => {
    for (const post of unpublishedPosts) {
      expect([post.slug, (await get(`/blog/${post.slug}`)).status]).toEqual([post.slug, 404]);
    }
  });

  it('and a route that only redirects answers with a redirect, not a page', async () => {
    const res = await get('/signin');
    expect([301, 302, 307, 308]).toContain(res.status);
    expect(res.headers.get('location')).toMatch(/\/signin$/);
  });
});

describe('one address per post', () => {
  it('has at least one published post to check', () => {
    expect(publishedPosts.length).toBeGreaterThan(0);
  });

  it.each(publishedPosts.map((p) => p.slug))(
    '%s: the date-prefixed URL redirects permanently to the clean slug',
    async (slug) => {
      const res = await get(`/blog/${fileStemOf(slug)}`);
      expect(res.status).toBe(308);
      expect(res.headers.get('location')).toBe(`/blog/${slug}`);
    }
  );

  it.each(publishedPosts.map((p) => p.slug))('%s: the clean slug serves the post and declares itself canonical', async (slug) => {
    const res = await get(`/blog/${slug}`);
    expect(res.status).toBe(200);
    expect(canonicalOf(await res.text())).toBe(`${SITE}/blog/${slug}`);
  });
});

describe('titles and social cards', () => {
  it('every prerendered page has its own title, branded exactly once', () => {
    const problems: string[] = [];
    for (const route of prerenderedHtmlRoutes()) {
      const title = titleOf(fs.readFileSync(htmlFile(route), 'utf8'));
      if (route === '/') {
        // The layout's template never applies to the page in its own segment,
        // so the home page is the one page that carries `title.default`.
        if (title !== SITE_DEFAULT_TITLE) problems.push(`/: "${title}" is not the layout's default title`);
        continue;
      }
      if (title === SITE_DEFAULT_TITLE) {
        problems.push(`${route}: shows the site default title, declares none of its own`);
        continue;
      }
      if (!title.endsWith(BRAND_SUFFIX)) {
        problems.push(`${route}: "${title}" is not branded by the layout template`);
        continue;
      }
      const bare = title.slice(0, -BRAND_SUFFIX.length);
      if (bare.length === 0) problems.push(`${route}: title is only the brand`);
      if (bare.includes('| FaultMaven')) problems.push(`${route}: "${title}" is branded twice`);
    }
    expect(problems).toEqual([]);
  });

  it('every prerendered page declares its own canonical URL and a matching social card', () => {
    // A page that sets no card inherits the root layout's, so a share of
    // /pricing would carry the home page's title and URL.
    const problems: string[] = [];
    for (const route of prerenderedHtmlRoutes()) {
      if (route === '/_not-found' || route === '/signin') continue;
      const html = fs.readFileSync(htmlFile(route), 'utf8');
      const title = titleOf(html);
      const canonical = canonicalOf(html);
      // Next serialises the root canonical without a trailing slash.
      const expectedCanonical = route === '/' ? SITE : `${SITE}${route}`;
      if (canonical !== expectedCanonical) problems.push(`${route}: canonical is ${canonical}, expected ${expectedCanonical}`);
      if (metaContent(html, 'property', 'og:title') !== title) problems.push(`${route}: og:title is not the page title`);
      if (metaContent(html, 'property', 'og:url') !== expectedCanonical) problems.push(`${route}: og:url is not the canonical URL`);
      if (metaContent(html, 'name', 'twitter:title') !== title) problems.push(`${route}: twitter:title is not the page title`);
      // The generated card image is attached to the root segment only; a
      // page that sets its own card has to carry it forward.
      if (!metaContent(html, 'property', 'og:image')?.startsWith(`${SITE}/opengraph-image`)) problems.push(`${route}: no og:image`);
      if (!metaContent(html, 'name', 'twitter:image')?.startsWith(`${SITE}/opengraph-image`)) problems.push(`${route}: no twitter:image`);
    }
    expect(problems).toEqual([]);
  });
});
