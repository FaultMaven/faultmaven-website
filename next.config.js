const { securityHeaders } = require('./security-headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    // Delivered from here rather than from middleware: in this `src/` layout
    // Next.js only loads middleware from `src/middleware.ts`, and a static
    // site has no other reason to run one. `/(.*)` covers every page, asset
    // and API response.
    return [{ source: '/(.*)', headers: securityHeaders() }];
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
        // `/blog/slug`: a date-prefixed post URL redirects to the canonical
        // slug, so links that carry the date land on the one address.
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
