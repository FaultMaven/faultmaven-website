'use client';

export default function GettingStartedSection() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-6">
          How It Works
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          Get started in minutes—no complex setup or vendor lock-in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="flex">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">1</div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Install Browser Extension</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">Add FaultMaven to your browser in seconds. No system integration required.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">2</div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Share Context</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">Paste logs, upload files, or share your current page. You control what data to analyze.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">3</div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Get Insights & Resolve</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">Receive root cause hypotheses, actionable recommendations, and guided next steps.</p>
            </div>
          </div>
        </div>

        <p className="text-center text-lg font-semibold text-slate-700 dark:text-slate-300 mt-16">
          No vendor lock-in • No integration required • Start troubleshooting smarter, instantly
        </p>
      </div>
    </section>
  );
}
