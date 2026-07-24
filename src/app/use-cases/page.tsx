'use client';

import Button from '@/components/ui/Button';

interface UseCaseProps {
  tag: string;
  title: string;
  problem: string;
  howHelped: string[];
  outcome: string;
  bgColor: string;
}

const UseCase = ({ tag, title, problem, howHelped, outcome, bgColor }: UseCaseProps) => (
  <div className={`p-8 border-2 border-slate-200 dark:border-slate-800 rounded-xl ${bgColor}`}>
    <div className="flex items-center gap-3 mb-6">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
        {tag}
      </span>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        {title}
      </h3>
    </div>

    <div className="space-y-6">
      {/* Problem */}
      <div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wide">
          THE PROBLEM
        </h4>
        <p className="text-slate-600 dark:text-slate-400">
          {problem}
        </p>
      </div>

      {/* How FaultMaven Helped */}
      <div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wide">
          HOW FAULTMAVEN HELPED
        </h4>
        <ul className="space-y-2">
          {howHelped.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-lg font-bold">•</span>
              <span className="text-slate-600 dark:text-slate-400">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Outcome */}
      <div className="pt-4 border-t border-slate-300 dark:border-slate-700">
        <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
          THE OUTCOME
        </h4>
        <p className="text-slate-700 dark:text-slate-300 font-medium">
          {outcome}
        </p>
      </div>
    </div>
  </div>
);

export default function UseCasesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            See FaultMaven in Action
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
            Real problems. A methodical path to the cause.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            These are representative scenarios — the kinds of problems FaultMaven is built for, and how it changes the path from &quot;something&apos;s broken&quot; to &quot;here&apos;s the cause.&quot; The fastest way to judge it is to try it on an incident from your own environment.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
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
            bgColor="bg-slate-50 dark:bg-slate-800/50"
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
            bgColor="bg-white dark:bg-slate-900"
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
            bgColor="bg-slate-50 dark:bg-slate-800/50"
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
            bgColor="bg-white dark:bg-slate-900"
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
            bgColor="bg-slate-50 dark:bg-slate-800/50"
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
            bgColor="bg-white dark:bg-slate-900"
          />
        </div>
      </section>

      {/* The Pattern Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            The Pattern: How FaultMaven Accelerates Resolution
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Every use case follows the same pattern:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border-2 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  CONTEXT IN
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Share what you have: errors, logs, configs, or just a description of the symptoms.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border-2 border-green-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  INTELLIGENCE APPLIED
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                FaultMaven searches three layers: global patterns, team knowledge, and your personal context.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border-2 border-purple-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  ACTIONABLE OUT
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Get specific next steps, relevant documentation, and similar past incidents—not generic advice.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border-2 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  KNOWLEDGE CAPTURED
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Every resolution is automatically indexed for the next time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Try It With Your Own Incidents
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Deploy FaultMaven in 5 minutes and test it on a real problem from your environment. No credit card. No sales call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary">
              Deploy Now (Free) →
            </Button>
            <Button asChild href="/contact" variant="secondary">
              Request a Demo →
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
