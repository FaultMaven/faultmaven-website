'use client';

import {
  IconLink,
  IconSparkles,
  IconTarget,
} from '@/components/icons/homepage';

export default function ApproachSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-8">
          Why FaultMaven Is Different
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
          Unlike generic AI tools, FaultMaven is purpose-built for operations—augmenting your expertise while keeping you in control.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              AI Copilot, Not Autopilot
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              FaultMaven rapidly analyzes data and surfaces insights, but <strong className="font-semibold text-slate-800 dark:text-slate-200">you stay in control</strong>. You direct the investigation and make all final decisions—ensuring safe, accountable troubleshooting.
            </p>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Built for Operations, Not Adapted
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Developed from the ground up by seasoned SREs who understand operational pressures. FaultMaven thinks like an experienced engineer, focusing on the signals that matter most.
            </p>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Actionable Insights, Not Data Overload
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Transform complex data into clear recommendations. FaultMaven cuts through the noise to deliver the insights you need to act decisively.
            </p>
          </div>
        </div>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mt-12">
          From 1.0 to team-wide intelligence, we&apos;re building an AI you can trust.
        </p>
      </div>
    </section>
  );
}
