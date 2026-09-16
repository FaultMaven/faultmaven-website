/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const dashboard =
      process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://app.faultmaven.ai';
    return [
      {
        // The Cloud beta waiting list is retired — sign-up is open, so there is
        // nothing left to wait for. Anyone arriving on an old link (a blog CTA,
        // a shared URL, a search result) should land on the thing they were
        // waiting for rather than a 404. Temporary, not permanent: the path may
        // come back as a general-availability notify list.
        source: '/waitlist',
        destination: `${dashboard}/?source=website-waitlist`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
