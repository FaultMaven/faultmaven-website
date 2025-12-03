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
            From personal copilot to organizational intelligence.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We&apos;re building FaultMaven in public. Here&apos;s where we are, where we&apos;re going, and how you can help shape the direction. Our north star: make every engineer as effective as your best SRE on their best day.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Human-Centered AI
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              FaultMaven augments your expertise—it doesn&apos;t replace it. You remain in command. You direct the investigation. You make the final call.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              As trust builds, you can grant FaultMaven more autonomy:
            </p>

            <div className="space-y-6">
              {/* Level 1 */}
              <div className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Level 1: Advisor
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Suggests next steps, you execute
                </p>
              </div>

              {/* Level 2 */}
              <div className="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Level 2: Assistant
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Executes commands with your approval
                </p>
              </div>

              {/* Level 3 */}
              <div className="p-6 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Level 3: Autopilot <span className="text-sm text-purple-600 dark:text-purple-400">(future)</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Handles routine tasks autonomously
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium pt-6">
              Today we&apos;re focused on Level 1. We&apos;ll earn the right to Level 3.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Where We Are
          </h2>

          <div className="space-y-16">
            {/* FaultMaven 1.0 - Available Now */}
            <div className="relative">
              <div className="border-2 border-green-500 rounded-xl p-8 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                      ✅ AVAILABLE NOW — FaultMaven 1.0: Personal AI Copilot
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Your personal troubleshooting assistant. No team setup required.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Browser extension with side-panel interface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">AI-powered root cause analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Personal knowledge base (your runbooks, your solutions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Multi-provider LLM support (OpenAI, Anthropic, Ollama)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Self-hosted via Docker Compose</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">100% — Deploy today</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="w-full md:w-auto">
                  Deploy Now →
                </Button>
              </div>
            </div>

            {/* FaultMaven 1.5 - In Development */}
            <div className="relative">
              <div className="border-2 border-blue-500 rounded-xl p-8 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                      🔨 IN DEVELOPMENT — FaultMaven 1.5: Team Knowledge Bridge
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Shared knowledge bases without changing how you work.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Centralized team knowledge repository</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Admin-curated runbooks and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Consistent troubleshooting across your team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Same personal interface, team-wide intelligence</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">80% — Q1 2025</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>

                <Button asChild href="/contact" variant="secondary" className="w-full md:w-auto">
                  Join Early Access →
                </Button>
              </div>
            </div>

            {/* FaultMaven 2.0 - On the Horizon */}
            <div className="relative">
              <div className="border-2 border-slate-300 dark:border-slate-700 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-400 dark:bg-slate-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                      🔭 ON THE HORIZON — FaultMaven 2.0: Collaborative Intelligence
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Your team&apos;s collective brain.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-slate-500 dark:text-slate-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Active participation in incident channels (Slack, Teams)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 dark:text-slate-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Deep integrations with observability platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 dark:text-slate-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Guided remediation with approved automated actions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 dark:text-slate-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Cross-team pattern detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 dark:text-slate-400 mr-3 text-xl">•</span>
                    <span className="text-slate-600 dark:text-slate-400">Proactive anomaly alerts</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">20% — 2025</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-slate-400 dark:bg-slate-600 h-3 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>

                <Button asChild href="https://github.com/FaultMaven/faultmaven/discussions" variant="secondary" className="w-full md:w-auto">
                  Share Your Input →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Core Philosophy Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Open Core: Open Box / Black Box
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              FaultMaven follows an open core model:
            </p>

            <div className="p-8 border-2 border-green-500 dark:border-green-600 rounded-xl bg-green-50 dark:bg-green-900/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Open Source (The &apos;Open Box&apos;)
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                The core troubleshooting engine is 100% open source, Apache 2.0 licensed. Audit it, fork it, run it anywhere. Self-hosted deployments will always be free.
              </p>
              <Button asChild href="https://github.com/FaultMaven/faultmaven" variant="secondary">
                View on GitHub →
              </Button>
            </div>

            <div className="p-8 border-2 border-blue-500 dark:border-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Enterprise (The &apos;Black Box&apos;)
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                Team features, SSO, integrations, and managed infrastructure are built on the same open core—but packaged as a managed service for teams that don&apos;t want to operate their own stack.
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
                Office Hours
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Monthly video calls with the core team. Bring your hardest troubleshooting problems.
              </p>
              <Button asChild href="/contact" variant="secondary" className="w-full">
                Register →
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
                FaultMaven is open source. PRs welcome.
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
            Deploy FaultMaven 1.0 now and be part of the journey as we build the future of AI-powered troubleshooting.
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
