import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'FaultMaven | The AI-Powered Troubleshooting Copilot for Modern Engineering',
    template: '%s | FaultMaven'
  },
  description: 'Open-source AI troubleshooting assistant that helps Developers, SREs, and DevOps engineers diagnose complex issues and capture troubleshooting context. Privacy-first AI with local knowledge base. Available as self-hosted or fully managed SaaS.',
  keywords: ['AI Troubleshooting', 'SRE Tools', 'Incident Response', 'Root Cause Analysis', 'MTTR', 'Operations AI', 'DevOps', 'Log Analysis', 'AI Copilot', 'Open Source', 'Self-Hosted', 'Docker'],
  authors: [{ name: 'FaultMaven Team' }],
  creator: 'FaultMaven',
  publisher: 'FaultMaven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://faultmaven.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faultmaven.com',
    title: 'FaultMaven | The AI-Powered Troubleshooting Copilot for Modern Engineering',
    description: 'Diagnose incidents faster with privacy-first AI and a local knowledge base. Self-hosted open source or fully managed SaaS.',
    siteName: 'FaultMaven',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FaultMaven | The AI-Powered Troubleshooting Copilot for Modern Engineering',
    description: 'Diagnose incidents faster with privacy-first AI and a local knowledge base. Self-hosted open source or fully managed SaaS.',
    creator: '@faultmaven',
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
      </body>
    </html>
  );
}
