import Image from 'next/image';
import Link from 'next/link';
import sidepanelImage from '/public/images/copilot-investigating-in-flow.png';
import causalMapImage from '/public/images/copilot-causal-map-resolved.png';
import { ArrowDown, ClipboardPaste, FileUp, Lock, MessageSquare, Monitor, Server, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardTitle, CodeBlock, IconTile, StepNumber } from '@/components/ui/card';
import { PageHeader, Section, SectionHeader } from '@/components/ui/Section';
import { SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';
import {
  IconChartBar,
  IconSparkles,
  IconDocumentText
} from '@/components/icons/homepage';
import { pageMetadata } from '@/lib/metadata';

const chipClass = 'rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
const exampleClass = 'rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400';
const linkClass = 'font-medium text-blue-600 hover:underline dark:text-blue-400';

const steps = [
  {
    title: 'Share Context',
    body: 'Paste an error, upload a log file, or let FaultMaven capture your current page context.',
    chips: ['Copy/Paste', 'File Upload', 'Page Context', 'Conversation'],
  },
  {
    title: 'AI Analysis',
    body: 'FaultMaven correlates your input with global patterns, team knowledge, and your personal context to identify likely root causes.',
  },
  {
    title: 'Actionable Next Steps',
    body: "FaultMaven doesn't just answer — it leads: it names the most decisive next step and points you to the relevant runbook sections and similar past incidents your team has already solved.",
  },
];

const inputs = [
  { Icon: ClipboardPaste, title: 'Copy/Paste', body: 'Paste error messages or stack traces directly' },
  { Icon: FileUp, title: 'File Upload', body: 'Upload logs, configs, or YAML files' },
  { Icon: Monitor, title: 'Page Context', body: 'Capture your current page (Grafana, AWS Console)' },
  { Icon: MessageSquare, title: 'Conversation', body: 'Talk through the problem naturally' },
];

const safeguards = [
  {
    Icon: Server,
    title: 'Local-First',
    body: 'Self-hosted, all case data (logs, configs, screenshots) and your knowledge base are stored on your own infrastructure, and retrieval runs with no network. What leaves is each investigation prompt, sent to the model provider you choose.',
  },
  {
    Icon: Lock,
    title: 'Data Redaction',
    body: 'An optional redaction layer detects sensitive patterns (API keys, passwords, PII) and scrubs them before prompts reach the model provider you configure.',
  },
  {
    Icon: ShieldCheck,
    title: 'No Production Credentials',
    body: 'FaultMaven works from what you choose to share. It never asks for production API keys, root credentials, or access to your live systems, and takes no action on them.',
  },
];


export const metadata = pageMetadata({
  title: 'How FaultMaven Works',
  description:
    'A methodical path from error to resolution.',
  path: '/product',
});

export default function ProductPage() {
  return (
    <>
      <PageHeader
        title="How FaultMaven Works"
        lead={
          <>
            <p className="text-2xl font-medium text-slate-700 dark:text-slate-300">A methodical path from error to resolution.</p>
            <p className="text-lg">
              FaultMaven meets you where you work — a browser side-panel for individual engineers, and a Slack agent for teams — bringing AI-powered troubleshooting directly into your workflow. No complex integrations. No context-switching. Just paste an error, share a log, or describe the problem—and get actionable answers informed by global patterns and your own institutional knowledge.
            </p>
          </>
        }
      >
        <Button asChild href={TRY_CLOUD_URL} variant="primary">
          Start on FaultMaven Cloud
        </Button>
        <Button asChild href={SELF_HOST_PATH} variant="secondary">
          Self-host it
        </Button>
      </PageHeader>

      {/* How It Works */}
      <Section id="how-it-works" width="narrow">
        <SectionHeader title="Three Steps to Faster Resolution" />
        <ol>
          {steps.map((step, i) => (
            <li key={step.title}>
              {i > 0 ? <ArrowDown aria-hidden="true" className="mx-auto my-4 h-6 w-6 text-slate-400 dark:text-slate-500" /> : null}
              <Card>
                <div className="flex items-start gap-6">
                  <StepNumber n={i + 1} />
                  <div>
                    <CardTitle className="mb-3 text-2xl">{step.title}</CardTitle>
                    <p className="text-lg text-slate-600 dark:text-slate-400">{step.body}</p>
                    {step.chips ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.chips.map((c) => (
                          <span key={c} className={chipClass}>
                            {c}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400">
          Every resolution is captured automatically—building your knowledge base for the next incident.
        </p>
      </Section>

      {/* Browser Extension */}
      <Section tone="muted">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Always Available, Right in Your Browser
            </h2>
            <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
              FaultMaven lives in a browser side-panel that stays with you across tabs. Whether you&apos;re in Grafana, AWS Console, Datadog, or your terminal output—your AI copilot is always one click away.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No integrations required. No separate apps to launch. Just open the panel and start troubleshooting.
            </p>
          </div>
          <Image
            src={sidepanelImage}
            alt="The FaultMaven side panel open beside a staging ops console, working a CrashLoopBackOff case: it names an unbounded cache as the mechanism, cites the log lines it read, and says the root cause is not yet validated because it still needs the release config diff."
            placeholder="blur"
            sizes="(min-width: 1152px) 520px, (min-width: 768px) calc(50vw - 56px), calc(100vw - 48px)"
            className="rounded-xl border border-slate-200 shadow-2xl dark:border-slate-800"
          />
        </div>
      </Section>

      {/* How a case ends — the same case as the screenshot above, resolved */}
      <Section width="narrow">
        <SectionHeader
          align="left"
          title="How a case ends"
          className="md:mb-8"
          lead={
            <p>
              The same investigation, resolved. The causal map is the part worth reading closely, because of
              what it refuses to colour in: every node is marked{' '}
              <strong className="text-slate-900 dark:text-slate-200">validated</strong>,{' '}
              <strong className="text-slate-900 dark:text-slate-200">not established</strong>, or{' '}
              <strong className="text-slate-900 dark:text-slate-200">refuted</strong>, and solid arrows lead
              only from validated causes. Most of this map is still open circles — candidate paths the
              evidence never settled. A tool that shaded them all in would look more confident and be worth
              less.
            </p>
          }
        />
        <Image
          src={causalMapImage}
          alt="A resolved FaultMaven case showing its causal map. Every node is marked validated, not established, or refuted; most remain not established, and solid arrows lead only from the two validated causes to the confirmed root cause."
          placeholder="blur"
          sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
          className="rounded-xl border border-slate-200 shadow-2xl dark:border-slate-800"
        />
        <p className="mt-6 text-slate-600 dark:text-slate-400">
          Alongside it the case keeps what it was built from — the evidence, the hypotheses considered,
          and the solution applied. You can read a{' '}
          <Link href="/investigation" className={linkClass}>
            full unedited transcript
          </Link>{' '}
          of a different case, start to finish, including the points where it declines to conclude.
        </p>
      </Section>

      {/* Core Capabilities */}
      <Section tone="muted" width="narrow">
        <SectionHeader title="Core Capabilities" />
        <div className="space-y-8">
          <Card>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <IconTile className="mb-0 flex-shrink-0">
                <IconChartBar aria-hidden="true" />
              </IconTile>
              <div>
                <CardTitle className="mb-3 text-2xl">Deep Context Awareness</CardTitle>
                <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                  FaultMaven doesn&apos;t just read your error message—it correlates logs, metrics, configs, and code to understand the system state that caused the problem. Not just what broke, but why.
                </p>
                <p className={exampleClass}>
                  <strong className="text-slate-800 dark:text-slate-200">Example:</strong> Paste a CrashLoopBackOff error → FaultMaven checks your deployment manifest, recent config changes, and resource limits.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <IconTile className="mb-0 flex-shrink-0">
                <IconSparkles aria-hidden="true" />
              </IconTile>
              <div className="flex-1">
                <CardTitle className="mb-3 text-2xl">The Tiered Knowledge Engine</CardTitle>
                <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                  Every answer is informed by three layers of intelligence:
                </p>
                <ul className="mb-6 space-y-4 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>
                      <strong className="text-slate-800 dark:text-slate-200">Global Intelligence</strong> — <a href="https://github.com/FaultMaven/faultmaven/tree/main/resources/knowledge/pack/runbooks" className={linkClass}>91 curated runbooks</a> for Kubernetes, databases, cloud platforms, message queues, and more
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>
                      <strong className="text-slate-800 dark:text-slate-200">Team Knowledge</strong> — Runbooks shared across your org, post-mortems, and past resolutions{' '}
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Cloud</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>
                      <strong className="text-slate-800 dark:text-slate-200">Personal Context</strong> — Your specific environment and local configurations
                    </span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                  So you spend less time re-solving problems you&apos;ve already cracked.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <IconTile className="mb-0 flex-shrink-0">
                <IconDocumentText aria-hidden="true" />
              </IconTile>
              <div>
                <CardTitle className="mb-3 text-2xl">Auto-Generated Documentation</CardTitle>
                <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                  As you troubleshoot, FaultMaven captures the context, timeline, and resolution. Export to post-mortem format with one click. Stop losing institutional knowledge to Slack threads.
                </p>
                <p className={exampleClass}>
                  <strong className="text-slate-800 dark:text-slate-200">Example:</strong> Incident → Investigation → Resolution → Searchable knowledge (automatic)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Input Methods */}
      <Section>
        <SectionHeader title="Works the Way You Work" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {inputs.map(({ Icon, title, body }) => (
            <Card key={title} className="md:p-6">
              <IconTile>
                <Icon aria-hidden="true" />
              </IconTile>
              <CardTitle className="mb-2">{title}</CardTitle>
              <p className="text-slate-600 dark:text-slate-400">{body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-lg text-slate-600 dark:text-slate-400">
          No integrations required. Works with whatever&apos;s in front of you.
        </p>
      </Section>

      {/* Security & Privacy */}
      <Section tone="muted">
        <SectionHeader title="Your Data Stays Yours" />
        <div className="grid gap-8 md:grid-cols-3">
          {safeguards.map(({ Icon, title, body }) => (
            <Card key={title}>
              <IconTile>
                <Icon aria-hidden="true" />
              </IconTile>
              <CardTitle className="mb-3">{title}</CardTitle>
              <p className="text-slate-600 dark:text-slate-400">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <SectionHeader title="Run It Yourself, or Let Us Run It for You" />

        <Card highlight className="mx-auto mb-8 max-w-3xl">
          <CardTitle className="mb-6 text-center text-2xl">Self-host it: one command</CardTitle>
          <CodeBlock className="mb-6">
            {`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
./faultmaven.sh start`}
          </CodeBlock>
          <div className="text-center">
            <Button asChild href={SELF_HOST_PATH} variant="primary" className="px-8">
              Self-hosting guide →
            </Button>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Rather not operate it?{' '}
              <a href={TRY_CLOUD_URL} className={linkClass}>
                Start on FaultMaven Cloud
              </a>{' '}
              — the same engine, run for you.
            </p>
          </div>
        </Card>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardTitle className="mb-3">Working as a Team?</CardTitle>
            <p className="mb-6 flex-grow text-slate-600 dark:text-slate-400">
              Team knowledge sharing and SSO need multi-tenancy, which is what FaultMaven Cloud adds — self-hosted FaultMaven is single-user.
            </p>
            <Button asChild href="/pricing" variant="secondary" className="w-full">
              Compare Standalone and Cloud
            </Button>
          </Card>
          <Card className="flex flex-col">
            <CardTitle className="mb-3">Questions?</CardTitle>
            <p className="mb-6 flex-grow text-slate-600 dark:text-slate-400">
              Check the docs or ask in GitHub Discussions.
            </p>
            <Button asChild href="https://github.com/FaultMaven/faultmaven#documentation" variant="secondary" className="w-full">
              Documentation →
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}
