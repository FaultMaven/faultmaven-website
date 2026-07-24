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
                  FaultMaven is an AI-powered troubleshooting copilot that helps engineers resolve incidents faster. It correlates what you share—logs, metrics, traces, configs, and code—with a unified knowledge engine that combines global troubleshooting patterns with your team&apos;s institutional memory.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Think of it as an expert teammate who remembers every past incident, knows every runbook, and correlates what you give it in seconds.
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  How do I get started?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  Deploy Standalone (self-hosted) in 5 minutes:
                </p>
                <pre className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg mb-3 overflow-x-auto">
                  <code className="text-green-400 font-mono text-sm">
{`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
./faultmaven.sh start`}
                  </code>
                </pre>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  The deployment script handles everything: Docker containers, configuration, and database setup. Full instructions in the <a href="https://github.com/FaultMaven/faultmaven#quick-start" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub README</a>.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-slate-50">💡 No API key?</strong> Use <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded text-xs">CHAT_PROVIDER=local</code> for free local inference with Ollama.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  How long does setup take?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-slate-900 dark:text-slate-50">Standalone (self-hosted):</strong> 5 minutes. Run three commands and you&apos;re live.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-slate-50">Cloud (in beta):</strong> Instant — we handle the infrastructure, you get a login.
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Do I need to integrate with my existing tools?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  No. FaultMaven works with whatever&apos;s on your screen. Copy/paste logs, upload config files, or share screenshots—the Copilot analyzes anything you give it. It reads what&apos;s on the page in tools like Datadog, Grafana, and the AWS Console, so no integration is required.
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
                      <strong className="text-slate-900 dark:text-slate-50">Team Knowledge:</strong> <span className="text-slate-700 dark:text-slate-300">Runbooks, past incidents, post-mortems, and tribal knowledge, indexed and shared across your team (Cloud)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 dark:text-slate-400 mr-3 mt-1">▸</span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-50">Global Intelligence:</strong> <span className="text-slate-700 dark:text-slate-300">Ships with 90+ curated runbooks (600+ documented root causes) spanning Kubernetes, databases, cloud platforms, message queues, web servers, and monitoring</span>
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
                  When you resolve an incident, FaultMaven can turn it into a reusable runbook — capturing the symptoms, the investigation, the root cause, and the fix. Crucially, only confirmed root causes become knowledge, so the base fills with verified fixes rather than unverified guesses. Next time something similar happens, it surfaces that context.
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
                  <strong className="text-slate-900 dark:text-slate-50">Standalone (self-hosted):</strong> Your data never leaves your infrastructure. Everything runs on your own servers. Zero telemetry.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-slate-50">Cloud (hosted):</strong> Data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never train models on your data or share it with third parties.
                </p>
              </div>

              {/* Q8 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What about SOC 2, HIPAA, and GDPR?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong>Self-hosted (Standalone):</strong> because everything runs on your own infrastructure, the environment sits fully inside your existing compliance boundary — you control data residency, retention, and access to meet your own SOC 2, HIPAA, or GDPR obligations.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Cloud:</strong> FaultMaven Cloud is currently in beta. We build to GDPR principles — data export and deletion on request, and a data processing agreement (DPA) available for customers. Formal certifications will be pursued as Cloud moves toward general availability; if you have a specific compliance requirement, <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">talk to us</a> about where it stands today.
                </p>
              </div>

              {/* Q9 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Do you train AI models on my data?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  No. FaultMaven never trains models on your data, and your case data stays in your instance (self-hosted or Cloud). When you route inference to a third-party provider, your prompts are subject to that provider&apos;s terms — so choose an endpoint with a no-training / zero-retention policy (most enterprise and API tiers offer one), or run fully local models (Ollama, vLLM) so nothing leaves your infrastructure at all. FaultMaven also ships an optional redaction layer that scrubs sensitive values (keys, tokens, PII) before prompts leave for a third-party provider — enable it when you route inference externally.
                </p>
              </div>

              {/* Q10 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I use my own AI models?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes. FaultMaven supports bring-your-own-LLM across nine providers — Anthropic, OpenAI, Gemini, Fireworks, Groq, and more — or run self-hosted open models (Llama and others) locally via Ollama or vLLM, i.e. any OpenAI-compatible endpoint. Full control over where inference happens.
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
                  Yes. Standalone is free—full features, no strings attached. You host it, you control it. The engine is fair source (FSL-1.1-ALv2): audit every line, and each release converts to Apache 2.0 two years after it ships. FaultMaven Cloud adds managed hosting and team collaboration through multi-tenancy.
                </p>
              </div>

              {/* Q12 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What&apos;s the Beta Founders Program?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  The Beta Founders Program gives early teams access to FaultMaven Cloud during the beta, plus direct access to the founders for feedback and roadmap input. We&apos;re looking for early users to help us refine the product. <a href="/founders" className="text-blue-600 dark:text-blue-400 hover:underline">Learn more →</a>
                </p>
              </div>

              {/* Q13 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I move from Standalone to Cloud later?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Absolutely. Start self-hosted with Standalone, then move to Cloud whenever you&apos;re ready. We&apos;ll help migrate your knowledge base and settings. No lock-in.
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
                  Chrome, Edge, Brave, and other Chromium browsers, plus Firefox. The extension works as a side-panel alongside any webpage—Grafana, AWS Console, Datadog, or even your terminal output.
                </p>
              </div>

              {/* Q16 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Does FaultMaven support Kubernetes?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes. FaultMaven ships with troubleshooting patterns for Kubernetes (OOMKills, CrashLoopBackOff, networking issues, etc.) and can analyze kubectl output, pod logs, and manifests. (FaultMaven Cloud itself runs on Kubernetes.)
                </p>
              </div>

              {/* Q17 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I contribute to FaultMaven?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes! FaultMaven&apos;s source is public—the engine is fair source (FSL-1.1-ALv2), the frontends Apache 2.0. We welcome contributions: bug fixes, new integrations, troubleshooting patterns, documentation improvements. See the <a href="https://github.com/FaultMaven/faultmaven/blob/main/CONTRIBUTING.md" className="text-blue-600 dark:text-blue-400 hover:underline">Contributing Guide</a>.
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
