// The security headers `next.config.js` applies to every page, asset and API
// response. Its own module so the tests can import the builder directly:
// Next validates the keys of the config object and reports any it does not
// know, so the builder cannot hang off `module.exports` there.
// Every origin a page really loads from, by CSP directive. Keep this list
// equal to what the site loads and nothing more: an origin missing here breaks
// the page in the browser (`pnpm test:browser` catches that), an origin listed
// here that nothing uses is a hole with no purpose.
//
//   fonts.googleapis.com / fonts.gstatic.com  the Inter @import in globals.css
//   img.shields.io                            the last-commit badge on the home page
//   /_vercel/insights/*                       Vercel Web Analytics (same origin)
//
// Scripts allow 'unsafe-inline' because Next inlines its hydration payload in
// every page; the alternative, a per-request nonce, would turn every page
// dynamic, and this site is static. Mermaid and DOMPurify are bundled, not
// loaded from a CDN, so they are covered by 'self'.
//
// Two environments widen the policy, each on an exact match so any other value
// gets the production policy:
//   NODE_ENV === 'development'   `next dev` serves eval-based bundles and loads
//                                its debug analytics script from
//                                va.vercel-scripts.com; without these the dev
//                                server renders but never hydrates.
//   VERCEL_ENV === 'preview'     Vercel preview deployments build with
//                                NODE_ENV=production and load the preview
//                                toolbar: the origins are the ones Vercel
//                                documents for it (vercel.live for scripts,
//                                styles, frames and its websocket on
//                                ws-us3.pusher.com; assets.vercel.com fonts;
//                                vercel.com and blob: images).
function securityHeaders(env = process.env) {
  const isDev = env.NODE_ENV === 'development';
  const isPreview = env.VERCEL_ENV === 'preview';
  const preview = (...sources) => (isPreview ? ' ' + sources.join(' ') : '');

  const contentSecurityPolicy = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'" +
      (isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : '') +
      preview('https://vercel.live'),
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com" + preview('https://vercel.live'),
    "font-src 'self' https://fonts.gstatic.com" + preview('https://vercel.live', 'https://assets.vercel.com'),
    "img-src 'self' data: https://img.shields.io" + preview('https://vercel.live', 'https://vercel.com', 'blob:'),
    "connect-src 'self'" + preview('https://vercel.live', 'wss://ws-us3.pusher.com'),
    "frame-src 'self'" + preview('https://vercel.live'),
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'",
  ].join('; ');

  return [
    { key: 'Content-Security-Policy', value: contentSecurityPolicy },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  ];
}

module.exports = { securityHeaders };
