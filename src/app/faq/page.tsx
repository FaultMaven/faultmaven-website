'use client';

import Button from '@/components/ui/Button';

export default function FAQPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Quick answers to common questions about FaultMaven
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          {/* Getting Started */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 pb-4 border-b-2 border-blue-500">
              Getting Started
            </h2>
            <div className="space-y-8">
              {/* Q1 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What is FaultMaven?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  FaultMaven is an AI-powered troubleshooting copilot that helps engineers resolve incidents faster. It connects your full stack—logs, metrics, traces, configs, and code—to a unified knowledge engine that combines global troubleshooting patterns with your team&apos;s institutional memory.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Think of it as an expert teammate who remembers every past incident, knows every runbook, and can correlate data across your entire infrastructure instantly.
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  How do I get started?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  Deploy the open source version in 5 minutes:
                </p>
                <pre className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg mb-3 overflow-x-auto">
                  <code className="text-green-400 font-mono text-sm">
{`git clone https://github.com/FaultMaven/faultmaven-deploy.git
cd faultmaven-deploy
./faultmaven start`}
                  </code>
                </pre>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  The deployment script handles everything: Docker containers, configuration, and browser extension installation. Full instructions in the <a href="https://github.com/FaultMaven/faultmaven#quick-start" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub README</a>.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-slate-50">💡 No API key?</strong> Use <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded text-xs">LLM_PROVIDER=ollama</code> for free local inference with Ollama.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  How long does setup take?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-slate-900 dark:text-slate-50">Self-hosted (Open Source):</strong> 5 minutes. Run three commands and you&apos;re live.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-slate-50">Cloud-hosted (Team/Enterprise):</strong> Instant. We handle the infrastructure, you get a login.
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Do I need to integrate with my existing tools?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  No. FaultMaven works with whatever&apos;s on your screen. Copy/paste logs, upload config files, or share screenshots—the Copilot analyzes anything you give it. Optional integrations with Datadog, Grafana, AWS, etc. enhance the experience but aren&apos;t required.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 pb-4 border-b-2 border-blue-500">
              How It Works
            </h2>
            <div className="space-y-8">
              {/* Q5 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What is the Tiered Knowledge Engine?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  The Tiered Knowledge Engine is what makes FaultMaven different from generic AI chatbots. It searches three layers of context when you ask a question:
                </p>
                <ul className="space-y-2 ml-6 mb-3">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 mt-1">▸</span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-50">Personal Context:</strong> <span className="text-slate-700 dark:text-slate-300">Your specific environment, recent changes, and local configurations</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-50">Team Knowledge:</strong> <span className="text-slate-700 dark:text-slate-300">Your runbooks, past incidents, post-mortems, and tribal knowledge (automatically indexed)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 dark:text-slate-400 mr-3 mt-1">▸</span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-50">Global Intelligence:</strong> <span className="text-slate-700 dark:text-slate-300">Pre-loaded patterns for 50+ technology stacks (Kubernetes, PostgreSQL, Redis, AWS, etc.)</span>
                    </div>
                  </li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300">
                  The result: answers tailored to YOUR infrastructure, not generic StackOverflow suggestions.
                </p>
              </div>

              {/* Q5 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  How does FaultMaven learn from my incidents?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Every troubleshooting session is automatically indexed. When you resolve an incident, FaultMaven captures: the symptoms, the investigation steps, the root cause, and the fix. Next time something similar happens, it surfaces the relevant context immediately.
                </p>
              </div>

              {/* Q6 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What makes this better than ChatGPT or Claude?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  General-purpose AI has no memory of your infrastructure, your past incidents, or your team&apos;s solutions. FaultMaven does. It also stays in context—no switching tabs to paste logs into a separate chat window. The Copilot lives alongside your tools (Grafana, AWS Console, terminal) and correlates multiple data sources automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Security & Privacy */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 pb-4 border-b-2 border-blue-500">
              Security &amp; Privacy
            </h2>
            <div className="space-y-8">
              {/* Q7 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Where does my data go?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-slate-900 dark:text-slate-50">Open Source (self-hosted):</strong> Your data never leaves your infrastructure. Everything runs locally on your servers. Zero telemetry.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-slate-50">Team/Enterprise (cloud-hosted):</strong> Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Stored in SOC 2 compliant infrastructure. We never train models on your data or share it with third parties.
                </p>
              </div>

              {/* Q8 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Is FaultMaven SOC 2 / HIPAA / GDPR compliant?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong>SOC 2:</strong> Our cloud infrastructure is SOC 2 Type II certified. Full report available on request for Enterprise customers.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong>GDPR:</strong> Yes. We provide data processing agreements (DPA), support data export/deletion requests, and maintain EU data residency options for Enterprise customers.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>HIPAA:</strong> Self-hosted deployments can be HIPAA-compliant (you control the environment). Cloud-hosted HIPAA compliance is available for Enterprise customers with a Business Associate Agreement (BAA).
                </p>
              </div>

              {/* Q9 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Do you train AI models on my data?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  No. Never. Your troubleshooting data stays in your FaultMaven instance (self-hosted or cloud). We use third-party AI providers (OpenAI, Anthropic, etc.) with strict zero-retention agreements—they don&apos;t store or train on your data either.
                </p>
              </div>

              {/* Q10 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I use my own AI models?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes. FaultMaven supports bring-your-own-LLM. Configure it to use Azure OpenAI, AWS Bedrock, self-hosted Llama models, or any OpenAI-compatible API. Full control over where inference happens.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing & Plans */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 pb-4 border-b-2 border-blue-500">
              Pricing &amp; Plans
            </h2>
            <div className="space-y-8">
              {/* Q11 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Is FaultMaven really free?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes. The open source version is free forever—unlimited users, full features, Apache 2.0 license. You host it, you control it, no strings attached. Paid tiers (Team and Enterprise) add managed hosting, team collaboration features, and priority support.
                </p>
              </div>

              {/* Q12 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What&apos;s the Beta Founders Program?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  The first 100 teams to deploy FaultMaven in production get 50% off the Team tier for 12 months, plus direct access to the founders for feedback and roadmap input. We&apos;re looking for early users to help us refine the product. <a href="/pricing#beta-founders" className="text-blue-600 dark:text-blue-400 hover:underline">Learn more and apply →</a>
                </p>
              </div>

              {/* Q13 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I upgrade from Open Source to Team later?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Absolutely. Start with self-hosted Open Source, then upgrade to Team (cloud or self-hosted with team features) whenever you&apos;re ready. We&apos;ll help migrate your knowledge base and settings. No lock-in.
                </p>
              </div>
            </div>
          </div>

          {/* Technical */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 pb-4 border-b-2 border-blue-500">
              Technical
            </h2>
            <div className="space-y-8">
              {/* Q14 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What are the system requirements?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong>Minimum:</strong> 4 CPU cores, 8GB RAM, 20GB disk. Docker and Docker Compose required.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Recommended:</strong> 8 CPU cores, 16GB RAM, 50GB disk. Supports deployment on AWS, GCP, Azure, or any Linux server. Full deployment guide: <a href="https://github.com/FaultMaven/faultmaven#deployment" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub README</a>.
                </p>
              </div>

              {/* Q15 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Which browsers does the Copilot extension support?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Chrome, Edge, Brave, and Chromium-based browsers. Firefox support is on the roadmap. The extension works as an overlay on any webpage—Grafana, AWS Console, Datadog, or even your terminal output.
                </p>
              </div>

              {/* Q16 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Does FaultMaven support Kubernetes?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes. FaultMaven includes pre-loaded troubleshooting patterns for Kubernetes (OOMKills, CrashLoopBackOff, networking issues, etc.) and can analyze kubectl output, pod logs, and manifests. Helm chart deployment is available.
                </p>
              </div>

              {/* Q17 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I contribute to FaultMaven?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes! FaultMaven is open source (Apache 2.0). We welcome contributions: bug fixes, new integrations, troubleshooting patterns, documentation improvements. See the <a href="https://github.com/FaultMaven/faultmaven/blob/main/CONTRIBUTING.md" className="text-blue-600 dark:text-blue-400 hover:underline">Contributing Guide</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Join our community or reach out directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href="https://github.com/FaultMaven/faultmaven/discussions" variant="secondary">
              GitHub Discussions
            </Button>
            <Button asChild href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
