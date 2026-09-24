import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: 'FaultMaven | AI Troubleshooting Copilot — Self-Hosted or Run for You',
    template: '%s | FaultMaven'
  },
  description: 'The AI troubleshooting copilot that works a problem like a seasoned engineer — goal-driven, methodical, evidence-based, and self-learning. Run it yourself, or let us run it for you on FaultMaven Cloud — same fair-source engine.',
  keywords: ['AI Troubleshooting', 'SRE Tools', 'Incident Response', 'Root Cause Analysis', 'MTTR', 'Operations AI', 'DevOps', 'Log Analysis', 'AI Copilot', 'Fair Source', 'Self-Hosted', 'FaultMaven Core', 'Docker'],
  authors: [{ name: 'FaultMaven Team' }],
  creator: 'FaultMaven',
  publisher: 'FaultMaven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.faultmaven.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.faultmaven.ai',
    title: 'FaultMaven | AI Troubleshooting Copilot — Self-Hosted or Run for You',
    description: 'The AI troubleshooting copilot that works a problem like a seasoned engineer — goal-driven, methodical, evidence-based, and self-learning. Run it yourself, or let us run it for you on FaultMaven Cloud — same fair-source engine.',
    siteName: 'FaultMaven',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FaultMaven | AI Troubleshooting Copilot — Self-Hosted or Run for You',
    description: 'The AI troubleshooting copilot that works a problem like a seasoned engineer — goal-driven, methodical, evidence-based, and self-learning. Run it yourself, or let us run it for you on FaultMaven Cloud — same fair-source engine.',
    creator: '@faultmaven',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Add verification tokens when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 flex flex-col min-h-screen">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-blue-600 text-white px-4 py-2 rounded shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} aria-label="Main content" className="flex-grow">{children}</main>
        <Footer />
        {/* Cookieless page-view counts (Vercel Web Analytics). Script and
            beacon are same-origin (/_vercel/insights/*), so the 'self' CSP
            admits them. */}
        <Analytics />
      </body>
    </html>
  );
}
