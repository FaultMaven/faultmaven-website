'use client';

import Button from '../ui/Button';

export default function VisionSnippet() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
          The Vision: Trust first, access follows
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Most AI ops tools ask for broad access to your systems on day one. FaultMaven starts with none and earns its way in — proving its diagnostic method before it ever touches your infrastructure. Its reach grows in three phases:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-left mb-8">
          <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400 mb-1">Phase 1 · Now</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Copilot</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Turn-by-turn, 100% client-side. Zero backend access.</p>
          </div>
          <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400 mb-1">Phase 2 · Next</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Investigator</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Hand it an evidence bundle; get back a diagnosis. Systems stay isolated.</p>
          </div>
          <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 mb-1">Phase 3 · Roadmap</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Integrated Agent</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Connected to your stack, alert-triggered — autonomous from detection to fix.</p>
          </div>
        </div>
        <Button asChild href="/roadmap" variant="secondary">
          Read the Roadmap →
        </Button>
      </div>
    </section>
  );
}
