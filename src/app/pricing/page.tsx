'use client';

import Button from '@/components/ui/Button';

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Two ways to run FaultMaven
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Self-host the open-core engine for free, or let us run it for you with team collaboration on Cloud. Same engine either way.
          </p>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standalone */}
            <div className="border-2 border-slate-200 dark:border-slate-800 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Standalone
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">Free</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">· Fair Source</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  Self-hosted · FaultMaven Core
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                  The complete engine, on your own infrastructure.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Run FaultMaven as a single instance with Docker Compose. SQLite, an embedded vector store, and in-process caching — no external services to operate.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Full AI troubleshooting and investigation engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Ships with starter runbooks, auto-loaded on first start</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Build a personal knowledge base; generate runbooks from resolved cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Browser extension (Copilot) + web Dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Multi-LLM support — 9 providers, bring your own API keys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Fair source (FSL-1.1-ALv2) — audit it, fork it, run it in your business</span>
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
                    <span>Contributors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Anyone evaluating before adopting</span>
                  </li>
                </ul>
              </div>

              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="secondary" className="w-full">
                Deploy Now →
              </Button>
            </div>

            {/* Cloud */}
            <div className="border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 bg-white dark:bg-slate-900 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Cloud
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-semibold text-slate-900 dark:text-slate-50">In beta</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  Multi-tenant SaaS · hosted by FaultMaven
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                  Everything in Standalone, fully managed — plus team collaboration.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6">
                The same engine, run for you on Kubernetes with a managed data tier. Multi-tenancy adds the team knowledge scope a single-instance deployment can&apos;t.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Team knowledge sharing</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Share personal runbooks with your team. Knowledge spans three scopes — global, team, and personal.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Organization &amp; access management</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Organizations, teams, and role-based access control, with SSO (SAML/OIDC).
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Managed infrastructure</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      We run it on Kubernetes with a managed database, vector store, and sessions. No ops, no capacity planning.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Managed LLM routing</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      A multi-provider fallback chain, managed for you — no API keys to wrangle.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-50">Persistent case history</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Sessions and cases are saved across restarts and devices.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Works for individuals and teams. Cloud is currently in beta.
                </p>
              </div>

              <Button asChild href="/waitlist" variant="primary" className="w-full">
                Join the waitlist →
              </Button>
            </div>
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
                What&apos;s the difference between Standalone and Cloud?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                The same engine, run two ways:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left py-2 px-3 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-900 dark:text-slate-100">Standalone</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-900 dark:text-slate-100">Cloud</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Knowledge base</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Global + personal scopes; ships with starter runbooks</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Adds the team scope — share runbooks across your org</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Hosting</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Your infrastructure (Docker Compose)</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Fully managed (Kubernetes)</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">LLM</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Bring your own keys</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Managed multi-provider routing</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Tenancy</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Single-user</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Multi-tenant (orgs, teams, RBAC, SSO)</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Sessions</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">In-process (reset on restart)</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Persistent</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">License</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Open core (fair source, FSL-1.1-ALv2)</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Open core + managed service</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mt-4 font-medium">
                Standalone gives you full control; Cloud adds team collaboration and removes the ops.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                I&apos;m a solo engineer. Should I use Cloud?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Not necessarily. Standalone has the full troubleshooting engine, ships with starter runbooks, and lets you build a personal knowledge base — all free, on your own machine.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Cloud earns its place when you want a managed setup (no infrastructure or API keys to run) or need to share knowledge across a team.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                What runbooks are included?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                Both deployments ship with starter runbooks covering common stacks:
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
                  <span>Monitoring (Prometheus, Grafana)</span>
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                They load on first start, and you extend them with your own — including runbooks generated from resolved cases.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                How does team knowledge sharing work?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Runbooks live in three scopes:
              </p>
              <ul className="space-y-2 mb-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span><strong>Global</strong> — ships with FaultMaven for every user; the community can contribute more.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span><strong>Personal</strong> — yours, created manually or generated from a resolved case.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span><strong>Team</strong> — a personal runbook you choose to share with your organization.</span>
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                The team scope requires multi-tenancy, so it&apos;s a Cloud capability. Global and personal scopes work in Standalone too.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Can I contribute runbooks back?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Yes. Anyone can open a pull request to add runbooks to the public repository. Once approved, they ship in the global scope for every FaultMaven user.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Is it free?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Standalone is free under the fair-source FSL license — just deploy and use it.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                Cloud is currently in beta. Join the waitlist for access; pricing will be announced before general availability.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Can I switch from Standalone to Cloud?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Yes. Both run the same codebase and data model, so your knowledge base and case history move with you.
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
            Start free, self-hosted
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Deploy FaultMaven in 5 minutes and try it on a real incident. No credit card, no sign-up.
          </p>
          <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="text-lg px-8">
            Deploy Now →
          </Button>
        </div>
      </section>
    </main>
  );
}
