'use client';

import Button from '../ui/Button';

export default function VisionSnippet() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
          The Vision: From Personal Copilot to Organizational Intelligence
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          FaultMaven 1.0 is your personal troubleshooting copilot—always available, always learning from your incidents.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          FaultMaven 2.0 (in development) extends this to your entire organization: shared knowledge bases, cross-team pattern detection, and AI that learns from every engineer&apos;s experience.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-8">
          Imagine: a new SRE joins your team and instantly has access to every troubleshooting pattern your organization has ever solved.
        </p>
        <Button asChild href="/roadmap" variant="secondary">
          Read the Roadmap →
        </Button>
      </div>
    </section>
  );
}
