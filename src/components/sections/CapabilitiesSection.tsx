'use client';

import {
  IconChartBar,
  IconDocumentText,
  IconSparkles,
} from '@/components/icons/homepage';

export default function CapabilitiesSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-8">
          Core Capabilities in Private Beta
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
          Design partners are using these powerful capabilities through our simple browser extension:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconChartBar className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              AI-Powered Root Cause Analysis
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3">
              Share logs, errors, or system context. FaultMaven analyzes patterns, identifies likely root causes, and provides actionable next steps.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400/80 italic">
              Less guessing, faster resolution—cutting MTTR significantly.
            </p>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconDocumentText className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Auto-Generated Summaries & Documentation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3">
              Automatically generate summaries and draft post-mortem notes as you troubleshoot.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400/80 italic">
              Preserve knowledge without tedious manual note-taking.
            </p>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconSparkles className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Intelligent Knowledge Retrieval
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3">
              Store runbooks and past solutions. FaultMaven intelligently surfaces relevant knowledge when similar issues arise.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400/80 italic">
              Stop reinventing solutions—leverage proven fixes instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
