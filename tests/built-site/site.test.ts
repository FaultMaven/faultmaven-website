/**
 * Checks against the BUILT site: `pnpm build` first, then `pnpm test:build`.
 *
 * These start `next start` on a free port and speak HTTP to it, because the
 * defects they guard were invisible to every unit-level check: a header set
 * in a file Next never loaded, a 404 page sent with status 200, a redirect
 * that rendered a second copy of the page instead. Each of those looked fine
 * in the source and only showed in the response.
 *
 * A missing build is a failure here, not a skip: a suite that passes because
 * it had nothing to test proves nothing.
 */
import { spawn, ChildProcess } from 'child_process';
import fs from 'fs';
import net from 'net';
import path from 'path';

const ROOT = path.join(__dirname, '..', '..');
const NEXT_DIR = path.join(ROOT, '.next');
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

/** Every prerendered HTML page, as the route it is served at. */
function prerenderedHtmlRoutes(): string[] {
  const manifest = JSON.parse(fs.readFileSync(path.join(NEXT_DIR, 'prerender-manifest.json'), 'utf8'));
  return Object.keys(manifest.routes).filter((route) => {
    const file = path.join(NEXT_DIR, 'server', 'app', route === '/' ? 'index.html' : `${route}.html`);
    return fs.existsSync(file);
  });
}

function titleOf(html: string): string {
  return /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '';
}

/** Blog files by frontmatter status: [published, unpublished] date-prefixed file names. */
function blogFileNames(): { published: string[]; unpublished: string[] } {
  const dir = path.join(ROOT, 'content', 'blog');
  const published: string[] = [];
  const unpublished: string[] = [];
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md') || file.toLowerCase() === 'readme.md') continue;
    const status = /^status:\s*["']?(\w+)/m.exec(fs.readFileSync(path.join(dir, file), 'utf8'))?.[1];
    (status === 'published' ? published : unpublished).push(file.replace(/\.md$/, ''));
  }
  return { published, unpublished };
}

const cleanSlug = (raw: string) => raw.replace(/^\d{4}-\d{2}-\d{2}-/, '');

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

describe('security headers reach the browser', () => {
  it('on every prerendered page', async () => {
    const routes = prerenderedHtmlRoutes();
    expect(routes.length).toBeGreaterThan(10);
    for (const route of routes) {
      const res = await get(route);
      const h = res.headers;
      expect([route, h.get('x-content-type-options')]).toEqual([route, 'nosniff']);
      expect([route, h.get('x-frame-options')]).toEqual([route, 'DENY']);
      expect([route, h.get('content-security-policy') ?? '']).toEqual([
        route,
        expect.stringContaining("frame-ancestors 'none'"),
      ]);
      expect([route, h.get('referrer-policy')]).toEqual([route, 'strict-origin-when-cross-origin']);
      expect([route, h.get('permissions-policy') ?? '']).toEqual([route, expect.stringContaining('camera=()')]);
      expect([route, h.get('strict-transport-security') ?? '']).toEqual([route, expect.stringContaining('max-age=')]);
    }
  }, 60_000);

  it('on the not-found page too', async () => {
    const res = await get('/there-is-no-such-page');
    expect(res.status).toBe(404);
    expect(res.headers.get('content-security-policy')).toContain("default-src 'self'");
  });
});

describe('not found is a 404, not a 200 with a not-found body', () => {
  // A root `loading.tsx` was a Suspense boundary above every page: the 200 had
  // streamed before `notFound()` ran, so search engines indexed the not-found
  // page as content.
  it('for an unknown route', async () => {
    expect((await get('/there-is-no-such-page')).status).toBe(404);
  });

  it('for an unknown blog slug', async () => {
    expect((await get('/blog/there-is-no-such-post')).status).toBe(404);
  });

  it('for an unpublished blog slug', async () => {
    const { unpublished } = blogFileNames();
    // If every post is published this has no subject; say so rather than pass.
    expect(unpublished.length).toBeGreaterThan(0);
    for (const raw of unpublished) {
      expect([raw, (await get(`/blog/${cleanSlug(raw)}`)).status]).toEqual([raw, 404]);
    }
  });

  it('a redirect-only route redirects rather than rendering a shell', async () => {
    // Same boundary, same symptom: `/signin` rendered a 200 page carrying a
    // meta-refresh instead of answering with a redirect.
    const res = await get('/signin');
    expect([301, 302, 307, 308]).toContain(res.status);
    expect(res.headers.get('location')).toMatch(/\/signin$/);
  });
});

describe('one address per post', () => {
  const { published } = blogFileNames();

  it('has at least one published post to check', () => {
    expect(published.length).toBeGreaterThan(0);
  });

  it.each(published)('%s: the date-prefixed URL redirects permanently to the clean slug', async (raw) => {
    const res = await get(`/blog/${raw}`);
    expect(res.status).toBe(308);
    expect(res.headers.get('location')).toBe(`/blog/${cleanSlug(raw)}`);
  });

  it.each(published)('%s: the clean slug serves the post and declares itself canonical', async (raw) => {
    const slug = cleanSlug(raw);
    const res = await get(`/blog/${slug}`);
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain(`<link rel="canonical" href="https://www.faultmaven.ai/blog/${slug}"/>`);
  });
});

describe('titles', () => {
  it('every prerendered page has its own title, branded exactly once', () => {
    const problems: string[] = [];
    for (const route of prerenderedHtmlRoutes()) {
      const file = path.join(NEXT_DIR, 'server', 'app', route === '/' ? 'index.html' : `${route}.html`);
      const title = titleOf(fs.readFileSync(file, 'utf8'));
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
});
