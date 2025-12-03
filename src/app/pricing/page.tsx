'use client';

import Button from '@/components/ui/Button';

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Start free. Scale when you&apos;re ready. Enterprise support when you need it.
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
                <p className="text-slate-600 dark:text-slate-400">
                  Self-hosted. Full control. Perfect for individuals and small teams.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Full Tiered Knowledge Engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Browser Copilot extension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">All integrations (logs, metrics, traces)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Community support (GitHub Discussions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Apache 2.0 license</span>
                </li>
              </ul>

              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="secondary" className="w-full">
                Deploy Now (Free)
              </Button>
            </div>

            {/* Team Tier */}
            <div className="border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 bg-white dark:bg-slate-900 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Team
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">$49</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">/user/month</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Cloud-hosted or self-hosted with team features and priority support.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">+</span>
                  <span className="text-slate-700 dark:text-slate-300">Everything in Open Source</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Shared knowledge base</strong> across team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Managed cloud hosting</strong> option</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Priority support</strong> (24-hour SLA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Automatic knowledge indexing</span>
                </li>
              </ul>

              <Button asChild href="/contact" variant="primary" className="w-full">
                Get Started
              </Button>
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
                <p className="text-slate-600 dark:text-slate-400">
                  For large teams with advanced compliance and infrastructure needs.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">+</span>
                  <span className="text-slate-700 dark:text-slate-300">Everything in Team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>SSO/SAML integration</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Dedicated support</strong> with direct Slack channel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Custom SLAs (including 24/7 coverage)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">On-premise deployment assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Custom integrations and features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Security and compliance reviews</span>
                </li>
              </ul>

              <Button asChild href="/contact" variant="secondary" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Founders Program - Highlighted Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-600 rounded-xl p-10 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full">
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                  🚀 Limited Time Offer
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Beta Founders Program
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Join the first 100 teams deploying FaultMaven in production
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
                  What You Get:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>50% off Team tier</strong> for 12 months ($24.50/user/month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>Direct line to founders</strong> via private Slack channel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>Influence the roadmap</strong> — your priorities get built first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>Beta Founder badge</strong> and public recognition</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
                  What We Ask:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">→</span>
                    <span className="text-slate-700 dark:text-slate-300">Use FaultMaven on at least 5 real incidents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">→</span>
                    <span className="text-slate-700 dark:text-slate-300">Monthly 30-minute feedback call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">→</span>
                    <span className="text-slate-700 dark:text-slate-300">Optional: Public testimonial or case study</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                <strong className="text-slate-900 dark:text-slate-50">72 spots remaining</strong> — Program ends when we hit 100 teams
              </p>
              <Button asChild href="/contact" variant="primary" className="text-lg px-8">
                Apply for Beta Founders
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Math - ROI Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
            The Math
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            FaultMaven pays for itself after the first incident.
          </p>

          <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              3 AM Production Outage: Before vs. After
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <div>
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4 uppercase tracking-wide">
                  WITHOUT FAULTMAVEN
                </h4>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3">•</span>
                    <span>Engineer wakes up groggy, checks PagerDuty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3">•</span>
                    <span>Opens laptop, pulls up 5 tabs: Datadog, Grafana, AWS Console, logs, Slack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3">•</span>
                    <span>Tries to remember: &quot;Did we deploy something? Was there a config change?&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3">•</span>
                    <span>Searches Slack for similar errors: &quot;I feel like we&apos;ve seen this before...&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3">•</span>
                    <span>Wakes up second engineer for help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3">•</span>
                    <span>Eventually finds root cause, rolls back</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-700 dark:text-red-400 font-semibold">
                    Time to resolution: 90 minutes
                  </p>
                  <p className="text-red-600 dark:text-red-500 text-sm mt-1">
                    2 engineers × 1.5 hours × $150/hour = <strong>$450 cost</strong>
                  </p>
                  <p className="text-red-600 dark:text-red-500 text-sm">
                    Plus: Downtime impact, customer complaints, lost sleep
                  </p>
                </div>
              </div>

              {/* After */}
              <div>
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 uppercase tracking-wide">
                  WITH FAULTMAVEN
                </h4>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Engineer wakes up, opens FaultMaven Copilot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Pastes error from PagerDuty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>FaultMaven correlates: &quot;Error started 2 min after deployment at 2:47 AM&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Surfaces: &quot;Similar incident 6 months ago—same root cause&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Links to runbook: &quot;Rollback procedure&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                    <span>Rolls back, incident resolved</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-400 font-semibold">
                    Time to resolution: 15 minutes
                  </p>
                  <p className="text-green-600 dark:text-green-500 text-sm mt-1">
                    1 engineer × 0.25 hours × $150/hour = <strong>$37.50 cost</strong>
                  </p>
                  <p className="text-green-600 dark:text-green-500 text-sm">
                    Downtime: 83% shorter. Back to sleep by 3:30 AM.
                  </p>
                </div>
              </div>
            </div>

            {/* The Numbers */}
            <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
                The Numbers
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    40-60%
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    MTTR reduction (early user data)
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    $412
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Saved per incident (based on example above)
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    1 incident
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    ROI breakeven for a 10-person team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-50 mb-12">
            Pricing FAQs
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                What counts as a &quot;user&quot;?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Anyone who logs into FaultMaven or uses the Copilot extension. You only pay for active users—if someone leaves the team or stops using FaultMaven, remove them and stop paying.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Can I switch from self-hosted to cloud?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Yes. If you start with Open Source (self-hosted) and later upgrade to Team with cloud hosting, we&apos;ll help you migrate your knowledge base and configurations. No data loss.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Do you offer discounts for nonprofits or educational institutions?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Yes. Contact us at <a href="mailto:hello@faultmaven.com" className="text-blue-600 dark:text-blue-400 hover:underline">hello@faultmaven.com</a> with proof of nonprofit or educational status for custom pricing.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                What happens when my Beta Founders discount ends?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                After 12 months, you&apos;ll automatically roll over to the standard Team tier pricing ($49/user/month). We&apos;ll notify you 30 days before the transition. You can downgrade to Open Source or cancel anytime with no penalty.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Can I pay annually for a discount?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Yes. Annual plans get 2 months free (equivalent to ~17% discount). Contact us to set up annual billing.
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
