'use client';

export default function TieredKnowledgeEngineSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16">
          Intelligence That Grows With Every Incident
        </h2>

        {/* Visual: Three-tier pyramid */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-2 border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
            {/* Personal Context - Top tier */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-b-2 border-slate-300 dark:border-slate-700 p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                PERSONAL CONTEXT
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-base">
                Your specific infrastructure
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 italic">
                Your environment, configs, preferences
              </p>
            </div>

            {/* Team Knowledge - Middle tier */}
            <div className="bg-blue-100 dark:bg-blue-900/30 border-b-2 border-slate-300 dark:border-slate-700 p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                TEAM KNOWLEDGE
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-base">
                Institutional memory
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Runbooks, post-mortems, past cases
                <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-medium">
                  Enterprise
                </span>
              </p>
            </div>

            {/* Global Intelligence - Bottom tier */}
            <div className="bg-blue-200 dark:bg-blue-900/40 p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                GLOBAL INTELLIGENCE
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-base">
                Pre-loaded troubleshooting wisdom
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                K8s, Postgres, Redis, AWS patterns
                <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded text-xs font-medium">
                  Included
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            When you ask FaultMaven a question, it searches all three tiers—surfacing the most relevant context from global best practices, your team&apos;s documented solutions, and your specific environment.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
            The result: answers that work for <strong className="text-blue-600 dark:text-blue-400">YOUR</strong> infrastructure, not generic StackOverflow suggestions.
          </p>
        </div>
      </div>
    </section>
  );
}
