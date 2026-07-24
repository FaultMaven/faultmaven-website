'use client';

import Button from '@/components/ui/Button';

export default function RoadmapPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            The FaultMaven Roadmap
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
            Trust first. Access follows.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We&apos;re building FaultMaven in the open. Most AI ops tools ask for broad access to your systems on day one. FaultMaven starts with none and earns its way in — proving its diagnostic method before it ever touches your infrastructure. Here&apos;s the progression, and how you can shape it.
          </p>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-6">
            Access is earned, not assumed
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-16">
            The one thing that changes across every phase below is how much of your environment FaultMaven can reach — and it only reaches further once the previous step has proven itself.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Handing an AI agent cluster credentials and write access to production before it has diagnosed a single incident is a lot of trust to extend on faith. It&apos;s also the fastest way to stall in a security review. So we inverted the order.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              FaultMaven begins entirely client-side, with zero backend access, working turn-by-turn beside you. As it proves its method on real incidents, two things grow: its <strong>reach</strong> — from your screen, to the evidence bundles you hand it, to a live connection with your stack — and its <strong>independence</strong>, from turn-by-turn companion to a responder that runs the whole loop on its own. You grant more because the last step earned it, not because a vendor asked.
            </p>
            <div className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
              <p className="text-slate-700 dark:text-slate-300">
                What never changes is the <strong>method</strong>. However far its reach or how independently it runs, every conclusion is grounded in real evidence and reached the same methodical way. The access is yours to grant; the diagnostic rigor is constant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
            Three phases, expanding access
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-16">
            Each phase reduces friction and time-to-value at a different level of access. You can stop at any of them.
          </p>

          <div className="space-y-10">
            {/* Phase 1 — Copilot (Available now) */}
            <div className="border-2 border-green-500 rounded-xl p-8 bg-white dark:bg-slate-900">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                  Phase 1 · Available now
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Zero backend access</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                Copilot — turn-by-turn, at your side
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                An interactive troubleshooting companion in your browser, backed by your own self-hosted instance — with zero access to your production systems.
              </p>
              <dl className="grid md:grid-cols-3 gap-6">
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Data access</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">No reach into your production systems — no agents, no credentials. FaultMaven works only from what you paste, upload, or capture.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">How it works</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">FaultMaven tells you what to run or check; you run it; it interprets the output and drives the next step.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Why it matters</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">No credentials to hand over and no integration to security-review — so you get value immediately, and a chance to build diagnostic trust.</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="w-full md:w-auto">
                  Deploy it today →
                </Button>
              </div>
            </div>

            {/* Phase 2 — Investigator (Next) */}
            <div className="border-2 border-blue-500 rounded-xl p-8 bg-white dark:bg-slate-900">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  Phase 2 · Next
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Artifact-based access</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                Investigator — hand it the evidence, get back a diagnosis
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                An asynchronous diagnostic engine that works a bundle end-to-end on its own.
              </p>
              <dl className="grid md:grid-cols-3 gap-6">
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Data access</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">Offline diagnostic packages you choose to share — log dumps, telemetry bundles, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">.zip</code>/<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">.tar.gz</code>. Production stays untouched.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">How it works</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">You provide the bundle; FaultMaven correlates disparate events, isolates the root cause, and returns a structured post-mortem and remediation plan — no turn-by-turn prompting.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Why it matters</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">Automates the tedious log-grepping for complex, multi-signal incidents while your systems stay fully isolated.</dd>
                </div>
              </dl>
            </div>

            {/* Phase 3 — Integrated Agent (On the roadmap) */}
            <div className="border-2 border-slate-300 dark:border-slate-700 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">
                  Phase 3 · On the roadmap
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Native integration</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                Integrated Agent — from alert to resolution, on its own
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                A fully autonomous responder: it detects, investigates, and resolves end-to-end — no turn-by-turn prompting.
              </p>
              <dl className="grid md:grid-cols-3 gap-6">
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Data access</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">Native connections you configure — observability tools, cloud APIs, Kubernetes, PagerDuty, log management.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">How it works</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">A monitoring alert or notification triggers the whole loop: FaultMaven gathers the evidence itself, isolates the root cause, and resolves it — applying a fix or running a pre-approved runbook. A human approval gate is a choice you configure, not a step it waits on by default.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Why it matters</dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400">Compresses mean time to resolution by owning the incident from alert to fix, instead of waiting on a person at each step.</dd>
                </div>
              </dl>
            </div>
          </div>

          <p className="text-center text-slate-600 dark:text-slate-400 mt-12 max-w-3xl mx-auto">
            Phase 1 ships today. Phases 2 and 3 are where we&apos;re headed — and the order and detail are still open to the practitioners who use it.
          </p>
        </div>
      </section>

      {/* Open Core Philosophy Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Open core: the same engine, run your way
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              FaultMaven follows an open-core model:
            </p>

            <div className="p-8 border-2 border-green-500 dark:border-green-600 rounded-xl bg-green-50 dark:bg-green-900/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Standalone (Self-Hosted)
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                The core troubleshooting engine is fair source (FSL-1.1-ALv2) — every line public, converting to Apache 2.0 two years after each release. Audit it, fork it, run it anywhere. Self-hosted deployments will always be free.
              </p>
              <Button asChild href="https://github.com/FaultMaven/faultmaven" variant="secondary">
                View on GitHub →
              </Button>
            </div>

            <div className="p-8 border-2 border-blue-500 dark:border-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Cloud (Managed Service)
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                Team collaboration, SSO, and managed infrastructure are built on the same open core — but packaged as a managed, multi-tenant service for teams that don&apos;t want to operate their own stack.
              </p>
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Both options use the same codebase. Start self-hosted, upgrade when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Influence Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Shape the Roadmap
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-12">
            FaultMaven is built by practitioners, for practitioners. Your feedback directly influences what we build next.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* GitHub Discussions */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                GitHub Discussions
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Propose features, report bugs, vote on priorities.
              </p>
              <Button asChild href="https://github.com/FaultMaven/faultmaven/discussions" variant="secondary" className="w-full">
                Join Discussions →
              </Button>
            </div>

            {/* Office Hours */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Talk to the Team
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Bring your hardest troubleshooting problems to the people building FaultMaven.
              </p>
              <Button asChild href="/contact" variant="secondary" className="w-full">
                Get in touch →
              </Button>
            </div>

            {/* Contribute Code */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Contribute Code
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                FaultMaven is fair source — every line is public. PRs welcome.
              </p>
              <Button asChild href="https://github.com/FaultMaven/faultmaven/blob/main/CONTRIBUTING.md" variant="secondary" className="w-full">
                Contributing Guide →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Start Today, Grow With Us
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Deploy the Copilot now and troubleshoot your next incident with it — then help shape where FaultMaven&apos;s reach goes from here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary">
              Deploy FaultMaven Now
            </Button>
            <Button asChild href="https://github.com/FaultMaven/faultmaven" variant="secondary">
              Star on GitHub
            </Button>
            <Button asChild href="https://github.com/FaultMaven/faultmaven/discussions" variant="secondary">
              Join Discussions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
