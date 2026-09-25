// `export {}` makes this a module, so its top-level names do not collide with
// tests/redirects.test.ts, which also loads the config as a script.
export {};

const nextConfig = require('../next.config.js');
const { securityHeaders } = require('../security-headers.js');

type Header = { key: string; value: string };
type Rule = { source: string; headers: Header[] };

// Headers come from `headers()` in `next.config.js`, not from middleware: in
// this `src/` layout Next.js loads middleware only from `src/middleware.ts`.
// This pins the set; `tests/built-site` checks that the built server sends it
// on every page, asset and API response.
async function headersForEveryRoute(): Promise<Map<string, string>> {
  const rules: Rule[] = await nextConfig.headers();
  const catchAll = rules.find((r) => r.source === '/(.*)');
  expect(catchAll).toBeDefined();
  return new Map(catchAll!.headers.map((h) => [h.key.toLowerCase(), h.value]));
}

/** The policy `headers()` would build under the given environment. */
function policyFor(env: Record<string, string>): Map<string, string[]> {
  const headers: Header[] = securityHeaders(env);
  const csp = headers.find((h) => h.key === 'Content-Security-Policy');
  expect(csp).toBeDefined();
  return directives(csp!.value);
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

const PRODUCTION = { NODE_ENV: 'production', VERCEL_ENV: 'production' };

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

  it('does not advertise the framework', async () => {
    expect(nextConfig.poweredByHeader).toBe(false);
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
    ])('locks %s to %s', (name, expected) => {
      expect(policyFor(PRODUCTION).get(name)).toEqual(expected);
    });

    it('allows inline scripts, because Next inlines its hydration payload in every static page', () => {
      // A nonce would be stricter, but a nonce is per request and turns every
      // page dynamic. This site is static; see the route table in `next build`.
      expect(policyFor(PRODUCTION).get('script-src')).toEqual(["'self'", "'unsafe-inline'"]);
    });

    it.each([
      // The Inter @import in globals.css: its stylesheet, then its font files.
      ['style-src', 'https://fonts.googleapis.com'],
      ['font-src', 'https://fonts.gstatic.com'],
      // The engine's last-commit badge on the home page.
      ['img-src', 'https://img.shields.io'],
    ])('admits the one third-party origin the site loads for %s', (name, origin) => {
      expect(policyFor(PRODUCTION).get(name)).toContain(origin);
    });

    it('keeps XHR and beacons same-origin (Vercel Web Analytics posts to /_vercel/insights)', () => {
      expect(policyFor(PRODUCTION).get('connect-src')).toEqual(["'self'"]);
    });

    describe('environment branches', () => {
      const DEV_ONLY = ["'unsafe-eval'", 'https://va.vercel-scripts.com'];

      it('admits eval and the debug analytics script under NODE_ENV=development', () => {
        // `next dev` serves eval-based bundles; without this the dev server
        // renders but never hydrates.
        expect(policyFor({ NODE_ENV: 'development' }).get('script-src')).toEqual(
          expect.arrayContaining(DEV_ONLY)
        );
      });

      it.each(['production', 'test', 'staging', ''])(
        'gives NODE_ENV=%p the production script policy — the branch is an exact match, not "anything but production"',
        (nodeEnv) => {
          expect(policyFor({ NODE_ENV: nodeEnv }).get('script-src')).toEqual(["'self'", "'unsafe-inline'"]);
        }
      );

      it('admits the Vercel preview toolbar under VERCEL_ENV=preview only', () => {
        // Preview deployments build with NODE_ENV=production and load the
        // toolbar from the origins Vercel documents for it.
        const preview = policyFor({ NODE_ENV: 'production', VERCEL_ENV: 'preview' });
        expect(preview.get('script-src')).toContain('https://vercel.live');
        expect(preview.get('style-src')).toContain('https://vercel.live');
        expect(preview.get('frame-src')).toContain('https://vercel.live');
        expect(preview.get('font-src')).toEqual(expect.arrayContaining(['https://vercel.live', 'https://assets.vercel.com']));
        expect(preview.get('img-src')).toEqual(expect.arrayContaining(['https://vercel.live', 'https://vercel.com', 'blob:']));
        expect(preview.get('connect-src')).toEqual(expect.arrayContaining(['https://vercel.live', 'wss://ws-us3.pusher.com']));
        expect(preview.get('script-src')).not.toEqual(expect.arrayContaining(DEV_ONLY));
      });

      it.each(['production', 'development', 'staging', ''])(
        'never admits the preview toolbar origins under VERCEL_ENV=%p',
        (vercelEnv) => {
          const csp = policyFor({ NODE_ENV: 'production', VERCEL_ENV: vercelEnv });
          for (const sources of Array.from(csp.values())) {
            expect(sources.filter((s) => /vercel|pusher|^blob:$/.test(s))).toEqual([]);
          }
        }
      );

      it('uses the process environment when none is given', () => {
        // jest runs with NODE_ENV=test, so this is the production policy.
        const fromProcess: Header[] = securityHeaders();
        const explicit: Header[] = securityHeaders({
          NODE_ENV: process.env.NODE_ENV,
          VERCEL_ENV: process.env.VERCEL_ENV,
        });
        expect(fromProcess).toEqual(explicit);
      });
    });
  });
});
