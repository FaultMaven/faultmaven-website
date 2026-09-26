import Button from '@/components/ui/Button';
import { Card, StepNumber, Dot } from '@/components/ui/card';
import { PageHeader, Section, SectionHeader, sectionTitleClass, subsectionTitleClass } from '@/components/ui/Section';
import { SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

interface UseCaseProps {
  tag: string;
  title: string;
  problem: string;
  howHelped: string[];
  outcome: string;
}

const labelClass = 'mb-2 text-sm font-semibold uppercase tracking-wider';

const UseCase = ({ tag, title, problem, howHelped, outcome }: UseCaseProps) => (
  <Card>
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
        {tag}
      </span>
      <h3 className={subsectionTitleClass}>
        {title}
      </h3>
    </div>

    <div className="space-y-6">
      {/* Problem */}
      <div>
        <h4 className={`${labelClass} text-slate-500 dark:text-slate-400`}>
          THE PROBLEM
        </h4>
        <p className="text-slate-600 dark:text-slate-400">
          {problem}
        </p>
      </div>

      {/* How FaultMaven Helped */}
      <div>
        <h4 className={`${labelClass} text-slate-500 dark:text-slate-400`}>
          HOW FAULTMAVEN HELPED
        </h4>
        <ul className="space-y-2">
          {howHelped.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <Dot />
              <span className="text-slate-600 dark:text-slate-400">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Outcome */}
      <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
        <h4 className={`${labelClass} text-blue-600 dark:text-blue-400`}>
          THE OUTCOME
        </h4>
        <p className="text-slate-700 dark:text-slate-300 font-medium">
          {outcome}
        </p>
      </div>
    </div>
  </Card>
);


export const metadata = pageMetadata({
  title: 'See FaultMaven in Action',
  description:
    'Real problems. A methodical path to the cause.',
  path: '/use-cases',
});

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        title="See FaultMaven in Action"
        lead={
          <>
          <p className="text-2xl font-medium text-slate-700 dark:text-slate-300">
            Real problems. A methodical path to the cause.
          </p>
          <p className="text-lg">
            These are representative scenarios — the kinds of problems FaultMaven is built for, and how it changes the path from &quot;something&apos;s broken&quot; to &quot;here&apos;s the cause.&quot; The fastest way to judge it is to try it on an incident from your own environment.
          </p>
          </>
        }
      />

      {/* Use Cases */}
      <Section width="narrow">
        <div className="space-y-12">
          {/* Use Case 1: Kubernetes OOM */}
          <UseCase
            tag="Kubernetes"
            title="Kubernetes OOM Analysis"
            problem="Pods keep getting OOMKilled, but memory usage looks normal in Grafana. The engineer has already checked resource limits and found nothing obvious."
            howHelped={[
              "Engineer pastes pod describe output and recent logs",
              "FaultMaven correlates with known OOM patterns across K8s deployments",
              "Surfaces non-obvious cause: init container memory not counted in limits"
            ]}
            outcome="The real cause surfaces — init-container memory not counted against the pod limit — instead of another pass over the limits that already looked fine."
          />

          {/* Use Case 2: 3 AM Error Spike */}
          <UseCase
            tag="Incident Response"
            title="3 AM Error Spike"
            problem="PagerDuty fires at 3 AM. Error rates spiking. Engineer is half-asleep and needs to triage fast."
            howHelped={[
              "Engineer shares error logs and the Datadog dashboard screenshot",
              "FaultMaven correlates timestamps: errors started 2 min after deployment",
              "Surfaces relevant rollback procedure from team knowledge base"
            ]}
            outcome="A clear signal that the last deploy is the trigger, plus the exact rollback steps from your own runbook — not a groggy guess at 3 AM."
          />

          {/* Use Case 3: Database Connection Timeouts */}
          <UseCase
            tag="Database"
            title="Database Connection Timeouts"
            problem="Intermittent 'connection timeout' errors in production. Sometimes works, sometimes doesn't. No obvious pattern."
            howHelped={[
              "Engineer uploads application logs and connection pool config",
              "FaultMaven identifies pattern: timeouts correlate with batch job schedule",
              "Surfaces similar incident from 6 months ago (same root cause)"
            ]}
            outcome="The pattern behind the intermittency — connection-pool exhaustion during the batch window — tied back to the fix that worked on the same issue before."
          />

          {/* Use Case 4: Code-Level Root Cause */}
          <UseCase
            tag="Debugging"
            title="Code-Level Root Cause"
            problem="Null pointer exception in production. Stack trace points to a line that shouldn't be null based on the code path."
            howHelped={[
              "Engineer shares stack trace and relevant source file",
              "FaultMaven analyzes code flow and identifies race condition",
              "Suggests specific fix and links to similar bug pattern in knowledge base"
            ]}
            outcome="A specific race condition and where it lives, backed by a similar past bug that confirms the pattern — a solid starting point for the fix."
          />

          {/* Use Case 5: Network Black Hole */}
          <UseCase
            tag="Infrastructure"
            title="Network Black Hole"
            problem="VM can reach some endpoints but not others. Not a firewall rule (already checked). Intermittent and hard to reproduce."
            howHelped={[
              "Engineer describes symptoms and shares traceroute output",
              "FaultMaven suggests systematic elimination approach",
              "Identifies MTU mismatch as likely cause based on packet size patterns"
            ]}
            outcome="A systematic path to the likely cause — an MTU mismatch — instead of more trial-and-error against endpoints that only sometimes fail."
          />

          {/* Use Case 6: Incident Channel Chaos */}
          <UseCase
            tag="Collaboration"
            title="Incident Channel Chaos"
            problem="Major incident. 15 people in a Slack channel. Multiple theories flying. Hard to track what's been tried and what hasn't."
            howHelped={[
              "Engineer shares Slack thread with FaultMaven",
              "FaultMaven summarizes: 3 hypotheses proposed, 1 ruled out, 2 untested",
              "Identifies key question no one has answered yet"
            ]}
            outcome="A running picture of which hypotheses are proposed, ruled out, and still untested — plus the question no one has answered yet — without re-reading the whole thread."
          />
        </div>
      </Section>

      {/* The Pattern Section */}
      <Section tone="muted" width="narrow">
        <SectionHeader
          title="The Pattern: How FaultMaven Accelerates Resolution"
          lead="Every use case follows the same pattern:"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <Card>
            <div className="flex items-center gap-4 mb-4">
              <StepNumber n={1} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                CONTEXT IN
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Share what you have: errors, logs, configs, or just a description of the symptoms.
            </p>
          </Card>

          {/* Step 2 */}
          <Card>
            <div className="flex items-center gap-4 mb-4">
              <StepNumber n={2} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                INTELLIGENCE APPLIED
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              FaultMaven searches three layers: global patterns, team knowledge, and your personal context.
            </p>
          </Card>

          {/* Step 3 */}
          <Card>
            <div className="flex items-center gap-4 mb-4">
              <StepNumber n={3} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                ACTIONABLE OUT
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Get specific next steps, relevant documentation, and similar past incidents—not generic advice.
            </p>
          </Card>

          {/* Step 4 */}
          <Card>
            <div className="flex items-center gap-4 mb-4">
              <StepNumber n={4} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                KNOWLEDGE CAPTURED
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Every resolution is automatically indexed for the next time.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section size="compact" width="narrow">
        <div className="text-center">
          <h2 className={`${sectionTitleClass} mb-4`}>
            Put It to Work on Your Own Incidents
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Sign up for FaultMaven Cloud and put a real problem from your environment to it a minute later — or self-host the same engine with one command. No credit card. No sales call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href={TRY_CLOUD_URL} variant="primary">
              Start on FaultMaven Cloud →
            </Button>
            <Button asChild href={SELF_HOST_PATH} variant="secondary">
              Self-host it
            </Button>
            <Button asChild href="/contact" variant="secondary">
              Request a Demo →
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
