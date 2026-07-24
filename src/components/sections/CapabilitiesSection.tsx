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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          What You Can Do Today
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          Start with a question, not a crisis. Upload a log or point FaultMaven at a dashboard and just ask whether anything looks off — it answers like a sharp teammate, and because it&apos;s tuned for problem detection, it flags what&apos;s out of the ordinary. When something real surfaces, it shifts from that inquiry into a full, evidence-grounded investigation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconChartBar className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              AI-Powered Root Cause Analysis
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Paste a stack trace, share a log file, or describe the symptoms. FaultMaven analyzes patterns across your full stack and returns actionable next steps—not generic suggestions.
            </p>
            <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-slate-800 dark:text-slate-200">Example:</strong> &quot;Why is my pod CrashLoopBackOff?&quot; → FaultMaven checks your deployment manifest, recent config changes, and similar past incidents.
              </p>
            </div>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconSparkles className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Intelligent Knowledge Retrieval
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Your runbooks and past resolutions are automatically indexed and surfaced when similar issues arise. Semantic search means you find solutions by describing the problem—not remembering the exact title.
            </p>
            <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-slate-800 dark:text-slate-200">Example:</strong> &quot;Database connection timeouts under load&quot; → surfaces 3 relevant past incidents + the fixes that worked.
              </p>
            </div>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconDocumentText className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Auto-Generated Case Documentation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              As you troubleshoot, FaultMaven captures context, timeline, and resolution. Export to post-mortem format with one click. Stop losing institutional knowledge.
            </p>
            <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-slate-800 dark:text-slate-200">Example:</strong> Incident → Investigation → Resolution → Searchable knowledge (automatic)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
