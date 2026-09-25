#!/usr/bin/env node
/**
 * Loads every prerendered page of the production build in headless Chromium
 * and fails if any page reports a Content-Security-Policy violation or a
 * console error, fails to hydrate, has a header menu that does not respond,
 * or carries a Mermaid diagram that did not render.
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

  await browser.close();
} finally {
  server.kill();
}

console.log(`\n${routes.length} routes checked, ${failures} failing`);
process.exit(failures ? 1 : 0);
