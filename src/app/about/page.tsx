'use client';

import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Built by engineers, for engineers
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We got tired of solving the same problem twice. So we built FaultMaven.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            The Problem We Lived
          </h2>
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>
              Picture this: It&apos;s 2:47 AM. PagerDuty goes off. You roll out of bed and start the ritual—open laptop, check Datadog, grep logs, dig through Slack history. &quot;I&apos;ve seen this before... where was it?&quot;
            </p>
            <p>
              Thirty minutes later, you find the fix—buried in a Confluence page from 8 months ago. The same root cause. The same solution. You just wasted 30 minutes re-learning what your team already knew.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-50">This is a solved problem.</strong> Your team solved it. But the solution died in Slack, or got lost in a runbook no one remembers, or lived in someone&apos;s head—until they left.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            The Insight
          </h2>
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>
              Most engineering teams have three knowledge problems:
            </p>
            <ol className="list-decimal pl-8 space-y-4">
              <li>
                <strong className="text-slate-900 dark:text-slate-50">Knowledge capture is manual.</strong> After every incident, someone writes a post-mortem. It goes into Confluence. No one reads it again.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-50">Knowledge retrieval is slow.</strong> When you need that post-mortem at 3 AM, good luck finding it. You&apos;ll grep Slack, check three Confluence spaces, and eventually give up.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-50">Context is fragmented.</strong> The error is in Datadog. The config is in GitHub. The deployment timeline is in CircleCI. The last time this happened is in Slack. You manually connect the dots.
              </li>
            </ol>
            <p className="pt-6">
              AI can solve all three—<em>if</em> you build it right. Not a chatbot where you paste logs and beg for help. A system that <strong className="text-slate-900 dark:text-slate-50">captures, indexes, and correlates</strong> everything automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            Our Philosophy
          </h2>
          <div className="space-y-8">
            {/* Principle 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                1. Memory is the killer feature
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Generic AI is smart but forgetful. FaultMaven remembers: your infrastructure, your past incidents, your team&apos;s solutions. Memory turns &quot;pretty good AI&quot; into &quot;indispensable teammate.&quot;
              </p>
            </div>

            {/* Principle 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                2. Zero context-switching
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                You shouldn&apos;t have to leave your tools to get help. FaultMaven lives where you work—a browser side-panel alongside Grafana, the AWS Console, your terminal, or any webpage. The fix comes to the problem.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                3. Show the code
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Troubleshooting infrastructure is mission-critical. You shouldn&apos;t have to trust a black box. FaultMaven is fair source (FSL-1.1-ALv2, converting to Apache 2.0 two years after each release)—audit every line, self-host forever, contribute improvements. If we disappear tomorrow, your knowledge survives.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">🌙</span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  4. Built for 3 AM
                </h3>
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
                When you&apos;re half-asleep and production is on fire, you don&apos;t want clever AI—you want <strong className="text-slate-900 dark:text-slate-50">the answer, fast</strong>. FaultMaven optimizes for incident response, not parlor tricks.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 italic">
                &quot;When you&apos;re half-asleep and the alert is real.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            Who We Are
          </h2>
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>
              We&apos;re a small team of engineers with deep and varied software backgrounds — well beyond operations and SRE. Between us that spans backend systems, infrastructure, data, and developer tooling, and the messy seams where they meet.
            </p>
            <p>
              FaultMaven is what happens when you fuse that experience with a large language model. Not an LLM left to guess on its own, but one working inside a method — the way an experienced engineer actually troubleshoots: goal-driven, methodical, grounded in evidence. We set out to encode that instinct for working a problem, and let the model do the tireless part.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-50">We build FaultMaven because we kept needing it ourselves</strong> — and we doubt we&apos;re the only ones. Whether we got it right is yours to judge, and you don&apos;t have to take our word for it: the source is public — fair source — and there&apos;s a <a href="/investigation" className="text-blue-600 dark:text-blue-400 hover:underline">full unedited transcript</a> of it working a case, refusals and all.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            Why Now?
          </h2>
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>
              Two things changed:
            </p>
            <ol className="list-decimal pl-8 space-y-4">
              <li>
                <strong className="text-slate-900 dark:text-slate-50">LLMs got good enough.</strong> GPT-4, Claude Sonnet, and similar models can actually reason about complex systems. They understand logs, correlate symptoms, and explain root causes. This wasn&apos;t possible 3 years ago.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-50">RAG (Retrieval-Augmented Generation) matured.</strong> Modern vector databases and embeddings let AI &quot;remember&quot; your past incidents with high accuracy. The knowledge retrieval problem is solved.
              </li>
            </ol>
            <p className="pt-6">
              For the first time, we can build a system that <strong className="text-slate-900 dark:text-slate-50">learns, remembers, and accelerates</strong> incident response at scale. That&apos;s FaultMaven.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Building Toward */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            What We&apos;re Building Toward
          </h2>
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>
              Today, FaultMaven works turn-by-turn beside you. Over time it takes on more of the loop on its own — investigating the diagnostic data bundles you hand it, and eventually, once you connect it to your stack, responding to alerts end-to-end: gathering the evidence, isolating the root cause, and proposing the fix.
            </p>
            <p>
              We&apos;re not trying to predict the future or forecast next quarter&apos;s outages. FaultMaven is the engineer at the keyboard when something is <em>already</em> broken — the goal is to shorten the path from alert to resolution, and to turn every incident into knowledge the next one can reuse.
            </p>
            <p className="pt-6">
              <strong className="text-slate-900 dark:text-slate-50">That&apos;s the roadmap.</strong> We&apos;re not there yet — but we&apos;re building toward it one incident, one resolution, one piece of captured knowledge at a time. <a href="/roadmap" className="text-blue-600 dark:text-blue-400 hover:underline">See the roadmap →</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-800/50 border-2 border-blue-500 dark:border-blue-600 rounded-xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 text-center">
              Join Us
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 text-center max-w-2xl mx-auto">
              FaultMaven is fair source—every line is public. Deploy it, use it, improve it, break it—then tell us what you learned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="text-lg px-8">
                Deploy Now (Free)
              </Button>
              <Button asChild href="https://github.com/FaultMaven/faultmaven/discussions" variant="secondary" className="text-lg px-8">
                Join Discussions
              </Button>
              <Button asChild href="https://github.com/FaultMaven/faultmaven" variant="secondary" className="text-lg px-8">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
