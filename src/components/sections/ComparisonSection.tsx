'use client';

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          FaultMaven vs. Generic AI
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center font-medium">
          ChatGPT is a great research assistant. It&apos;s a terrible SRE.
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
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Input</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Copy-paste snippets manually</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100">
                  Auto-ingest logs, files, metrics, configs*
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    *Automatically processes context you share (paste, upload, or page capture)
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Direction</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Answers the question you asked</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100">
                  Drives the investigation — names the single most decisive next step, and finds another route when you&apos;re blocked
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Context</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Training data only</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100">Your full stack (code + config + telemetry)</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Memory</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Forgets when you close the tab</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100">Persistent knowledge base (RAG)</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Learning</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Static</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100">Grows smarter with every resolved incident</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Security</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Data may train public models</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100">Air-gapped capable, data redaction built-in</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">Deployment</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400">Cloud-only</td>
                <td className="py-4 px-4 text-slate-900 dark:text-slate-100">Self-hosted or managed—your choice</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-center text-lg text-slate-700 dark:text-slate-300 font-medium">
            FaultMaven isn&apos;t a better chatbot. It&apos;s a different tool entirely.
          </p>
        </div>
      </div>
    </section>
  );
}
