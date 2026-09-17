import {
  CHROME_WEB_STORE_URL,
  COMMUNITY_SLACK_URL,
  DASHBOARD_URL,
  SIGN_IN_URL,
  TRY_CLOUD_URL,
  normalizeOrigin,
} from '@/lib/links';

// These five constants are the beta invitation. Each is reachable from several
// pages, so a bad one is wrong everywhere at once and a reader only finds out
// by clicking. The point of the module is that a change lands once; the point
// of this file is that the change is still a working link when it lands.
describe('outbound links', () => {
  const all = { CHROME_WEB_STORE_URL, COMMUNITY_SLACK_URL, DASHBOARD_URL, SIGN_IN_URL, TRY_CLOUD_URL };

  it.each(Object.entries(all))('%s is an absolute https URL', (_name, url) => {
    expect(() => new URL(url)).not.toThrow();
    expect(new URL(url).protocol).toBe('https:');
  });

  it('appends a path to the dashboard origin without doubling the slash', () => {
    expect(new URL(SIGN_IN_URL).pathname).toBe('/signin');
  });

  // The assertion above can only ever see the origin this environment already
  // supplies, so on its own it proves nothing about the case that actually
  // breaks: a deployment setting NEXT_PUBLIC_DASHBOARD_URL with a trailing
  // slash. Test the normalisation itself, with the inputs it exists for.
  describe('normalizeOrigin', () => {
    it.each([
      ['https://app.faultmaven.ai/', 'https://app.faultmaven.ai'],
      ['https://app.faultmaven.ai///', 'https://app.faultmaven.ai'],
      ['https://app.faultmaven.ai', 'https://app.faultmaven.ai'],
      ['https://example.test/base/', 'https://example.test/base'],
    ])('%s -> %s', (input, expected) => {
      expect(normalizeOrigin(input)).toBe(expected);
    });

    it('yields a single-slash path once a route is appended', () => {
      expect(`${normalizeOrigin('https://app.faultmaven.ai/')}/signin`).toBe(
        'https://app.faultmaven.ai/signin'
      );
    });
  });

  it('points the Slack link at the community workspace invite, not a workspace page', () => {
    // A bare faultmaven-community.slack.com URL is a sign-in wall for people
    // who are not members — which is everyone this link is aimed at.
    const url = new URL(COMMUNITY_SLACK_URL);
    expect(url.host).toBe('join.slack.com');
    expect(url.pathname).toContain('/shared_invite/');
  });

  it('points the extension link at the published listing id', () => {
    expect(CHROME_WEB_STORE_URL).toContain('fghoagggojmkdopidfopijfnlmchjcng');
  });

  it('carries no campaign parameter that the handoff would discard', () => {
    // The handoff to the IdP does not preserve one, so a ?source= here would
    // look like attribution and measure nothing.
    expect(new URL(TRY_CLOUD_URL).search).toBe('');
  });

  it('sends a first-time visitor to sign-up, not to the app root (website#42)', () => {
    // The root routes through /cases to /login, which asks for an account the
    // visitor does not have yet. /signup is the shim that opens the hosted
    // login on its sign-up screen instead.
    expect(new URL(TRY_CLOUD_URL).pathname).toBe('/signup');
  });

  it('keeps the sign-in and sign-up entry points distinct', () => {
    // They read differently on the page and must not collapse into one URL:
    // a returning user sent to sign-up, or a new one sent to sign-in, is the
    // whole defect in both directions.
    expect(TRY_CLOUD_URL).not.toBe(SIGN_IN_URL);
    expect(new URL(SIGN_IN_URL).pathname).toBe('/signin');
  });
});
