'use client';

import Button from '@/components/ui/Button';

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Simple Pricing. Serious Value.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Start free with self-hosted. Upgrade to Cloud for a premium AI experience.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Open Source Tier */}
            <div className="border-2 border-slate-200 dark:border-slate-800 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Open Source
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">FREE</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">forever</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  Self-Hosted
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                  Full control. Your infrastructure. Your data.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6">
                The complete FaultMaven engine, self-hosted on your own servers.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Core AI troubleshooting engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Personal knowledge base</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Browser extension + web dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Multi-LLM support (bring your own API keys)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Docker Compose deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Apache 2.0 license — use commercially, fork freely</span>
                </li>
              </ul>

              <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  You provide:
                </p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Infrastructure (Docker, 8GB+ RAM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>LLM API keys (OpenAI, Anthropic, or local via Ollama)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Knowledge base content (start from scratch)</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Best for:
                </p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Engineers who want full control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Air-gapped or privacy-first environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Open source contributors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Teams evaluating before committing</span>
                  </li>
                </ul>
              </div>

              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="secondary" className="w-full">
                Deploy Now →
              </Button>
            </div>

            {/* Cloud Tier */}
            <div className="border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 bg-white dark:bg-slate-900 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Cloud
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">$49</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">/user/month</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  SaaS
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                  Premium AI. Zero ops. Works out of the box.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Everything in Open Source, plus a significantly better experience:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Built-in Knowledge Base</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Pre-loaded with troubleshooting patterns for common tech stacks and cloud services — curated from official documentation and operational best practices. Start with intelligence, not an empty slate.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Optimized RAG</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Enhanced retrieval pipeline for faster, more accurate knowledge matching. Better answers, less noise.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Optimized LLM Routing</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      We manage provider selection and optimization. You get the best model for each query without managing API keys or costs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Auto-Scaling Infrastructure</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Handles any workload. No capacity planning required.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Native Integrations</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Slack notifications, PagerDuty alerts, and more — built in, not bolted on.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Priority Support</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      24-hour response SLA. Real humans who understand operations.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Works for individuals AND teams.
                </p>
              </div>

              <Button asChild href="/contact" variant="primary" className="w-full mb-3">
                Start Free Trial →
              </Button>
              <p className="text-xs text-center text-slate-500 dark:text-slate-500">
                14 days, no credit card
              </p>
            </div>

            {/* Enterprise Tier */}
            <div className="border-2 border-slate-200 dark:border-slate-800 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Enterprise
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">Custom</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  Organization
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                  For organizations with compliance, scale, and integration needs.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Everything in Cloud, plus:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">SSO / SAML</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Okta, Azure AD, Google Workspace — your identity provider, our platform.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">RBAC &amp; Audit Logging</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Role-based access control. Complete audit trail for compliance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Dedicated Infrastructure</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Single-tenant deployment option. Your data, isolated.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Custom SLA</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Up to 99.99% uptime guarantee. Penalties if we miss it.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Deep Integrations</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Slack workflows, PagerDuty automation, ServiceNow tickets, custom webhooks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Dedicated Support</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Named support engineer. Slack channel with your team. Onboarding assistance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">On-Premise Option</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Need to run in your data center? We&apos;ll help you deploy.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Best for:
                </p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Organizations with compliance requirements (SOC 2, HIPAA, FedRAMP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Large teams (50+) needing centralized management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Companies requiring deep integrations with existing tooling</span>
                  </li>
                </ul>
              </div>

              <Button asChild href="/contact" variant="secondary" className="w-full">
                Contact Sales →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Subscription Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Team Subscription (5+ seats)
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Subscribe 5 or more seats and receive a free Team Admin account:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">
                  What Team Admin can do:
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Create and curate shared knowledge bases for the team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Manage team membership and access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>View team-wide analytics and usage patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Control what knowledge is shared vs. kept private</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-4">
                  What Team Admin cannot do:
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-3">✗</span>
                    <span>Use the AI troubleshooting features (admin-only, no troubleshooting)</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
                  This ensures every engineer who needs to troubleshoot has their own account, while giving your organization centralized knowledge management at no extra cost.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
                How it works:
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Seats</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Monthly Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">What You Get</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">1</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">$49</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">Individual Cloud account</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">2</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">$98</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">2 Individual accounts</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">3</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">$147</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">3 Individual accounts</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">4</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">$196</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">4 Individual accounts</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 bg-green-50 dark:bg-green-900/20">
                      <td className="py-3 px-4 text-slate-900 dark:text-slate-100 font-semibold">5+</td>
                      <td className="py-3 px-4 text-slate-900 dark:text-slate-100 font-semibold">$245+</td>
                      <td className="py-3 px-4 text-slate-900 dark:text-slate-100 font-semibold">All individual accounts + FREE Team Admin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-3">
                Each team member gets:
              </h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Their own Cloud account with personal workspace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Access to shared Team KB (curated by admin)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <div>
                    <span className="font-medium">Full Tiered Knowledge Engine:</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Built-in Global KB (pre-loaded) + Team KB (shared by admin) + Personal Context (their own)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Math - ROI Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-12">
            The Math
          </h2>

          <div className="mb-8 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              A typical incident costs:
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              <li className="flex items-start justify-center">
                <span className="mr-2">•</span>
                <span>90 minutes of senior engineer time (~$225)</span>
              </li>
              <li className="flex items-start justify-center">
                <span className="mr-2">•</span>
                <span>Revenue impact during outage (varies)</span>
              </li>
              <li className="flex items-start justify-center">
                <span className="mr-2">•</span>
                <span>Stress, context-switching, sleep loss (priceless)</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-12">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
              FaultMaven Cloud users report:
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3">•</span>
                <span>40-60% reduction in mean time to resolution</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3">•</span>
                <span>&quot;Solved in 15 minutes what would have taken 2 hours&quot;</span>
              </li>
            </ul>
          </div>

          <div className="text-center p-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-600 rounded-xl">
            <p className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Break-even:
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              If FaultMaven saves you <strong className="text-blue-600 dark:text-blue-400">ONE incident per month</strong>, it pays for itself twice over.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-50 mb-12">
            Pricing FAQs
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                What&apos;s the difference between self-hosted and Cloud?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                More than just hosting:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left py-2 px-3 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-900 dark:text-slate-100">Self-Hosted</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-900 dark:text-slate-100">Cloud</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Knowledge Base</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Start empty</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Pre-loaded with common patterns</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">RAG Quality</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Basic</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Optimized for accuracy</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">LLM</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Bring your own keys</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Managed &amp; optimized</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Scalability</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Your infrastructure</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Auto-scaling</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Integrations</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Manual setup</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Native (Slack, PagerDuty)</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Support</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Community</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Priority (24hr SLA)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mt-4 font-medium">
                Self-hosted gives you control. Cloud gives you a better experience.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                I&apos;m a solo engineer. Is Cloud worth it?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                If you value your time: yes.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Cloud starts with a pre-loaded knowledge base — troubleshooting patterns for common tech stacks and cloud services, curated from official docs and operational best practices. Self-hosted starts empty.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Cloud also has optimized RAG and LLM routing, meaning faster and more accurate answers without managing API keys.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                What&apos;s included in the built-in knowledge base?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                Troubleshooting patterns for common tech stacks and cloud services:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 mb-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Container orchestration (Kubernetes, Docker)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Databases (PostgreSQL, MySQL, Redis, MongoDB)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Cloud platforms (AWS, GCP, Azure)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Message queues (Kafka, RabbitMQ)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Web servers (Nginx, Apache)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Monitoring (Prometheus, Grafana patterns)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>And more...</span>
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                All content is curated from official documentation and operational best practices. It&apos;s continuously updated as we add more coverage.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                What exactly is the Team Admin account?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                When you subscribe 5+ Cloud seats, you get a free administrative account.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                <strong className="text-slate-900 dark:text-slate-50">The Team Admin can:</strong>
              </p>
              <ul className="space-y-2 mb-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                  <span>Create and manage shared knowledge bases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                  <span>Add/remove team members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                  <span>View team analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                  <span>Curate approved solutions and runbooks</span>
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                The Team Admin <strong className="text-slate-900 dark:text-slate-50">cannot</strong> use AI troubleshooting features — it&apos;s purely for administration. This ensures every engineer who needs to troubleshoot has their own seat.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Can I start solo and add teammates later?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Yes. Start with one Cloud account. When you&apos;re ready:
              </p>
              <ul className="space-y-2 mb-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span><strong>Add seats 2-4:</strong> Just more individual accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span><strong>Add seat 5+:</strong> Automatically get the free Team Admin</span>
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                Your existing knowledge base and cases transfer seamlessly.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Yes. 14-day free trial of Cloud, no credit card required.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                For self-hosted, it&apos;s free forever — just deploy and use.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Can I switch from self-hosted to Cloud?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Yes. We provide migration tools to transfer your knowledge base and case history. Your data is portable.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Do you offer discounts for startups or nonprofits?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Contact us. We have programs for early-stage startups and registered nonprofits.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              More questions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild href="/faq" variant="secondary">
                View Full FAQ
              </Button>
              <Button asChild href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Start Free. Scale When Ready.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Deploy FaultMaven in 5 minutes and test it on a real incident. No credit card required.
          </p>
          <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="text-lg px-8">
            Deploy Now (Free) →
          </Button>
        </div>
      </section>
    </main>
  );
}
