// `export {}` makes this a module, so its top-level names do not collide with
// tests/redirects.test.ts, which also loads the config as a script.
export {};

const nextConfig = require('../next.config.js');

type Header = { key: string; value: string };
type Rule = { source: string; headers: Header[] };

// The headers used to be set by a root `middleware.ts`, which Next.js never
// loads in a `src/` project, so the site served none of them. They now come
// from `next.config.js`; this pins the set, and `tests/built-site` checks that the
// built server really sends them.
//
// `headers()` reads NODE_ENV when called, so each policy can be asked for:
// jest runs with NODE_ENV=test, which would otherwise look like development.
async function headersForEveryRoute(env = 'production'): Promise<Map<string, string>> {
  const saved = process.env.NODE_ENV;
  Object.assign(process.env, { NODE_ENV: env });
  try {
    const rules: Rule[] = await nextConfig.headers();
    const catchAll = rules.find((r) => r.source === '/(.*)');
    expect(catchAll).toBeDefined();
    return new Map(catchAll!.headers.map((h) => [h.key.toLowerCase(), h.value]));
  } finally {
    Object.assign(process.env, { NODE_ENV: saved });
  }
}

function directives(csp: string): Map<string, string[]> {
  return new Map(
    csp
      .split(';')
      .map((d) => d.trim())
      .filter(Boolean)
      .map((d) => {
        const [name, ...sources] = d.split(/\s+/);
        return [name, sources];
      })
  );
}

describe('security headers', () => {
  it.each([
    ['x-content-type-options', 'nosniff'],
    ['x-frame-options', 'DENY'],
    ['referrer-policy', 'strict-origin-when-cross-origin'],
  ])('sends %s: %s on every route', async (name, value) => {
    expect((await headersForEveryRoute()).get(name)).toBe(value);
  });

  it('sends a Permissions-Policy that denies the sensors this site never uses', async () => {
    const value = (await headersForEveryRoute()).get('permissions-policy') ?? '';
    for (const feature of ['camera', 'microphone', 'geolocation']) {
      expect(value).toMatch(new RegExp(`\\b${feature}=\\(\\)`));
    }
  });

  it('sends HSTS with a max-age of at least a year', async () => {
    const value = (await headersForEveryRoute()).get('strict-transport-security') ?? '';
    const maxAge = Number(/max-age=(\d+)/.exec(value)?.[1]);
    expect(maxAge).toBeGreaterThanOrEqual(365 * 24 * 60 * 60);
  });

  describe('Content-Security-Policy', () => {
    it('is present', async () => {
      expect((await headersForEveryRoute()).get('content-security-policy')).toBeDefined();
    });

    it.each([
      ['default-src', ["'self'"]],
      ['object-src', ["'none'"]],
      ['base-uri', ["'self'"]],
      ['frame-ancestors', ["'none'"]],
      ['form-action', ["'self'"]],
    ])('locks %s to %s', async (name, expected) => {
      const csp = directives((await headersForEveryRoute()).get('content-security-policy')!);
      expect(csp.get(name)).toEqual(expected);
    });

    it('allows inline scripts, because Next inlines its hydration payload in every static page', async () => {
      // A nonce would be stricter, but a nonce is per request and turns every
      // page dynamic. This site is static; see the route table in `next build`.
      const csp = directives((await headersForEveryRoute()).get('content-security-policy')!);
      expect(csp.get('script-src')).toEqual(expect.arrayContaining(["'self'", "'unsafe-inline'"]));
    });

    it('never allows eval, and never allows scripts from a wildcard origin', async () => {
      const csp = directives((await headersForEveryRoute()).get('content-security-policy')!);
      expect(csp.get('script-src')).toEqual(["'self'", "'unsafe-inline'"]);
    });

    it('admits eval and the debug analytics script in development only', async () => {
      // `next dev` serves eval-based bundles; without this the dev server
      // renders but never hydrates. It must not leak into production.
      const dev = directives((await headersForEveryRoute('development')).get('content-security-policy')!);
      expect(dev.get('script-src')).toEqual(
        expect.arrayContaining(["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://va.vercel-scripts.com'])
      );
      const prod = directives((await headersForEveryRoute('production')).get('content-security-policy')!);
      expect(prod.get('script-src')).not.toContain("'unsafe-eval'");
      expect(prod.get('script-src')).not.toContain('https://va.vercel-scripts.com');
    });

    it.each([
      // The Inter @import in globals.css: its stylesheet, then its font files.
      ['style-src', 'https://fonts.googleapis.com'],
      ['font-src', 'https://fonts.gstatic.com'],
      // The engine's last-commit badge on the home page.
      ['img-src', 'https://img.shields.io'],
    ])('admits the one third-party origin the site loads for %s', async (name, origin) => {
      const csp = directives((await headersForEveryRoute()).get('content-security-policy')!);
      expect(csp.get(name)).toContain(origin);
    });

    it('keeps XHR and beacons same-origin (Vercel Web Analytics posts to /_vercel/insights)', async () => {
      const csp = directives((await headersForEveryRoute()).get('content-security-policy')!);
      expect(csp.get('connect-src')).toEqual(["'self'"]);
    });
  });
});
