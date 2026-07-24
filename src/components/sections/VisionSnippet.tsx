'use client';

import Button from '../ui/Button';

export default function VisionSnippet() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">
          The Vision: Earned Autonomy
        </h2>
        <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
          Trust first. Autonomy earned.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          FaultMaven is a copilot by choice, not by limitation. Rather than demand broad access on day one, it starts hands-on and earns more autonomy as it proves itself — growing in three phases:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-left mb-8">
          <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400 mb-1">Phase 1 · Now</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Copilot</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Turn-by-turn. Zero access to your systems — it works only from what you share.</p>
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
