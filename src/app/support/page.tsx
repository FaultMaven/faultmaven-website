import { Metadata } from 'next';
import {
  Mail,
  Bug,
  MessagesSquare,
  Slack,
  PanelRight,
  LifeBuoy,
  ShieldAlert,
  Trash2,
} from 'lucide-react';
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

const emailTopics = [
  {
    icon: <LifeBuoy className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Installing or using the app',
    desc: 'Trouble adding FaultMaven to your Slack workspace, inviting it to a channel, or getting it to respond.',
  },
  {
    icon: <Bug className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Something is broken',
    desc: 'An error, a wrong answer, or behavior that does not match what the docs say.',
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Privacy, data, or security',
    desc: 'Data deletion requests, questions about what the app accesses, or a security report. Please send these by email rather than posting them publicly.',
  },
  {
    icon: <Trash2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Removing the app',
    desc: 'Uninstalling FaultMaven, or asking us to delete your installation record and case data.',
  },
];

const communityChannels = [
  {
    icon: <MessagesSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Community discussions',
    desc: 'See what other teams have worked through, or ask in the open.',
    href: 'https://github.com/FaultMaven/faultmaven/discussions',
    cta: 'Open discussions',
  },
  {
    icon: <Bug className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Public issue tracker',
    desc: 'Track a bug in the open, or check whether one is already filed.',
    href: 'https://github.com/FaultMaven/faultmaven/issues',
    cta: 'Open the tracker',
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
  'Whether you are on FaultMaven Cloud or a Standalone deployment you run yourself.',
  'What you did, what you expected, and what happened instead.',
  'Any error message shown, and roughly when it occurred.',
];

export default function SupportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Support
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Email us. No account, no sign-up, and no third-party login needed —
            write to the address below from whatever mail client you already
            use, and a person will read it.
          </p>
          <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900 px-10 py-8">
            <Mail className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 hover:underline break-all"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The support address for FaultMaven, including the Slack app.
            </p>
          </div>
        </div>
      </section>

      {/* What to email us about */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
            What to email us about
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
            Anything below — and anything else. There is no wrong category; the
            list is here so you know this address is the right one.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {emailTopics.map((topic) => (
              <div
                key={topic.title}
                className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900"
              >
                <div className="mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {topic.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-lg font-semibold text-blue-700 dark:text-blue-400 hover:underline"
            >
              Email {SUPPORT_EMAIL}
            </a>
          </p>
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
            These four things let us skip a round trip:
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

      {/* Optional community channels */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
            Prefer to ask in public?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto text-center">
            These are optional community channels, not a requirement for
            support. They are hosted on GitHub and need a free GitHub account —
            if you would rather not create one, email us instead and you lose
            nothing.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {communityChannels.map((channel) => (
              <div
                key={channel.href}
                className="p-8 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  {channel.icon}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {channel.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {channel.desc}
                </p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                >
                  {channel.cta} <span aria-hidden="true">↗</span>
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Requires a GitHub account
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
