import React from 'react';
import Link from '@/components/ui/Link';

const faqItems = [
  {
    question: `What is FaultMaven?`,
    answer: `FaultMaven is an open-source AI troubleshooting copilot that remembers your infrastructure and past incidents. Instead of grep-ing through logs or asking Slack "has anyone seen this?" at 3 AM, FaultMaven gives you instant answers based on your team's institutional knowledge. Deploy locally with Docker Compose in minutes, or use our managed Enterprise Cloud.`,
  },
  {
    question: `How is this different from ChatGPT or Claude?`,
    answer: `
      <p>Generic AI tools require you to manually copy-paste logs and explain context every single time. FaultMaven:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Auto-ingests your data:</strong> Reads logs, files, and metrics directly from source</li>
        <li><strong>Remembers your architecture:</strong> Correlates errors with config files and system topology</li>
        <li><strong>Learns from past incidents:</strong> Indexes your runbooks, docs, and previous resolutions</li>
        <li><strong>Works offline:</strong> Can run 100% air-gapped with local LLMs (no internet required)</li>
      </ul>
      <p class="mt-2">See our <Link href='/#comparison' class='text-[#2563EB] hover:underline'>detailed comparison table</Link> for more.</p>
    `,
  },
  {
    question: `How much does it cost?`,
    answer: `
      <p>The open-source version is <strong>free forever</strong> (Apache 2.0 license). Self-host it on your infrastructure with no limitations.</p>
      <p class="mt-2">For teams that need collaboration, SSO, and managed hosting, we're launching an <strong>Enterprise Cloud</strong> tier at $49-99/user/month. Right now, we're offering free Beta Founders access—no credit card, no time limit. <Link href='/pricing' class='text-[#2563EB] hover:underline'>Learn more about pricing</Link>.</p>
    `,
  },
  {
    question: `How do I get started?`,
    answer: `
      <p><strong>Option 1: Open Source (Fastest)</strong></p>
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Clone the repo: <code class="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm">git clone https://github.com/FaultMaven/faultmaven</code></li>
        <li>Run: <code class="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm">docker-compose up</code></li>
        <li>You're running in ~5 minutes</li>
      </ul>
      <p class="mt-3"><strong>Option 2: Beta Founders Program (Enterprise Cloud)</strong></p>
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li><Link href='/contact' class='text-[#2563EB] hover:underline'>Contact us</Link> and tell us about your last painful incident</li>
        <li>If it sounds painful enough, you're in (free enterprise access, no time limit)</li>
      </ul>
      <p class="mt-3">Full setup guide: <Link href='https://github.com/FaultMaven/faultmaven#quick-start' class='text-[#2563EB] hover:underline'>GitHub README</Link></p>
    `,
  },
  {
    question: `What LLM providers does FaultMaven support?`,
    answer: `
      <p>FaultMaven is LLM-agnostic and supports:</p>
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Cloud providers:</strong> OpenAI (GPT-4o), Anthropic (Claude), Google (Gemini), Groq (FREE tier!), and more</li>
        <li><strong>Local/offline:</strong> Ollama, LM Studio, any OpenAI-compatible endpoint</li>
        <li><strong>Fallback support:</strong> Configure multiple providers; FaultMaven automatically fails over if one is unavailable</li>
      </ul>
      <p class="mt-2">You can even run 100% air-gapped with local models like Llama 3. See our <Link href='https://github.com/FaultMaven/faultmaven/blob/main/docs/LLM_CONFIGURATION.md' class='text-[#2563EB] hover:underline'>LLM configuration guide</Link>.</p>
    `,
  },
  {
    question: `Can I use FaultMaven for security-sensitive environments?`,
    answer: `
      <p>Yes. FaultMaven can run 100% self-hosted with no external dependencies:</p>
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Air-gapped deployment:</strong> Use local LLMs (Ollama, LM Studio) with no internet connection</li>
        <li><strong>Data stays local:</strong> All logs, analysis, and knowledge base remain on your infrastructure</li>
        <li><strong>Open source:</strong> Audit every line of code on GitHub</li>
      </ul>
      <p class="mt-2">The Enterprise Cloud option uses industry-standard security (SOC 2 Type II in progress), but if you need absolute control, stick with the self-hosted version.</p>
    `,
  },
  {
    question: `Does FaultMaven replace my existing monitoring tools?`,
    answer: `No. FaultMaven works <em>with</em> your existing tools (Datadog, Grafana, PagerDuty, etc.). Think of it as the "AI layer" that sits on top, helping you make sense of all the data those tools generate. It ingests logs and metrics from your existing stack and provides intelligent analysis—it doesn't replace them.`,
  },
  {
    question: `What's on the roadmap?`,
    answer: `
      <p>We're focused on making incident response faster and smarter:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Native integrations:</strong> Direct connectors for Datadog, Splunk, Elastic, PagerDuty</li>
        <li><strong>Team collaboration:</strong> Shared knowledge bases, runbook libraries, incident templates</li>
        <li><strong>Proactive monitoring:</strong> FaultMaven suggests fixes before things break</li>
        <li><strong>Advanced RAG:</strong> Smarter knowledge retrieval from past incidents</li>
      </ul>
      <p class="mt-2">See the full <Link href='/roadmap' class='text-[#2563EB] hover:underline'>product roadmap</Link>.</p>
    `,
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 text-center bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about FaultMaven—from getting started to understanding how it fits into your existing workflow.
          </p>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {item.question}
              </h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 shadow-sm inline-block w-full max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Have More Questions?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Don&apos;t see your question here? Reach out—we&apos;re building FaultMaven with real engineers, for real engineers.
            </p>
            <div className="prose prose-lg prose-slate dark:prose-invert mx-auto text-center">
              <p>
                Please feel free to reach out to us via our{' '}
                <Link
                  href="/contact"
                  className="text-[#2563EB] hover:underline"
                >
                  Contact Page
                </Link>
                .
                <br />
                You can also send your questions directly to{' '}
                <Link
                  href="mailto:support@faultmaven.ai"
                  className="text-[#2563EB] hover:underline"
                >
                  support@faultmaven.ai
                </Link>
                .
              </p>
              <p className="mt-4">
                We appreciate your interest and will use your input to expand this resource!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
