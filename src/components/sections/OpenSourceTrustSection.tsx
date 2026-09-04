'use client';

import { Shield, Eye, Code } from 'lucide-react';

export default function OpenSourceTrustSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Source-Available. Auditable. Yours to Run.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We don&apos;t ask for trust—we show you the code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Every Line is Public
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Every line of the core troubleshooting engine is public on GitHub — fair source, not a black box. No proprietary lock-in. Fork it, audit it, extend it.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.shields.io/github/last-commit/FaultMaven/faultmaven?style=flat-square&color=blue" alt="Date of the most recent commit to the FaultMaven engine" className="h-5" />
            </div>
            <a href="https://github.com/FaultMaven/faultmaven" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
              View on GitHub →
            </a>
          </div>

          <div className="p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Your Data Stays Yours
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Self-hosted means your logs, configs, and knowledge base never leave your infrastructure. Air-gapped deployments supported with local LLMs. And because the Copilot runs client-side in your browser, FaultMaven never asks for production API keys or root credentials. It holds the flashlight and reads the manuals; you fix the plumbing.
            </p>
          </div>

          <div className="p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
              <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Fair-Source Licensed (FSL-1.1-ALv2)
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Run FaultMaven in your business, modify it for your needs, and audit every line. Each release converts to Apache 2.0 two years after it ships — the same fair-source model used by Sentry.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
