import { Metadata } from 'next';
import { AtSign, MessageSquare, Zap, ShieldCheck, BookOpen, Search } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from '@/components/ui/Link';

export const metadata: Metadata = {
  title: 'FaultMaven for Slack',
  description:
    'FaultMaven for Slack is an AI troubleshooting copilot that runs the investigation in your incident thread — triage, hypotheses, targeted evidence, a verified fix.',
  alternates: {
    canonical: '/slack',
  },
};

const INSTALL_URL = 'https://slack.faultmaven.ai/slack/install';

const summonWays = [
  {
    icon: <AtSign className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: '@mention it in a channel',
    desc: 'Invite FaultMaven to a channel and @mention it in a thread. It reads that thread for context and opens an investigation, replying in-thread so the channel stays quiet.',
  },
  {
    icon: <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: 'Run the "Ask" shortcut',
    desc: 'On any alert, stack trace, or error message, use the message shortcut to open an investigation seeded with that message — no copy-paste.',
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: 'Send it a direct message',
    desc: 'Work a problem privately in a DM. Each investigation gets its own thread, so separate problems stay separate.',
  },
];

const howItWorks = [
  {
    title: 'It triages before it answers',
    desc: 'FaultMaven establishes what actually failed, when, and for whom before proposing anything — instead of pattern-matching the first symptom into a guess.',
  },
  {
    title: 'It forms hypotheses and tests them',
    desc: 'Competing explanations are tracked with confidence, and each one gets a targeted evidence request that will confirm or eliminate it.',
  },
  {
    title: 'It asks for the specific evidence it needs',
    desc: 'Paste the log, drop the config, share the stack trace. FaultMaven reads what you share in the thread and folds it into the investigation.',
  },
  {
    title: 'It closes the loop on the fix',
    desc: 'A case ends when the root cause is identified and the fix is verified — not when the conversation runs out. You approve and execute; FaultMaven never touches your systems.',
  },
];

const groundedIn = [
  {
    icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Your evidence',
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
      <section className="relative py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] dark:bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-4">
            FaultMaven for Slack
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            The teammate who has seen every incident
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            An AI troubleshooting copilot that works a problem the way a seasoned
            engineer does — and does it in the thread where your team is already
            working. It runs the investigation: triage, hypotheses, targeted
            evidence, a verified fix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href={INSTALL_URL} variant="primary" className="text-lg px-8">
              Add to Slack
            </Button>
            <Button asChild href="/product" variant="secondary" className="text-lg px-8">
              See the product
            </Button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
            Free to install. Connects to FaultMaven Cloud or to a FaultMaven
            server you self-host.
          </p>
        </div>
      </section>

      {/* Summon-only */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
            It only joins where you invite it
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
            FaultMaven is summon-only. It acts when you call it and stays out of
            the way otherwise — it does not follow along with channel
            conversations it has not been invited into.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {summonWays.map((way) => (
              <div
                key={way.title}
                className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900"
              >
                <div className="mb-4">{way.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {way.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{way.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-10 max-w-3xl mx-auto text-center">
            Once a thread is an investigation, just reply in it to keep going —
            no need to @mention again.
          </p>
        </div>
      </section>

      {/* How it works a case */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
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

      {/* Trust + links */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
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
