'use client';

import {
  IconBellSlash,
  IconDocumentMinus,
  IconLoop,
} from '@/components/icons/homepage';

export default function ProblemSection() {
  return (
    <section className="py-32 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
          Three Gaps Between the Alert and the Fix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconLoop className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Your Observability Stack Tells You What. Not Why.
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 text-left">
              Dashboards light up red. Alerts fire. You know something is broken—but you&apos;re still manually hunting through logs, correlating timestamps, and guessing at root cause.
            </p>
          </div>
          <div className="p-10 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconBellSlash className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Generic AI Doesn&apos;t Know Your Systems
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 text-left">
              ChatGPT can explain a stack trace. It can&apos;t see your Kubernetes configs, your deployment history, or the fix your teammate applied last month. Every incident starts from zero.
            </p>
          </div>
          <div className="p-10 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-200">
            <IconDocumentMinus className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Tribal Knowledge Disappears
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 text-left">
              The senior engineer who knew why that service fails under load? They left. Their expertise is buried in Slack threads nobody will ever find.
            </p>
          </div>
        </div>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mt-16 max-w-3xl mx-auto">
          FaultMaven is the ER surgeon for systems already on the table — not the predictive AIOps platform forecasting next quarter&apos;s failures. It injects deep context into AI reasoning so you get answers that actually work for <strong className="text-slate-700 dark:text-slate-300">YOUR</strong> system.
        </p>
      </div>
    </section>
  );
}
