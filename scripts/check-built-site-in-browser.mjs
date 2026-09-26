#!/usr/bin/env node
/**
 * Loads every prerendered page of the production build in headless Chromium
 * and fails if any page reports a Content-Security-Policy violation or a
 * console error, fails to hydrate, has a header menu that does not respond,
 * or carries a Mermaid diagram that did not render. It then fails if, at a
 * desktop width, any header entry wraps onto a second line or overlaps
 * another.
 *
 * Run after `pnpm build`: `pnpm test:browser`. Chromium comes from
 * `pnpm exec playwright install chromium`.
 *
 * The policy in next.config.js is only as good as the list of origins it
 * admits; a missing one breaks the page silently for visitors and loudly here.
 * Requests leave the local server only for the origins the policy names.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { chromium } from 'playwright';

const ROOT = process.cwd();
const NEXT_DIR = path.join(ROOT, '.next');
const ALLOWED_HOSTS = new Set(['fonts.googleapis.com', 'fonts.gstatic.com', 'img.shields.io']);

// Vercel serves /_vercel/insights/script.js on its platform; `next start`
// answers 404. That is the local environment, not the policy, so it is not
// counted. Everything else on the console is.
const isLocalNoise = (text) =>
  /_vercel\/insights\/script\.js/.test(text) || /Failed to load resource: .* 404/.test(text);

if (!fs.existsSync(path.join(NEXT_DIR, 'prerender-manifest.json'))) {
  console.error('No production build in .next — run `pnpm build` first.');
  process.exit(2);
}

const manifest = JSON.parse(fs.readFileSync(path.join(NEXT_DIR, 'prerender-manifest.json'), 'utf8'));
const routes = Object.keys(manifest.routes)
  .filter((r) => fs.existsSync(path.join(NEXT_DIR, 'server', 'app', r === '/' ? 'index.html' : `${r}.html`)))
  // /signin only redirects off-site; there is no page of ours to load.
  .filter((r) => r !== '/signin')
  .sort();

// The header's layout is checked on / at these widths and browser default font
// sizes. The desktop layout starts at 64em, which follows the default font
// size: 1024px at 16px, 1280px at 20px, where every rem is also 25% larger.
const HEADER_CASES = [
  { width: 1024, defaultFontPx: 16, layout: 'desktop' },
  { width: 1440, defaultFontPx: 16, layout: 'desktop' },
  { width: 1024, defaultFontPx: 20, layout: 'menu' },
  { width: 1280, defaultFontPx: 20, layout: 'desktop' },
];

const mermaidRoutes = new Set(
  fs
    .readdirSync(path.join(ROOT, 'content', 'blog'))
    .filter((f) => f.endsWith('.md') && fs.readFileSync(path.join(ROOT, 'content', 'blog', f), 'utf8').includes('```mermaid'))
    .map((f) => '/blog/' + f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''))
);

function freePort() {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.listen(0, '127.0.0.1', () => {
      const { port } = probe.address();
      probe.close(() => resolve(port));
    });
    probe.on('error', reject);
  });
}

async function waitFor(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      if ((await fetch(url, { redirect: 'manual' })).status > 0) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`next start did not answer at ${url}`);
}

const port = await freePort();
const origin = `http://127.0.0.1:${port}`;
const server = spawn(path.join(ROOT, 'node_modules', '.bin', 'next'), ['start', '-p', String(port), '-H', '127.0.0.1'], {
  cwd: ROOT,
  stdio: 'ignore',
  env: { ...process.env, NODE_ENV: 'production' },
});

let failures = 0;
try {
  await waitFor(`${origin}/`);
  const browser = await chromium.launch();

  for (const route of routes) {
    const page = await browser.newPage({ viewport: { width: 500, height: 800 } });
    const problems = [];

    await page.route('**/*', (r) => {
      const u = new URL(r.request().url());
      if (u.origin === origin || ALLOWED_HOSTS.has(u.hostname)) return r.continue();
      problems.push(`request left the allowed origins: ${u.href}`);
      return r.abort();
    });
    page.on('console', (m) => {
      if ((m.type() === 'error' || /Content Security Policy/i.test(m.text())) && !isLocalNoise(m.text())) {
        problems.push(`console: ${m.text()}`);
      }
    });
    page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
    await page.addInitScript(() => {
      window.__cspViolations = [];
      document.addEventListener('securitypolicyviolation', (e) => {
        window.__cspViolations.push(`${e.violatedDirective} blocked ${e.blockedURI}`);
      });
    });

    const res = await page.goto(origin + route, { waitUntil: 'networkidle' });
    if (res.status() !== (route === '/_not-found' ? 404 : 200)) problems.push(`status ${res.status()}`);

    // Hydration: a React fiber key on a rendered element proves the client
    // bundle ran and attached to the server HTML.
    const hydrated = await page.evaluate(() => {
      const el = document.querySelector('main') ?? document.body;
      return Object.keys(el).some((k) => k.startsWith('__reactFiber'));
    });
    if (!hydrated) problems.push('not hydrated');

    // Interaction: at phone width the header menu opens on click.
    const toggle = page.locator('button[aria-label="Toggle Menu"]');
    if (await toggle.count()) {
      const before = await page.locator('a[href="/product"]:visible').count();
      await toggle.click();
      const after = await page.locator('a[href="/product"]:visible').count();
      if (after <= before) problems.push('menu toggle did not open the menu');
    } else {
      problems.push('no menu toggle found');
    }

    if (mermaidRoutes.has(route)) {
      await page
        .waitForFunction(() => document.querySelector('figure.mermaid-diagram svg') !== null, null, { timeout: 15000 })
        .catch(() => {});
      if ((await page.locator('figure.mermaid-diagram svg').count()) === 0) problems.push('mermaid diagram did not render');
    }

    for (const v of await page.evaluate(() => window.__cspViolations)) problems.push(`csp: ${v}`);

    if (problems.length) failures++;
    console.log(`${problems.length ? 'FAIL' : 'ok  '} ${route}${problems.map((p) => `\n       ${p}`).join('')}`);
    await page.close();
  }

  // Layout: where the desktop header shows, it is one row. Every entry (logo,
  // links, the Resources button, Sign in and both buttons) sits on a single
  // line and clear of the others. Where it would not fit, the menu button
  // shows instead.
  for (const { width, defaultFontPx, layout } of HEADER_CASES) {
    const page = await browser.newPage({ viewport: { width, height: 800 } });
    // The browser's default font size, as a reader's font setting changes it;
    // a CSS font-size on the page would leave em media queries at 16px.
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Page.setFontSizes', { fontSizes: { standard: defaultFontPx, fixed: 13 } });
    await page.goto(origin + '/', { waitUntil: 'networkidle' });
    const menuShown = await page.locator('button[aria-label="Toggle Menu"]').isVisible();
    let problems;
    if (layout === 'menu') {
      problems = menuShown ? [] : ['expected the menu button, got the desktop header'];
    } else if (menuShown) {
      problems = ['expected the desktop header, got the menu button'];
    } else {
      problems = await page.evaluate(() => {
        const nameOf = (el) => el.textContent.trim() || el.querySelector('img')?.alt || el.tagName;
        const entries = [...document.querySelectorAll('header a, header button')].filter((el) => el.offsetParent !== null);
        const found = [];
        if (entries.length < 9) found.push(`expected 9 visible header entries, found ${entries.length}`);
        for (const el of entries) {
          const tops = [];
          const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
          for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            if (!node.textContent.trim()) continue;
            const range = document.createRange();
            range.selectNodeContents(node);
            for (const r of range.getClientRects()) tops.push(r.top);
          }
          if (tops.length && Math.max(...tops) - Math.min(...tops) > 4) found.push(`"${nameOf(el)}" wraps`);
        }
        const boxes = entries.map((el) => [nameOf(el), el.getBoundingClientRect()]);
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            const [a, r] = boxes[i];
            const [b, s] = boxes[j];
            if (r.left < s.right && s.left < r.right && r.top < s.bottom && s.top < r.bottom) {
              found.push(`"${a}" overlaps "${b}"`);
            }
          }
        }
        return found;
      });
    }
    if (problems.length) failures++;
    console.log(
      `${problems.length ? 'FAIL' : 'ok  '} header at ${width}px, ${defaultFontPx}px default font (${layout})${problems.map((p) => `\n       ${p}`).join('')}`,
    );
    await page.close();
  }

  await browser.close();
} finally {
  server.kill();
}

console.log(`\n${routes.length} routes and ${HEADER_CASES.length} header layouts checked, ${failures} failing`);
process.exit(failures ? 1 : 0);
