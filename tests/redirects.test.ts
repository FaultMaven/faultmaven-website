const nextConfig = require('../next.config.js');

// /waitlist was the joint-highest-priority page in the sitemap and is the
// target of external blog CTAs. Deleting the page without this redirect 404s
// every one of those links, and the only evidence the redirect exists would
// otherwise be a curl run in a pull request body.
describe('retired routes', () => {
  it('redirects /waitlist rather than 404ing it', async () => {
    const rules = await nextConfig.redirects();
    const waitlist = rules.find((r: { source: string }) => r.source === '/waitlist');
    expect(waitlist).toBeDefined();
  });

  it('sends /waitlist somewhere on this site, so its search signals consolidate', async () => {
    const rules = await nextConfig.redirects();
    const waitlist = rules.find((r: { source: string }) => r.source === '/waitlist');
    // A cross-origin destination keeps the dead URL indexed and drops the
    // visitor on a bare sign-in screen with no explanation.
    expect(waitlist.destination.startsWith('/')).toBe(true);
    expect(waitlist.destination).not.toMatch(/^https?:/);
  });

  it('answers the question the visitor was asking — what Cloud costs', async () => {
    const rules = await nextConfig.redirects();
    const waitlist = rules.find((r: { source: string }) => r.source === '/waitlist');
    expect(waitlist.destination).toBe('/pricing');
  });

  it('is permanent, because the waiting list is not coming back', async () => {
    const rules = await nextConfig.redirects();
    const waitlist = rules.find((r: { source: string }) => r.source === '/waitlist');
    expect(waitlist.permanent).toBe(true);
  });
});

// A post's file is `YYYY-MM-DD-slug.md` and its address is `/blog/slug`: a
// date-prefixed post URL redirects permanently to the canonical slug, so a
// link that carries the date lands on the one address and nothing is indexed
// twice. `tests/built-site` checks the live status.
describe('date-prefixed post URLs', () => {
  const rule = async () => {
    const rules = await nextConfig.redirects();
    return rules.find((r: { source: string }) => r.source.startsWith('/blog/'));
  };

  it('redirects /blog/YYYY-MM-DD-slug to /blog/slug', async () => {
    const r = await rule();
    expect(r).toBeDefined();
    expect(r.source).toBe('/blog/:date(\\d{4}-\\d{2}-\\d{2})-:slug([^/]+)');
    expect(r.destination).toBe('/blog/:slug');
  });

  it('is permanent, so the clean slug inherits the old address', async () => {
    expect((await rule()).permanent).toBe(true);
  });
});
