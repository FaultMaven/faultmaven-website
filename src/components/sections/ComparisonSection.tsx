'use client';

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          FaultMaven vs. Generic AI
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
          Generic AI assistants are powerful for general questions, but FaultMaven is built specifically for troubleshooting your infrastructure.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-slate-100 min-w-[150px]">Feature</th>
                <th className="text-left py-4 px-4 font-semibold text-slate-500 dark:text-slate-400">Generic LLMs (ChatGPT/Claude)</th>
                <th className="text-left py-4 px-4 font-semibold text-blue-600 dark:text-blue-400">FaultMaven</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Input Method</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Manual copy-paste of isolated snippets</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100"><strong>Auto-ingestion</strong>: Reads logs, files, and metrics from source</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Context Awareness</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Text-only: Sees only what you paste in the current window</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100"><strong>System-aware</strong>: Correlates error logs with config files and topology</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Knowledge Source</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Public internet: Trained on StackOverflow/GitHub data</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100"><strong>Institutional memory</strong>: Indexes your runbooks, docs, and past incidents</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Data Residency</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Cloud-only: Data must leave your perimeter</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100"><strong>Self-hosted</strong>: Can run 100% air-gapped with local LLMs</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Memory</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Ephemeral (resets every chat)</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100"><strong>Persistent</strong>: Remembers architecture and past resolutions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-center text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">The bottom line:</strong> FaultMaven is built from the ground up to understand your infrastructure, retain your team&apos;s knowledge, and never forget. Generic AI starts from scratch every time.
          </p>
        </div>
      </div>
    </section>
  );
}
