import Link from 'next/link';
import { IconChartBar, IconLink, IconSparkles } from '@/components/icons/homepage';
import { Card, CardTitle, IconTile } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/Section';

export default function ApproachSection() {
  return (
    <Section id="how-it-works" tone="muted">
      <SectionHeader title="How FaultMaven Works" lead="What it reads, how it reasons, and where it runs." />
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <IconTile>
            <IconChartBar aria-hidden="true" />
          </IconTile>
          <CardTitle className="mb-3">Deep Context Awareness</CardTitle>
          <p className="text-slate-600 dark:text-slate-400">
            FaultMaven doesn&apos;t just read your error message—it correlates what you share across the stack: logs, metrics, traces, configs, and source code. It reasons a causal chain from the symptom to the system state that caused it, not just the error itself.
          </p>
        </Card>
        <Card>
          <IconTile>
            <IconSparkles aria-hidden="true" />
          </IconTile>
          <CardTitle className="mb-3">It Says What It Cannot Prove</CardTitle>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            The failure mode of an AI in an incident is a confident wrong answer. FaultMaven separates
            what the evidence establishes from what it does not, and asks for the specific reading that
            would tell the difference. From a real transcript, eight turns before it named a cause:
          </p>
          <blockquote className="mb-4 border-l-2 border-blue-600 pl-4 italic text-slate-600 dark:border-blue-500 dark:text-slate-400">
            &ldquo;The logs do not identify which writer or key population is responsible for the buildup,
            so that remains unestablished.&rdquo;
          </blockquote>
          <Link href="/investigation" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Read the full investigation &rarr;
          </Link>
        </Card>
        <Card>
          <IconTile>
            <IconLink aria-hidden="true" />
          </IconTile>
          <CardTitle className="mb-3">Zero Context-Switching</CardTitle>
          <p className="text-slate-600 dark:text-slate-400">
            The FaultMaven Copilot lives where you work—a browser side-panel alongside the AWS Console, Datadog, Grafana, your terminal, or localhost. The fix comes to the problem, not the other way around. No production API keys to hand over and no agents on your systems — the extension runs client-side and talks only to your own FaultMaven instance.
          </p>
        </Card>
      </div>
    </Section>
  );
}
