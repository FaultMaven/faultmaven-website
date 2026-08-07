import { Metadata } from 'next';
import { Mail, Bug, MessagesSquare, BookOpen, Slack, PanelRight } from 'lucide-react';
import Link from '@/components/ui/Link';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'How to get help with FaultMaven — email support, bug reports, discussions, and documentation, plus what to include so we can help fast.',
  alternates: {
    canonical: '/support',
  },
};

const SUPPORT_EMAIL = 'support@faultmaven.ai';

const channels = [
  {
    icon: <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: 'Email support',
    body: 'The fastest route for anything account-, installation-, or privacy-related, and the right channel if your question involves details you would rather not post publicly.',
    action: (
      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
      >
        {SUPPORT_EMAIL}
      </a>
    ),
  },
  {
    icon: <Bug className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: 'Report a bug',
    body: 'Something broken or behaving wrongly? File it on the issue tracker for the component involved so it lands in front of the people who maintain it.',
    action: (
      <a
        href="https://github.com/FaultMaven/faultmaven/issues"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
      >
        Open an issue
      </a>
    ),
  },
  {
    icon: <MessagesSquare className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: 'Ask the community',
    body: 'Questions about how to deploy, configure, or get the most out of FaultMaven — and a place to see what other teams have already worked through.',
    action: (
      <a
        href="https://github.com/FaultMaven/faultmaven/discussions"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
      >
        Join the discussions
      </a>
    ),
  },
  {
    icon: <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: 'Read the docs',
    body: 'Setup, deployment, and configuration guides, plus answers to the questions that come up most often.',
    action: (
      <Link
        href="/faq"
        className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
      >
        Browse the FAQ
      </Link>
    ),
  },
];

const productHelp = [
  {
    icon: <Slack className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'FaultMaven for Slack',
    desc: 'Installing, summoning, or removing the Slack app.',
    links: [
      { label: 'About the Slack app', href: '/slack' },
      { label: 'Slack privacy policy', href: '/privacy/slack' },
    ],
  },
  {
    icon: <PanelRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'FaultMaven Copilot',
    desc: 'The browser extension — installation, permissions, and backend setup.',
    links: [
      { label: 'Extension privacy policy', href: '/privacy/extension' },
    ],
  },
];

const includeInReport = [
  'Which surface you were using — the Slack app, the Copilot extension, or the dashboard.',
  'Whether you are on FaultMaven Cloud or a self-hosted FaultMaven server.',
  'What you did, what you expected, and what happened instead.',
  'Any error message shown, and roughly when it occurred.',
];

export default function SupportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] dark:bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Support
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Something not working, or not sure how it should work? Here is how
            to reach us. For anything urgent or private, email is the direct
            line.
          </p>
          <p className="mt-8">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-2xl font-bold text-blue-700 dark:text-blue-400 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center">
            Ways to get help
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900"
              >
                <div className="mb-4">{channel.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {channel.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {channel.body}
                </p>
                {channel.action}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per-product help */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center">
            Help by product
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {productHelp.map((product) => (
              <div
                key={product.title}
                className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  {product.icon}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {product.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {product.desc}
                </p>
                <ul className="space-y-2">
                  {product.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-blue-700 dark:text-blue-400 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to include */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            What to include
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Whichever channel you use, these four things let us skip a round
            trip:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            {includeInReport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-600 dark:text-slate-400 mt-6">
            Please redact secrets, credentials, and customer data from anything
            you attach.
          </p>
        </div>
      </section>

      {/* Response expectations */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            What to expect
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            We are a focused team and we read every message. We aim to
            acknowledge support email within two business days. Security
            reports are triaged ahead of everything else — send those to{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-blue-700 dark:text-blue-400 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>{' '}
            rather than filing them publicly.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            For partnerships, investment, or press, see{' '}
            <Link href="/contact" className="text-blue-700 dark:text-blue-400">
              Contact
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
