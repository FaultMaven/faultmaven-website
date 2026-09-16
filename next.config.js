/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ];
  },
};

module.exports = nextConfig;
