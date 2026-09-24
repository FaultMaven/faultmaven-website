'use client';

import Button from '@/components/ui/Button';
import { CHROME_WEB_STORE_URL, COMMUNITY_SLACK_URL, SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';

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
                  FaultMaven is an AI troubleshooting copilot that helps engineers resolve incidents faster — run it yourself on your own hardware, or let us run it for you on FaultMaven Cloud. It correlates what you share—logs, metrics, traces, configs, and code—with a unified knowledge engine that combines global troubleshooting patterns with your team&apos;s institutional memory.
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
                  Two ways, same engine. <a href={TRY_CLOUD_URL} className="text-blue-600 dark:text-blue-400 hover:underline">Sign up for FaultMaven Cloud</a> and we run it for you — nothing to install. Or run it yourself: Standalone (self-hosted) is one command:
                </p>
                <pre className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg mb-3 overflow-x-auto">
                  <code className="text-green-400 font-mono text-sm">
{`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
./faultmaven.sh start`}
                  </code>
                </pre>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  The deployment script handles everything: Docker containers, configuration, and database setup. Set one model provider&apos;s API key in <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded text-xs">.env</code> first — see the <a href={SELF_HOST_PATH} className="text-blue-600 dark:text-blue-400 hover:underline">self-hosting guide</a>.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  How long does setup take?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-slate-900 dark:text-slate-50">Standalone (self-hosted):</strong> one command, but budget 10&ndash;20 minutes on a first run &mdash; and most of that is a 2.3 GB image pull, not configuration. The image is large on purpose: the BGE-M3 embedding model is baked into it, so FaultMaven indexes and retrieves without calling out to anyone. Subsequent starts take seconds.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-slate-50">Cloud (in beta):</strong> as long as it takes to sign up. Beta is open — there is no waiting list and no invite code. We run the infrastructure; you get an account of your own, free during beta with a daily limit on investigation turns.
                </p>
              </div>

              {/* Q3b */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I try it without signing up for anything?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  Yes, two ways. To <strong className="text-slate-900 dark:text-slate-50">see</strong> it: we publish{' '}
                  <a href="/investigation" className="text-blue-600 dark:text-blue-400 hover:underline">
                    a complete investigation transcript
                  </a>
                  , unedited, including the points where FaultMaven refused to conclude more than the evidence supported.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  To <strong className="text-slate-900 dark:text-slate-50">try</strong> it: FaultMaven is installed in the{' '}
                  <a href={COMMUNITY_SLACK_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    FaultMaven Community Slack
                  </a>
                  , so you can put a real problem to it with no account and nothing installed. It is a shared, public workspace — good for seeing how it works, not the place for production secrets or customer data.
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
                      <strong className="text-slate-900 dark:text-slate-50">Team Knowledge:</strong> <span className="text-slate-700 dark:text-slate-300">Runbooks, past incidents, post-mortems, and tribal knowledge — indexed in any deployment, shared across your team in Cloud</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 dark:text-slate-400 mr-3 mt-1">▸</span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-50">Global Intelligence:</strong> <span className="text-slate-700 dark:text-slate-300">Ships with <a href="https://github.com/FaultMaven/faultmaven/tree/main/resources/knowledge/pack/runbooks" className="text-blue-600 dark:text-blue-400 hover:underline">91 curated runbooks</a> carrying 641 documented root causes, spanning Kubernetes, databases, cloud platforms, message queues, web servers, and monitoring. They are in the engine repository — you can read them before installing anything.</span>
                    </div>
                  </li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300">
                  The result: answers tailored to YOUR infrastructure, not generic StackOverflow suggestions.
                </p>
              </div>

              {/* Q6 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  How does FaultMaven learn from my incidents?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  When you resolve an incident, FaultMaven can turn it into a reusable runbook — capturing the symptoms, the investigation, the root cause, and the fix. Crucially, only confirmed root causes become knowledge, so the base fills with verified fixes rather than unverified guesses. Next time something similar happens, it surfaces that context.
                </p>
              </div>

              {/* Q7 */}
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
              {/* Q8 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Where does my data go?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-slate-900 dark:text-slate-50">Standalone (self-hosted):</strong> Your cases, evidence, and knowledge base are stored on your own servers, and no usage data is sent back to us. Each investigation prompt goes to the model provider you configure — see the next two answers.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-slate-50">Cloud (hosted):</strong> What you share — cases, evidence, and knowledge base — is stored in FaultMaven&apos;s deployment, and each investigation prompt goes to the model providers Cloud routes to. We never train models on your data. Cloud is in beta: do not paste production secrets or customer data you would not want stored. If data must stay on your own hardware, self-host.
                </p>
              </div>

              {/* Q9 */}
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

              {/* Q10 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Do you train AI models on my data?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  No. FaultMaven never trains models on your data, and your case data stays in your instance (self-hosted or Cloud). When you route inference to a third-party provider, your prompts are subject to that provider&apos;s terms — so choose an endpoint with a no-training / zero-retention policy (most enterprise and API tiers offer one), and see the next answer for where local models stand. FaultMaven also ships an optional redaction layer that scrubs sensitive values (keys, tokens, PII) before prompts leave for a third-party provider — enable it when you route inference externally.
                </p>
              </div>

              {/* Q11 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Can I use my own AI models?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes — bring your own key for any of nine providers: Anthropic, OpenAI, Gemini, Fireworks, Groq, and more. For the main investigation role, use one that enforces structured output (Gemini, OpenAI, or Anthropic). There is also a local provider for OpenAI-compatible endpoints such as vLLM or Ollama. We have not yet verified a full investigation end to end on an open-weights model, and local endpoints are best-effort for structured output, so we do not recommend it for the investigation role until we publish a tested configuration. If you try one, tell us how it went.
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
              {/* Q12 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Is FaultMaven really free?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes. Standalone is free forever — full features, no usage limits. You host it, you control it. The engine is fair source (FSL-1.1-ALv2): audit every line, and each release converts to Apache 2.0 two years after it ships. FaultMaven Cloud is free during beta, with a daily limit on investigation turns; pricing will be announced before general availability.
                </p>
              </div>

              {/* Q13 */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  What is FaultMaven Cloud, and am I locked in?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  FaultMaven Cloud is FaultMaven run for you: the same engine as the self-hosted version, with nothing to install or operate, plus team knowledge sharing (the team scope needs multi-tenancy, so it is Cloud-only). It is in beta — free, with a daily limit on investigation turns — and pricing will be announced before general availability. You are not locked in: the engine is fair source, so you can run it yourself for free at any time. Moving is manual today — there is no automated migration, so you would re-upload knowledge base documents, and a case can be exported to Markdown from the dashboard.
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
                  Install it from the <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Chrome Web Store</a> — Chrome, Edge, Brave, and other Chromium browsers. The same install works whether your backend is FaultMaven Cloud or a server you self-host; you choose that in Settings. The extension works as a side-panel alongside any webpage—Grafana, AWS Console, Datadog, or even your terminal output.
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
