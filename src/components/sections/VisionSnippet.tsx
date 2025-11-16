'use client';

import Button from '../ui/Button';

export default function VisionSnippet() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Your AI Copilot Today, Your Team&apos;s Collective Brain Tomorrow
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          FaultMaven 1.0 is your personal AI copilot today. FaultMaven 2.0 will be your team&apos;s collective intelligence—capturing, sharing, and amplifying expertise across your entire organization. <strong className="text-slate-700 dark:text-slate-300">Join our design partners in shaping this future.</strong>
        </p>
        <Button asChild href="/roadmap" variant="secondary">
          See Our Vision
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
    </section>
  );
}
