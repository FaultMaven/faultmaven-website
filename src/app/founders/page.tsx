'use client';

import Button from '@/components/ui/Button';

export default function FoundersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Build the Future of Incident Response — With Us
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-8 font-medium">
            Join the Beta Founders. Get early access. Shape what we build.
          </p>
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              We&apos;re building FaultMaven in the open, and we&apos;re looking for engineers who want to be part of the journey. Not just users — collaborators. People who see the vision and want to help make it real.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
              Join the Beta Founders: free access to everything we&apos;re building, a direct line to the team, and a chance to shape the product from day one.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href="#apply" variant="primary" className="text-lg px-8">
              Apply to Join →
            </Button>
            <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="secondary" className="text-lg px-8">
              Or self-host Standalone now →
            </Button>
          </div>
        </div>
      </section>

      {/* Standalone Callout */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20 border-y-2 border-blue-200 dark:border-blue-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              💡 WANT TO TRY FAULTMAVEN RIGHT NOW?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              The self-hosted Standalone version is live. No application. No waiting.
            </p>
            <pre className="bg-slate-900 dark:bg-slate-950 p-6 rounded-lg mb-6 overflow-x-auto">
              <code className="text-green-400 font-mono text-sm block">
{`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven && ./faultmaven.sh start`}
              </code>
            </pre>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Full AI troubleshooting. Personal knowledge base. Self-hosted. Free. Fair source.
            </p>
            <div className="mb-6">
              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary">
                Deploy Standalone →
              </Button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
              Beta Founders is for early access to Cloud — managed hosting and team collaboration through multi-tenancy. If you just want to use FaultMaven today, start with Standalone.
            </p>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            Where We Are
          </h2>
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>
              FaultMaven&apos;s fair-source core is live and working. You can deploy it today with Docker Compose and start troubleshooting.
            </p>
            <p>
              The Cloud version — managed hosting and team collaboration through multi-tenancy — is under active development. We&apos;re close, but we&apos;re not ready to charge for it yet.
            </p>
            <p className="font-semibold text-slate-900 dark:text-slate-50">
              What we need now isn&apos;t money. It&apos;s feedback.
            </p>
            <p>
              We&apos;re looking for engineers who will use FaultMaven on real incidents, tell us what&apos;s broken, and help us prioritize what to build next.
            </p>
            <p>
              In return, you get full access — free — for as long as you&apos;re actively involved.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-12">
            What Beta Founders Get
          </h2>

          <div className="space-y-8">
            {/* Benefit 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                Full Cloud Access — Free
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Everything we&apos;re building, available to you at no cost:
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Built-in knowledge base (curated troubleshooting patterns)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Optimized RAG and LLM routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Browser extension + web dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Priority access to new features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>No credit card, no time limit, no strings</span>
                </li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                Direct Access to the Team
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Monthly calls with the founders (not support — real conversations)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Private Slack/Discord channel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Your ideas go directly to the roadmap</span>
                </li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                Founder Status
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Locked-in pricing when we launch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Beta Founder badge (if you want it)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Public credit as a founding contributor (optional)</span>
                </li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                And Something Less Tangible
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                The chance to be part of building something from the ground up. Some Beta Founders will become advisors. Some will become collaborators. Some might join the team. We&apos;re open to wherever this leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Ask */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            What We Ask in Return
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Nothing onerous. Just genuine engagement.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Use it when you can
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                On real problems, when they come up. We&apos;re not asking you to manufacture incidents — just include FaultMaven when you&apos;re actually troubleshooting.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Share what you notice
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                What worked? What didn&apos;t? What confused you? What&apos;s missing? A quick message is enough. We&apos;re not looking for formal reports.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Stay in touch
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Monthly calls (15-30 min) to hear how things are going. These are conversations, not status updates. We learn as much from what you don&apos;t say as what you do.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
              That&apos;s it.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              No blog posts. No tweets. No referral quotas. Just honest participation.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            Who Should Apply
          </h2>

          <p className="text-xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
            Anyone who cares about making incident response better.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Whether you&apos;re an SRE, DevOps engineer, platform engineer, or a developer who ends up debugging production issues — if you&apos;ve felt the pain of troubleshooting at 3 AM and thought &quot;there has to be a better way,&quot; we want to hear from you.
          </p>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              We&apos;re especially excited to meet people who:
            </p>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                <span>Have strong opinions about how tools should work</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                <span>Enjoy being part of something from the early days</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                <span>Want to help shape a product, not just use one</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                <span>See themselves potentially building in this space long-term</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mt-6 italic">
            No specific experience required. No minimum incident count. Just genuine interest in solving this problem — together.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            How to Get Involved
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Different levels of involvement, depending on where you are:
          </p>

          <div className="space-y-8">
            {/* Beta Founder */}
            <div className="border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 bg-blue-50 dark:bg-blue-900/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Beta Founder
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Use FaultMaven on real problems. Share what works and what doesn&apos;t. Join monthly calls with the team. Help prioritize the roadmap.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                <strong className="text-slate-900 dark:text-slate-50">You get:</strong> Full Cloud access, direct team access, founder pricing at launch.
              </p>
              <Button asChild href="#apply" variant="primary">
                Apply for Beta Founders →
              </Button>
            </div>

            {/* Contributor */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Contributor
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Contribute code, fix bugs, improve documentation. Every repo is public — the engine fair source, the frontends Apache 2.0. PRs welcome.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                <strong className="text-slate-900 dark:text-slate-50">You get:</strong> Recognition, influence on the codebase, community.
              </p>
              <Button asChild href="https://github.com/FaultMaven/faultmaven" variant="secondary">
                FaultMaven on GitHub →
              </Button>
            </div>

            {/* Knowledge Contributor */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Knowledge Contributor
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Have deep expertise in specific tech stacks? Help us curate troubleshooting patterns for the built-in knowledge base.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                <strong className="text-slate-900 dark:text-slate-50">You get:</strong> Early access, credit in the KB.
              </p>
              <Button asChild href="/contact" variant="secondary">
                Contribute Knowledge →
              </Button>
            </div>

            {/* Just Talk */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Just Want to Talk?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Not ready to commit to anything? That&apos;s fine. Share your thoughts, tell us what problems you face, or just introduce yourself.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
                Some of our best conversations started with a simple email.
              </p>
              <Button asChild href="/contact" variant="secondary">
                Say Hello →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 text-center">
            Join the Beta Founders
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center">
            Quick application — just three questions.
          </p>

          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-8">
            <div className="space-y-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  1. What do you do?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  (Your role, what you work on, the systems you manage)
                </p>
                <div className="h-24 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  2. What&apos;s broken about incident response today?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  (Your frustrations, what you wish existed)
                </p>
                <div className="h-24 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  3. Why do you want to be part of this?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  (What draws you to FaultMaven — be honest)
                </p>
                <div className="h-24 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"></div>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-6 text-center">
              That&apos;s it. No resume. No cover letter. Just tell us what you think.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 text-center italic">
              We read every application personally. If there&apos;s a fit, we&apos;ll reach out to chat — not to interview you, but to learn from you.
            </p>

            <div className="text-center">
              <Button asChild href="/contact" variant="primary" className="text-lg px-8">
                Apply Now →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-50 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Q: Is this really free?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Yes. No credit card. No trial period. No bait-and-switch.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                When we&apos;re ready to launch commercially, Beta Founders will get grandfathered pricing — significantly below the regular rate. But during beta, it&apos;s free.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Q: How long is the beta period?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Until we&apos;re confident the Cloud product is production-ready. That could be 3 months or 6 months — we&apos;re not rushing it.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                Beta Founders keep access throughout, and lock in special pricing at launch.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Q: What if I stop giving feedback?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We understand life gets busy. If you go quiet for a few months, we&apos;ll check in. If you&apos;re no longer interested, no hard feelings — we&apos;ll just close the account.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                We&apos;re not going to hound you, but we do need active participants, not passive users.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Q: Can my whole team join?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                During beta, we&apos;re focused on individuals. If you want to bring your team, apply first as an individual, then let&apos;s talk.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                For larger teams evaluating FaultMaven, contact us directly: <a href="mailto:support@faultmaven.ai" className="text-blue-600 dark:text-blue-400 hover:underline">support@faultmaven.ai</a>
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Q: I&apos;m a developer, not an SRE. Can I still join?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                If you deal with production issues — debugging, incident response, on-call — yes. The product is useful beyond just SREs.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                If you&apos;re purely in feature development with no ops exposure, FaultMaven might not be relevant yet.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Q: Can I use the Standalone version instead?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Absolutely. Standalone is fully functional for individual use. Deploy it today:
              </p>
              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="secondary">
                Deploy Standalone →
              </Button>
              <p className="text-slate-700 dark:text-slate-300 mt-3">
                The Beta Founders program is specifically for the Cloud version — managed hosting and team collaboration.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Q: How do I give feedback?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                Multiple channels:
              </p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Monthly video calls (scheduled with you)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Private Slack/Discord channel</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Email directly to founders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>GitHub issues for bugs</span>
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                Whatever works best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 text-center">
            This Is How Great Things Get Built
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 mb-12">
            <p>
              We&apos;re a small team with a big vision: make every engineer as effective as the best SRE on their best day.
            </p>
            <p>
              We can&apos;t build that alone.
            </p>
            <p>
              The best products come from tight collaboration between builders and users. Some of the people reading this page will become Beta Founders. Some will become contributors. Some might end up building FaultMaven with us full-time.
            </p>
            <p>
              We don&apos;t know where this leads for you. But if you&apos;re the kind of person who sees a problem and wants to fix it — not just complain about it — we&apos;d love to meet you.
            </p>
          </div>

          <div className="text-center mb-12">
            <Button asChild href="#apply" variant="primary" className="text-lg px-8">
              Apply to Join →
            </Button>
          </div>

          <div className="border-t border-slate-300 dark:border-slate-700 pt-12">
            <blockquote className="text-xl text-center text-slate-700 dark:text-slate-300 italic">
              &quot;We&apos;re not just building a product. We&apos;re building a team, a community, and a new way to solve problems.&quot;
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
