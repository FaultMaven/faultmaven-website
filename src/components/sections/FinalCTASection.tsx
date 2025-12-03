'use client';

import Button from '../ui/Button';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
          Ready to Fix Faster?
        </h2>

        {/* Primary Path */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 text-center">
              Deploy FaultMaven in 5 Minutes
            </h3>
            <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-lg mb-6 font-mono text-sm text-slate-100 overflow-x-auto">
              <code>
                git clone https://github.com/FaultMaven/faultmaven-deploy.git<br />
                cd faultmaven-deploy && ./faultmaven start
              </code>
            </div>
            <div className="text-center">
              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="text-lg px-8">
                Full Deployment Guide →
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Need Team Features?
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              SSO, shared knowledge bases, managed infrastructure.
            </p>
            <Button asChild href="/contact" variant="secondary" className="w-full">
              Request Enterprise Access
            </Button>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Want to Contribute?
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              FaultMaven is open source. We welcome PRs.
            </p>
            <Button asChild href="https://github.com/FaultMaven/faultmaven" variant="secondary" className="w-full">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
