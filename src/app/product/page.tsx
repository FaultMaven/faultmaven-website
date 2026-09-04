'use client';

import Image from 'next/image';
import sidepanelImage from '/public/images/browser-sidepanel.png';
import Button from '@/components/ui/Button';
import {
  IconChartBar,
  IconSparkles,
  IconDocumentText
} from '@/components/icons/homepage';

export default function ProductPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            How FaultMaven Works
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
            A methodical path from error to resolution.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            FaultMaven meets you where you work — a browser side-panel for individual engineers, and a Slack agent for teams — bringing AI-powered troubleshooting directly into your workflow. No complex integrations. No context-switching. Just paste an error, share a log, or describe the problem—and get actionable answers informed by global patterns and your own institutional knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary">
              Deploy Now (Free)
            </Button>
            <Button asChild href="#how-it-works" variant="secondary">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Three Steps to Faster Resolution
          </h2>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="p-8 border-2 border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    Share Context
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                    Paste an error, upload a log file, or let FaultMaven capture your current page context.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">Copy/Paste</span>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">File Upload</span>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">Page Context</span>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">Conversation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-slate-400 dark:text-slate-600 text-3xl">↓</div>

            {/* Step 2 */}
            <div className="p-8 border-2 border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    AI Analysis
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    FaultMaven correlates your input with global patterns, team knowledge, and your personal context to identify likely root causes.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-slate-400 dark:text-slate-600 text-3xl">↓</div>

            {/* Step 3 */}
            <div className="p-8 border-2 border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    Actionable Next Steps
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    FaultMaven doesn&apos;t just answer — it leads: it names the most decisive next step and points you to the relevant runbook sections and similar past incidents your team has already solved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every resolution is captured automatically—building your knowledge base for the next incident.
          </p>
        </div>
      </section>

      {/* Browser Extension Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                Always Available, Right in Your Browser
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                FaultMaven lives in a browser side-panel that stays with you across tabs. Whether you&apos;re in Grafana, AWS Console, Datadog, or your terminal output—your AI copilot is always one click away.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                No integrations required. No separate apps to launch. Just open the panel and start troubleshooting.
              </p>
            </div>
            <div>
              <Image
                src={sidepanelImage}
                alt="FaultMaven browser extension side-panel"
                placeholder="blur"
                className="rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Core Capabilities
          </h2>
          <div className="space-y-12">
            {/* Deep Context Awareness */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-start gap-6">
                <IconChartBar className="w-12 h-12 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    Deep Context Awareness
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    FaultMaven doesn&apos;t just read your error message—it correlates logs, metrics, configs, and code to understand the system state that caused the problem. Not just what broke, but why.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-800 dark:text-slate-200">Example:</strong> Paste a CrashLoopBackOff error → FaultMaven checks your deployment manifest, recent config changes, and resource limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiered Knowledge Engine */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-start gap-6">
                <IconSparkles className="w-12 h-12 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    The Tiered Knowledge Engine
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    Every answer is informed by three layers of intelligence:
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">•</span>
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Global Intelligence</strong>
                        <span className="text-slate-600 dark:text-slate-400"> — <a href="https://github.com/FaultMaven/faultmaven/tree/main/resources/knowledge/pack/runbooks" className="text-blue-600 dark:text-blue-400 hover:underline">91 curated runbooks</a> for Kubernetes, databases, cloud platforms, message queues, and more</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">•</span>
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Team Knowledge</strong>
                        <span className="text-slate-600 dark:text-slate-400"> — Runbooks shared across your org, post-mortems, and past resolutions </span>
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">Cloud</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">•</span>
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Personal Context</strong>
                        <span className="text-slate-600 dark:text-slate-400"> — Your specific environment and local configurations</span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                    So you spend less time re-solving problems you&apos;ve already cracked.
                  </p>
                </div>
              </div>
            </div>

            {/* Auto-Generated Documentation */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-start gap-6">
                <IconDocumentText className="w-12 h-12 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    Auto-Generated Documentation
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    As you troubleshoot, FaultMaven captures the context, timeline, and resolution. Export to post-mortem format with one click. Stop losing institutional knowledge to Slack threads.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-800 dark:text-slate-200">Example:</strong> Incident → Investigation → Resolution → Searchable knowledge (automatic)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Input Methods Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Works the Way You Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Copy/Paste */}
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Copy/Paste
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Paste error messages or stack traces directly
              </p>
            </div>

            {/* File Upload */}
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                File Upload
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Upload logs, configs, or YAML files
              </p>
            </div>

            {/* Page Context */}
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Page Context
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Capture your current page (Grafana, AWS Console)
              </p>
            </div>

            {/* Conversation */}
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Conversation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Talk through the problem naturally
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-lg text-slate-600 dark:text-slate-400">
            No integrations required. Works with whatever&apos;s in front of you.
          </p>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Your Data Stays Yours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Local-First */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Local-First
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                All case data (logs, configs, screenshots) is stored on your infrastructure. Nothing leaves unless you explicitly share it.
              </p>
            </div>

            {/* Data Redaction */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Data Redaction
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                An optional redaction layer detects sensitive patterns (API keys, passwords, PII) and scrubs them before prompts reach an external LLM — or run local models so nothing leaves at all.
              </p>
            </div>

            {/* Air-Gapped Capable */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Air-Gapped Capable
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Run with local LLMs (Ollama, vLLM) for complete isolation. No external API calls required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
            Ready to Try It?
          </h2>

          {/* Primary CTA */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 text-center">
                Deploy FaultMaven in 5 Minutes
              </h3>
              <pre className="bg-slate-900 dark:bg-slate-950 p-6 rounded-lg mb-6 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm block">
{`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
./faultmaven.sh start`}
                </code>
              </pre>
              <div className="text-center">
                <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="text-lg px-8">
                  Full Deployment Guide →
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Need Team Features?
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
                SSO, shared team knowledge, managed infrastructure — on FaultMaven Cloud.
              </p>
              <Button asChild href="/waitlist" variant="secondary" className="w-full">
                Join the Cloud waitlist
              </Button>
            </div>
            <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Questions?
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
                Check the docs or ask in GitHub Discussions.
              </p>
              <Button asChild href="https://github.com/FaultMaven/faultmaven#documentation" variant="secondary" className="w-full">
                Documentation →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
