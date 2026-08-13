import { Metadata } from 'next';
import {
  ShieldCheck,
  BookOpen,
  Search,
  AlertTriangle,
  CreditCard,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from '@/components/ui/Link';

export const metadata: Metadata = {
  title: 'FaultMaven for Slack',
  description:
    'FaultMaven for Slack is an AI troubleshooting copilot that runs the investigation in your incident thread — triage, hypotheses, targeted data requests, a verified fix.',
  alternates: {
    canonical: '/slack',
  },
};

const INSTALL_URL = 'https://slack.faultmaven.ai/slack/install';

const howItWorks = [
  {
    title: 'It triages before it answers',
    desc: 'FaultMaven establishes what actually failed, when, and for whom before proposing anything — instead of pattern-matching the first symptom into a guess.',
  },
  {
    title: 'It forms hypotheses and tests them',
    desc: 'Competing explanations are tracked with confidence, and each one gets a targeted data request that will confirm or eliminate it.',
  },
  {
    title: 'It asks for the specific data it needs',
    desc: 'Paste the log, drop the config, share the stack trace. FaultMaven reads what you share in the thread and folds it into the investigation.',
  },
  {
    title: 'It closes the loop on the fix',
    desc: 'A case ends when the root cause is identified and the fix is verified — not when the conversation runs out. You approve and execute; FaultMaven never touches your systems.',
  },
];

const setupSteps = [
  {
    title: 'Click "Add to Slack"',
    desc: 'From this page or the Slack Marketplace listing. Slack shows you exactly which permissions FaultMaven is asking for.',
  },
  {
    title: 'Approve the permissions',
    desc: 'A Slack workspace owner or admin approves the install. Every scope FaultMaven requests, and why it needs it, is itemized in the privacy policy.',
  },
  {
    title: 'Invite it to a channel',
    desc: 'In any channel where you want it available, type /invite @FaultMaven. FaultMaven cannot see a channel until it has been invited to that channel.',
  },
  {
    title: 'Summon it',
    desc: '@mention FaultMaven in a thread, run the "Ask FaultMaven" shortcut on a message, or send it a direct message. That is the whole setup — there is no account to create, no API key to paste, and no backend to configure.',
  },
];

const slackIntegration = [
  {
    surface: 'Channel threads',
    detail:
      'An @mention starts an investigation as a threaded reply. Everything FaultMaven says stays in that thread, so the parent channel is not flooded while a case is worked.',
  },
  {
    surface: 'Message shortcut',
    detail:
      'The "Ask FaultMaven" shortcut on any message opens an investigation seeded with it — the natural move when an alert or stack trace lands in a channel.',
  },
  {
    surface: 'Direct messages',
    detail:
      'DM FaultMaven to work a problem privately. Each new message in the composer starts its own investigation; replies in a thread continue the existing one.',
  },
  {
    surface: 'File uploads',
    detail:
      'Attach a log, a config, or a stack trace to a message in an investigation thread and FaultMaven reads it on the spot. No separate upload step.',
  },
  {
    surface: 'One case per thread',
    detail:
      'Each thread maps to its own FaultMaven case, so two incidents running side by side in the same channel never bleed into each other.',
  },
  {
    surface: 'App Home tab',
    detail:
      "FaultMaven's Home tab in Slack explains how to summon it and what it does, so a teammate who has never used it can get oriented without leaving Slack.",
  },
  {
    surface: 'Busy-thread signal',
    detail:
      'If you send something while FaultMaven is already working a turn in that thread, it marks your message with a ⏭️ reaction so you know to send it again rather than wondering if it was missed.',
  },
];

const groundedIn = [
  {
    icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Your data',
    desc: 'Logs, errors, configs, and files you share in the thread.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Your runbooks',
    desc: 'Documentation and runbooks you have loaded into FaultMaven.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Your past fixes',
    desc: 'Resolved cases become retrievable knowledge the next investigation starts from.',
  },
];

export default function SlackAppPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
            FaultMaven for Slack
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            The teammate who has seen every incident
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
            Troubleshooting, worked in the thread where it started.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            An AI troubleshooting copilot that works a problem the way a seasoned
            engineer does — and does it where your team is already working. It
            runs the investigation: triage, hypotheses, targeted data requests,
            a verified fix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href={INSTALL_URL} variant="primary">
              Add to Slack
            </Button>
            <Button asChild href="/product" variant="secondary">
              See How It Works
            </Button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
            Free to install, and nothing to configure — the app runs against
            FaultMaven Cloud, currently in beta.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            <Link href="/privacy/slack" className="underline hover:text-[#2563EB]">
              Privacy Policy
            </Link>
            {' · '}
            <Link href="/support" className="underline hover:text-[#2563EB]">
              Support
            </Link>
            {' · '}
            <Link href="/terms" className="underline hover:text-[#2563EB]">
              Terms of Service
            </Link>
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            What FaultMaven is
          </h2>
          <div className="space-y-5 text-lg text-slate-700 dark:text-slate-300">
            <p>
              FaultMaven is an AI troubleshooting copilot for engineering
              teams. You bring it a symptom — an error, a log, a failing
              deploy, an alert nobody can explain — and it works the problem the
              way an experienced engineer would, rather than returning a single
              guess and stopping.
            </p>
            <p>
              Concretely, that means it triages what actually failed before
              proposing anything; forms competing hypotheses and tracks its
              confidence in each; asks you for the specific piece of data
              that would confirm or eliminate one of them; and keeps going until
              a root cause is identified and the fix is verified. When a case
              resolves, it can capture what was learned as a runbook, so the
              next investigation starts from it instead of from scratch.
            </p>
            <p>
              The Slack app is the team-facing front end for that engine. It
              exists because troubleshooting already happens in Slack — someone
              pastes a stack trace into a channel and three people start
              guessing. FaultMaven joins that thread as a participant: it reads
              the data shared in the thread, replies in the thread, and
              keeps one investigation per thread so parallel incidents stay
              separate. It reasons over your logs, errors, and configs alongside
              the runbooks and past fixes your team has accumulated.
            </p>
            <p>
              It is a copilot, not an autopilot. FaultMaven has no credentials
              to your infrastructure and takes no action on your systems. It
              proposes; you approve and execute.
            </p>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
            Setting it up
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto text-center">
            Four steps, and three of them are clicks.
          </p>
          <div className="space-y-6">
            {setupSteps.map((step, idx) => (
              <div
                key={step.title}
                className="flex gap-6 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
              How FaultMaven is triggered — and how it is not
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              FaultMaven is summon-only. It acts when you call it and stays out
              of the way otherwise.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <strong>@mentions</strong> — the primary trigger. @mention
                FaultMaven in a channel thread to start an investigation, then
                simply reply in that thread to continue it; no further @mention
                is needed.
              </li>
              <li>
                <strong>The &quot;Ask FaultMaven&quot; message shortcut</strong>{' '}
                — available from the &quot;More actions&quot; menu on any
                message.
              </li>
              <li>
                <strong>Direct messages</strong> — message FaultMaven directly
                to work a problem privately.
              </li>
              <li>
                <strong>No slash commands.</strong> FaultMaven does not register
                any; there is no <code>/faultmaven</code> command to remember.
              </li>
              <li>
                <strong>No automatic channel responses.</strong> FaultMaven
                never replies on its own to channel chatter. It acts only on a
                summons or on a reply inside a thread it is already
                investigating — every other message is discarded.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works a case */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center">
            How it works a case
          </h2>
          <div className="space-y-6">
            {howItWorks.map((step, idx) => (
              <div
                key={step.title}
                className="flex gap-6 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slack integration detail */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
            How it fits into Slack
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto text-center">
            Where each capability actually lands in your workspace.
          </p>
          <dl className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
            {slackIntegration.map((row) => (
              <div key={row.surface} className="py-6 md:flex md:gap-8">
                <dt className="font-bold text-slate-900 dark:text-slate-100 md:w-56 md:flex-shrink-0 mb-2 md:mb-0">
                  {row.surface}
                </dt>
                <dd className="text-slate-600 dark:text-slate-400">
                  {row.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Grounded in */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
            Grounded in what your team already knows
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
            FaultMaven reasons from your own material, and shows the evidence
            behind every step.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {groundedIn.map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required disclaimers */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-10 text-center">
            Before you install, two things to know
          </h2>
          <div className="space-y-6">
            <div className="p-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/40">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  AI accuracy
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                FaultMaven is powered by large language models. Its output —
                including its triage, its hypotheses, the data it asks for,
                and the fixes it proposes — may be incomplete, misleading, or
                simply wrong, and it can be confidently wrong. Treat every
                response as a suggestion from a colleague you have not verified
                yet, not as an authoritative answer. Review and validate before
                acting on production systems. FaultMaven proposes; you approve
                and execute.
              </p>
            </div>
            <div className="p-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/40">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  A paid Slack plan is required for the AI agent container
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Slack&apos;s AI agent container — the dedicated assistant panel
                that opens alongside your conversation — is a paid Slack
                feature. Reaching FaultMaven there requires a paid Slack
                subscription (Pro, Business+, or Enterprise Grid).
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-4">
                FaultMaven&apos;s other surfaces do not depend on that
                container: <strong>@mentioning FaultMaven in a channel
                thread</strong> and the <strong>&quot;Ask FaultMaven&quot;
                message shortcut</strong> work on any Slack plan, including
                free. Those are the primary ways teams use it, so a free
                workspace can still run full investigations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + links */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 text-center">
            You stay in command
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 text-center">
            FaultMaven suggests; you approve and execute. It has no access to
            your infrastructure and takes no action on your systems. Data you
            share is processed to run the investigation and nothing else — see
            the{' '}
            <Link href="/privacy/slack" className="text-blue-600 dark:text-blue-400">
              FaultMaven for Slack privacy policy
            </Link>{' '}
            for exactly what it accesses and why.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild href={INSTALL_URL} variant="primary">
              Add to Slack
            </Button>
            <Button asChild href="/support" variant="secondary">
              Get support
            </Button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-8 text-center">
            <Link href="/privacy/slack" className="hover:text-[#2563EB]">
              Privacy Policy
            </Link>
            {' · '}
            <Link href="/terms" className="hover:text-[#2563EB]">
              Terms of Service
            </Link>
            {' · '}
            <Link href="/support" className="hover:text-[#2563EB]">
              Support
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
