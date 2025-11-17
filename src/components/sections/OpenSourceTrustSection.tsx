'use client';

import { Shield, Eye, Code } from 'lucide-react';

export default function OpenSourceTrustSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Built on Open Source
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Trust is earned, not given. FaultMaven&apos;s core analysis engine is open source and auditable. We process data with a privacy-first architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Fully Auditable
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Every line of our core engine is public on GitHub. No black boxes, no proprietary lock-in. Review our code anytime.
            </p>
          </div>

          <div className="p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Privacy-First Architecture
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Sensitive data is sanitized before AI processing. Self-hosted deployments keep all data on your infrastructure.
            </p>
          </div>

          <div className="p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
              <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Apache 2.0 Licensed
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Use FaultMaven for anything—commercial, personal, or derivative. Standard-compliant and enterprise-ready.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Open Core, Enterprise Superset
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The open-source version contains the full single-user troubleshooting engine. Enterprise Cloud extends this foundation with multi-tenancy, team collaboration, SSO, and managed infrastructure—built on the same auditable codebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
