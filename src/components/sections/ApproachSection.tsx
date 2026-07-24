'use client';

import {
  IconChartBar,
  IconSparkles,
  IconLink,
} from '@/components/icons/homepage';

export default function ApproachSection() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          How FaultMaven Works
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          Three capabilities that make AI actually useful for incident response.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200">
            <IconChartBar className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Deep Context Awareness
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              FaultMaven doesn&apos;t just read your error message—it correlates what you share across the stack: logs, metrics, traces, configs, and source code. It reasons a causal chain from the symptom to the system state that caused it, not just the error itself.
            </p>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200">
            <IconSparkles className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              The Tiered Knowledge Engine
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Most troubleshooting knowledge dies in Slack. FaultMaven captures it:
            </p>
            <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span><strong className="text-slate-800 dark:text-slate-200">Global Intelligence</strong> — 90+ curated runbooks for Kubernetes, databases, cloud platforms, message queues, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span><strong className="text-slate-800 dark:text-slate-200">Team Knowledge</strong> — Your runbooks, post-mortems, and past resolutions, shared across the team (Cloud)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span><strong className="text-slate-800 dark:text-slate-200">Personal Context</strong> — Your specific environment, local configs, and preferences</span>
              </li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Every fix makes the system smarter — so you spend less time re-solving problems you&apos;ve already cracked.
            </p>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200">
            <IconLink className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Zero Context-Switching
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The FaultMaven Copilot lives where you work—a browser side-panel alongside the AWS Console, Datadog, Grafana, your terminal, or localhost. The fix comes to the problem, not the other way around. No production API keys to hand over and no agents on your systems — the extension runs client-side and talks only to your own FaultMaven instance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
