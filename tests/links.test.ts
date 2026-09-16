import {
  CHROME_WEB_STORE_URL,
  COMMUNITY_SLACK_URL,
  DASHBOARD_URL,
  SIGN_IN_URL,
  TRY_CLOUD_URL,
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

  it('never doubles a slash when a path is appended to the dashboard origin', () => {
    // DASHBOARD_URL is env-driven, so a deployment setting it with a trailing
    // slash would silently produce https://host//signin.
    expect(SIGN_IN_URL).not.toMatch(/(?<!:)\/\//);
    expect(new URL(SIGN_IN_URL).pathname).toBe('/signin');
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

  it('carries no campaign parameter that the dashboard would discard', () => {
    // The dashboard root redirects to /cases and then /login with bare string
    // destinations, so React Router drops the query twice. A ?source= here
    // would look like attribution and measure nothing.
    expect(new URL(TRY_CLOUD_URL).search).toBe('');
  });
});
