import { ImageResponse } from 'next/og';

/**
 * Default social card for the whole site.
 *
 * Until this existed, every shared link — including the beta announcement —
 * rendered as a blank card. Generated at build time rather than checked in as
 * a PNG so the wording stays in one place with the rest of the copy.
 *
 * No external fonts or images: `next/og` ships its own font, and a remote
 * asset would be a build-time network dependency for no gain. (Do not reach
 * for the root `middleware.ts` as a reason — it sets a strict CSP but never
 * runs: Next only loads middleware beside the `app/` directory, which in this
 * `src/` project means `src/middleware.ts`. The site ships none of those
 * headers today.)
 */
export const alt = 'FaultMaven — the AI troubleshooting copilot, self-hosted or run for you';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0f172a',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, #1e3a8a 0%, transparent 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontWeight: 600,
            color: '#60a5fa',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          FaultMaven
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 68,
            fontWeight: 700,
            color: '#f8fafc',
            lineHeight: 1.15,
          }}
        >
          The AI Troubleshooting Copilot
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 34,
            color: '#cbd5e1',
            lineHeight: 1.35,
          }}
        >
          Run it yourself, or let us run it for you — same engine.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 48,
            fontSize: 26,
            color: '#94a3b8',
          }}
        >
          Fair Source · Self-Hostable · FaultMaven Cloud
        </div>
      </div>
    ),
    size,
  );
}
