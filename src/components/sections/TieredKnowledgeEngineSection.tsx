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
          <div className="space-y-2">
            {/* Personal Context - Top tier (narrowest) */}
            <div className="w-2/3 mx-auto">
              <div className="bg-green-500 border-2 border-green-400 rounded-lg p-6 transform transition-all hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    PERSONAL CONTEXT
                  </h3>
                </div>
                <p className="text-white/90 text-sm mb-3">
                  Your specific environment, configs, and preferences
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Local configurations</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Recent changes</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Your infrastructure</span>
                </div>
              </div>
            </div>

            {/* Team Knowledge - Middle tier */}
            <div className="w-5/6 mx-auto">
              <div className="bg-blue-500 border-2 border-blue-400 rounded-lg p-6 transform transition-all hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    TEAM KNOWLEDGE
                  </h3>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Cloud</span>
                </div>
                <p className="text-white/90 text-sm mb-3">
                  Indexed runbooks, past cases, and post-mortems
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Runbooks & SOPs</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Incident history</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Tribal knowledge</span>
                </div>
              </div>
            </div>

            {/* Global Intelligence - Bottom tier (widest) */}
            <div className="w-full">
              <div className="bg-slate-500 border-2 border-slate-400 rounded-lg p-6 transform transition-all hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    GLOBAL INTELLIGENCE
                  </h3>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Included</span>
                </div>
                <p className="text-white/90 text-sm mb-3">
                  Pre-loaded patterns for 50+ technology stacks
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Kubernetes</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Redis</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">AWS/GCP/Azure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow and Result */}
          <div className="text-center mt-8">
            <div className="text-slate-400 dark:text-slate-500 text-4xl mb-4">↓</div>
            <div className="bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-green-600 dark:text-green-400 font-mono text-sm">
                &quot;Based on your deployment manifest, a similar incident your team resolved last month, and known K8s OOMKill patterns...&quot;
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
