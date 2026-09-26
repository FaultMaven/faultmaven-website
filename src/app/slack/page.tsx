import {
  ShieldCheck,
  BookOpen,
  Search,
  AlertTriangle,
  CreditCard,
  Users,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from '@/components/ui/Link';
import DemoVideo from '@/components/slack/DemoVideo';
import { Card, CardTitle, IconTile, StepNumber } from '@/components/ui/card';
import { PageHeader, Section, SectionHeader, quietLinkClass, textLinkClass } from '@/components/ui/Section';
import type { ReactNode } from 'react';
import { COMMUNITY_SLACK_URL, SIGN_IN_URL, SLACK_INSTALL_URL } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'FaultMaven for Slack',
  description:
    'FaultMaven for Slack is an AI troubleshooting copilot that runs the investigation in your incident thread — triage, hypotheses, targeted data requests, a verified fix.',
  path: '/slack',
});

// During beta a workspace is connected to its FaultMaven account by hand after
// the app is installed, so a team's cases land in its own account rather than
// a shared one. The steps below match the ones in the community workspace.

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

const stepLinkClass = 'font-medium text-blue-600 hover:underline dark:text-blue-400';

const setupSteps: { title: string; desc: ReactNode }[] = [
  {
    title: 'Sign in with your work email',
    desc: (
      <>
        Sign in to{' '}
        <a href={SIGN_IN_URL} className={stepLinkClass}>
          FaultMaven Cloud
        </a>{' '}
        with your work email. Your company account is created from your email domain, so a personal
        address (gmail.com and the like) makes a private account your colleagues can&apos;t join.
      </>
    ),
  },
  {
    title: 'Install FaultMaven for Slack',
    desc: (
      <>
        Install it from the{' '}
        <a href={SLACK_INSTALL_URL} className={stepLinkClass}>
          install page
        </a>
        . Slack shows exactly which permissions FaultMaven is asking for, and a workspace owner or
        admin approves them. Every scope FaultMaven requests, and why it needs it, is itemized in the{' '}
        <Link href="/privacy/slack" className={stepLinkClass}>
          privacy policy
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Email us to connect it',
    desc: (
      <>
        During beta we connect each workspace by hand, so that a team&apos;s cases land in that
        team&apos;s own account instead of a shared one. Email{' '}
        <a href="mailto:support@faultmaven.ai" className={stepLinkClass}>
          support@faultmaven.ai
        </a>{' '}
        with your Slack workspace URL (for example, acme.slack.com), the work email you signed in
        with, and confirmation that you are an admin or owner of that workspace. We connect it and
        reply once it is live.
      </>
    ),
  },
  {
    title: 'Invite it to a channel',
    desc: 'In any channel where you want it available, type /invite @FaultMaven. FaultMaven cannot see a channel until it has been invited to that channel.',
  },
  {
    title: 'Summon it',
    desc: '@mention FaultMaven in a thread, run the "Ask FaultMaven" shortcut on a message, or send it a direct message. There is no account for your teammates to create, no API key to paste, and no backend to configure.',
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
    icon: <Search aria-hidden="true" />,
    title: 'Your data',
    desc: 'Logs, errors, configs, and files you share in the thread.',
  },
  {
    icon: <BookOpen aria-hidden="true" />,
    title: 'Your runbooks',
    desc: 'Documentation and runbooks you have loaded into FaultMaven.',
  },
  {
    icon: <ShieldCheck aria-hidden="true" />,
    title: 'Your past fixes',
    desc: 'Cases you resolve and turn into runbooks, so the next investigation starts from them.',
  },
];


function NumberedSteps({ steps }: { steps: { title: string; desc: ReactNode }[] }) {
  return (
    <ol className="space-y-6">
      {steps.map((step, idx) => (
        <li key={step.title}>
          <Card className="flex gap-6 md:p-6">
            <StepNumber n={idx + 1} />
            <div>
              <CardTitle className="mb-2">{step.title}</CardTitle>
              <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
            </div>
          </Card>
        </li>
      ))}
    </ol>
  );
}

// Semantic callouts: amber is a caution, blue is information, slate is a note.
const CALLOUT = {
  caution: 'border-amber-200 border-l-amber-500 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-900/20',
  info: 'border-blue-200 border-l-blue-500 bg-blue-50 dark:border-blue-900/40 dark:bg-blue-900/20',
  note: 'border-slate-200 border-l-slate-400 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60',
};

export default function SlackAppPage() {
  return (
    <>
      <PageHeader
        eyebrow="FaultMaven for Slack"
        title="The teammate who has seen every incident"
        lead={
          <>
            <p className="text-2xl font-medium text-slate-700 dark:text-slate-300">
              Troubleshooting, worked in the thread where it started.
            </p>
            <p className="text-lg">
              An AI troubleshooting copilot that works a problem the way a seasoned
              engineer does — and does it where your team is already working. It
              runs the investigation: triage, hypotheses, targeted data requests,
              a verified fix.
            </p>
          </>
        }
        footnote={
          <>
            <p>
              FaultMaven is already in the community workspace, so you can put a
              real problem to it with no account and nothing installed. Want it in
              your own workspace? During beta we connect workspaces by hand, so
              your cases stay in your own account —{' '}
              <a href="#setup" className={quietLinkClass}>
                the steps are below
              </a>
              .
            </p>
            <p>
              <Link href="/privacy/slack" className={quietLinkClass}>
                Privacy Policy
              </Link>
              {' · '}
              <Link href="/support" className={quietLinkClass}>
                Support
              </Link>
              {' · '}
              <Link href="/terms" className={quietLinkClass}>
                Terms of Service
              </Link>
            </p>
          </>
        }
      >
        <Button asChild href={COMMUNITY_SLACK_URL} target="_blank" rel="noopener noreferrer" variant="primary">
          Try it in the Community Slack
        </Button>
        <Button asChild href="/product" variant="secondary">
          See how it works
        </Button>
      </PageHeader>

      {/* What it is */}
      <Section width="prose">
        <SectionHeader align="left" title="What FaultMaven is" spacing="tight" />
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
      </Section>

      {/* Setup */}
      <Section id="setup" tone="muted" width="narrow">
        <SectionHeader
          title="Setting it up"
          lead="Five steps. During beta we connect each workspace by hand, so one of them is an email to us."
        />
        <NumberedSteps steps={setupSteps} />
        <Card className="mt-10 md:p-6">
          <CardTitle className="mb-3 text-lg">How FaultMaven is triggered — and how it is not</CardTitle>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            FaultMaven is summon-only. It acts when you call it and stays out
            of the way otherwise.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-slate-600 marker:text-blue-600 dark:text-slate-400">
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
        </Card>
      </Section>

      {/* How it works a case */}
      <Section width="narrow">
        <SectionHeader title="How it works a case" />
        <NumberedSteps steps={howItWorks} />
      </Section>

      {/* Watch it work — real recording, audio removed */}
      <Section tone="muted" width="narrow">
        <SectionHeader
          align="left"
          title="Watch it work a case"
          spacing="tight"
          lead={
            <>
              <p>
                A screen recording of the whole thing, uncut: a PagerDuty alert lands in a channel, the
                investigation runs in a thread, and the case ends with its evidence, the hypotheses it
                considered, and an offer to turn the result into a runbook. Two and a half minutes, start to
                finish.
              </p>
              <p className="text-base">
                The part worth watching for is what happens after the certificate is found to have expired.
                That is the obvious answer, and FaultMaven takes it and keeps going &mdash; asking why
                auto-renewal failed, because the expiry is the mechanism and not yet the cause.
              </p>
            </>
          }
        />

        {/* max-w-4xl less its gutters: 848px at most. */}
        <DemoVideo sizes="(min-width: 896px) 848px, calc(100vw - 48px)" />

        <p className="mt-5 text-sm leading-relaxed text-slate-500 dark:text-slate-500">
          Recorded in a real workspace and left uncut. There is no soundtrack &mdash; it was recorded
          with narration and the narration was not good enough to ship, so it is gone rather than
          polished. Everything the recording shows is on screen. If you would rather read than watch,
          the{' '}
          <Link href="/investigation" className={textLinkClass}>
            full transcript of a different case
          </Link>{' '}
          is here in text, including the points where it declines to conclude.
        </p>
      </Section>

      {/* Slack integration detail */}
      <Section width="narrow">
        <SectionHeader title="How it fits into Slack" lead="Where each capability actually lands in your workspace." />
        <dl className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {slackIntegration.map((row) => (
            <div key={row.surface} className="py-6 md:flex md:gap-8">
              <dt className="mb-2 font-semibold text-slate-900 md:mb-0 md:w-56 md:flex-shrink-0 dark:text-slate-100">
                {row.surface}
              </dt>
              <dd className="text-slate-600 dark:text-slate-400">{row.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Grounded in */}
      <Section tone="muted">
        <SectionHeader
          title="Grounded in what your team already knows"
          lead="FaultMaven reasons from your own material, and shows the evidence behind every step."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {groundedIn.map((item) => (
            <Card key={item.title}>
              <IconTile>{item.icon}</IconTile>
              <CardTitle className="mb-2">{item.title}</CardTitle>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Required disclaimers */}
      <Section width="prose">
        <SectionHeader title="Three things to know first" />
        <div className="space-y-6">
          <div className={`rounded-xl border border-l-4 p-6 md:p-8 ${CALLOUT.caution}`}>
            <div className="mb-3 flex items-center gap-3">
              <AlertTriangle aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400" />
              <CardTitle>AI accuracy</CardTitle>
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
          <div className={`rounded-xl border border-l-4 p-6 md:p-8 ${CALLOUT.info}`}>
            <div className="mb-3 flex items-center gap-3">
              <CreditCard aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <CardTitle>A paid Slack plan is required for the AI agent container</CardTitle>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              Slack&apos;s AI agent container — the dedicated assistant panel
              that opens alongside your conversation — is a paid Slack
              feature. Reaching FaultMaven there requires a paid Slack
              subscription (Pro, Business+, or Enterprise Grid).
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              FaultMaven&apos;s other surfaces do not depend on that
              container: <strong>@mentioning FaultMaven in a channel
              thread</strong> and the <strong>&quot;Ask FaultMaven&quot;
              message shortcut</strong> work on any Slack plan, including
              free. Those are the primary ways teams use it, so a free
              workspace can still run full investigations.
            </p>
          </div>
          <div className={`rounded-xl border border-l-4 p-6 md:p-8 ${CALLOUT.note}`}>
            <div className="mb-3 flex items-center gap-3">
              <Users aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-300" />
              <CardTitle>The community workspace is shared</CardTitle>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              The community workspace is a public, shared space. Anything you
              post there is visible to the other people in it, and the
              investigations it produces run under a FaultMaven-managed
              account rather than one of your own. It is the right place to
              put a real but unremarkable problem to FaultMaven and see how it
              works — not the place for production secrets or customer data.
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              Your own workspace is different: during beta we connect those by
              hand, precisely so your team&apos;s cases stay in your own
              account. The setup steps above walk you through it.
            </p>
          </div>
        </div>
      </Section>

      {/* Trust + links */}
      <Section tone="muted" width="prose">
        <SectionHeader
          title="You stay in command"
          spacing="tight"
          lead={
            <p className="text-slate-700 dark:text-slate-300">
              FaultMaven suggests; you approve and execute. It has no access to
              your infrastructure and takes no action on your systems. Data you
              share is processed to run the investigation and nothing else — see
              the{' '}
              <Link href="/privacy/slack" className={textLinkClass}>
                FaultMaven for Slack privacy policy
              </Link>{' '}
              for exactly what it accesses and why.
            </p>
          }
        />
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild href={COMMUNITY_SLACK_URL} target="_blank" rel="noopener noreferrer" variant="primary">
            Try it in the Community Slack
          </Button>
          <Button asChild href="/support" variant="secondary">
            Get support
          </Button>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link href="/privacy/slack" className={quietLinkClass}>
            Privacy Policy
          </Link>
          {' · '}
          <Link href="/terms" className={quietLinkClass}>
            Terms of Service
          </Link>
          {' · '}
          <Link href="/support" className={quietLinkClass}>
            Support
          </Link>
        </p>
      </Section>
    </>
  );
}
