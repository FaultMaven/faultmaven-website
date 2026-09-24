/**
 * Off-site destinations that appear in more than one place.
 *
 * These live here so a change lands once. Each one has a small number of
 * deliberate homes — see the beta-invitation notes in the PR that added this
 * file. Adding a call site is a content decision, not a refactor: the point of
 * the invitation is that it is easy to find, not that it is everywhere.
 */

/**
 * Strip trailing slashes from an origin so a path can be appended to it.
 *
 * Exported for its test. The input is a deployment-set environment variable,
 * so `https://app.faultmaven.ai/` is a perfectly reasonable thing for someone
 * to type into Vercel — and without this it produces `https://…//signin`,
 * which is a different path. Asserting on the resolved constant cannot catch
 * that, because whatever the environment already supplies is the only value
 * such a test ever sees.
 */
export function normalizeOrigin(origin: string): string {
  return origin.replace(/\/+$/, '');
}

/** The dashboard. A visitor with no account signs up through the hosted login. */
export const DASHBOARD_URL = normalizeOrigin(
  process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://app.faultmaven.ai'
);

/**
 * Existing users. Kept distinct from the invitation so the two read
 * differently — and so neither entry point can be reached by the other's
 * audience.
 *
 * No `?source=` for the same reason TRY_CLOUD_URL has none, one hop earlier:
 * the dashboard's `/signin` route is `<Navigate to="/login" replace />` with a
 * bare string destination, so React Router drops the query outright, and
 * nothing there reads `source` anyway. A parameter that looks like
 * attribution and measures nothing is worse than none.
 */
export const SIGN_IN_URL = `${DASHBOARD_URL}/signin`;

/**
 * Where we send someone who wants to start on FaultMaven Cloud.
 *
 * `/signup`, not the dashboard root — that is website#42. A hosted login opens
 * on its SIGN-IN screen by default, so the root sent a first-time visitor
 * through `/cases` to `/login` and on to a form asking for an account they do
 * not have. `/signup` is a redirect shim that asks nothing and hands off with
 * `screen_hint=sign-up` (core contract 6.1.0), which is the issue's invariant:
 * the primary call to action reaches the sign-up screen without an
 * intermediate page that asks them to sign in.
 *
 * Deliberately carries no `?source=` campaign parameter. The handoff to the
 * IdP does not preserve one, so a parameter here would look like attribution
 * and measure nothing.
 */
export const TRY_CLOUD_URL = `${DASHBOARD_URL}/signup`;

/**
 * Where every "self-host it" call to action points.
 *
 * An on-site page rather than the GitHub Quick Start, so the visit is counted
 * by the site's page analytics. A link straight to GitHub is not: GitHub's
 * traffic view reports the referring domain, not the page or a query string,
 * so tagging those links would measure nothing. The page then hands off to
 * QUICKSTART_URL.
 */
export const SELF_HOST_PATH = '/self-host';

/** The engine's own install instructions — the page SELF_HOST_PATH hands off to. */
export const QUICKSTART_URL = 'https://github.com/FaultMaven/faultmaven#quick-start';

/** The engine repository. */
export const ENGINE_REPO_URL = 'https://github.com/FaultMaven/faultmaven';

/**
 * The community workspace. FaultMaven is installed here, so someone can try it
 * with no account and nothing installed — and it is where the instructions for
 * getting FaultMaven into your own workspace live, because during beta that is
 * a conversation rather than a button.
 */
export const COMMUNITY_SLACK_URL =
  'https://join.slack.com/t/faultmaven-community/shared_invite/zt-493fv3w3o-mPBBI2v3mMYQKS4649mY1A';

/** The published Copilot listing. One install serves Cloud or a self-hosted server. */
export const CHROME_WEB_STORE_URL =
  'https://chromewebstore.google.com/detail/faultmaven-copilot/fghoagggojmkdopidfopijfnlmchjcng';
