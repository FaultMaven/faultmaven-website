// Every origin a page really loads from, by CSP directive. Keep this list
// equal to what the site loads and nothing more: an origin missing here breaks
// the page in the browser (the headless check in tests/build catches that), an
// origin listed here that nothing uses is a hole with no purpose.
//
//   fonts.googleapis.com / fonts.gstatic.com  the Inter @import in globals.css
//   img.shields.io                            the last-commit badge on the home page
//   /_vercel/insights/*                       Vercel Web Analytics (same origin in
//                                             production; the dev build loads its
//                                             debug script from va.vercel-scripts.com)
//
// Scripts allow 'unsafe-inline' because Next inlines its hydration payload in
// every page; the alternative, a per-request nonce, would turn every page
// dynamic, and this site is static. Mermaid and DOMPurify are bundled, not
// loaded from a CDN, so they are covered by 'self'.
const isDev = process.env.NODE_ENV !== 'production';

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? ' https://va.vercel-scripts.com' : ''}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://img.shields.io",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // Delivered from here rather than from middleware: in this `src/` layout
    // Next.js only loads middleware from `src/middleware.ts`, and a static
    // site has no other reason to run one.
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        // The Cloud beta waiting list is retired — sign-up is open, so there is
        // nothing left to wait for. Old links (blog CTAs, shared URLs, search
        // results) land on /pricing rather than 404ing: it answers the question
        // they were actually asking — what Cloud costs, that beta is free, and
        // where to sign up.
        //
        // On-site and permanent, both deliberately. /waitlist carried the
        // sitemap's joint-highest priority, and only a same-origin 308 lets its
        // accumulated search signals consolidate onto a page we still publish;
        // a temporary cross-domain bounce to the app root kept the dead URL
        // indexed and dropped a new visitor on a bare sign-in screen with no
        // explanation of where the list went. A future general-availability
        // notify list is a different thing and gets its own path.
        source: '/waitlist',
        destination: '/pricing',
        permanent: true,
      },
      {
        // A post's file is `content/blog/YYYY-MM-DD-slug.md` and its one URL is
        // `/blog/slug`. The date-prefixed form used to render the same page at
        // a second address; links that carry it now land on the canonical one.
        // `:slug` carries its own pattern because path-to-regexp otherwise reads
        // the `-` before it as a prefix and forbids hyphens inside the slug.
        source: '/blog/:date(\\d{4}-\\d{2}-\\d{2})-:slug([^/]+)',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
