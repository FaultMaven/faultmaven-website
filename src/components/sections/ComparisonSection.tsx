'use client';

import { Check, X } from 'lucide-react';

const comparisons = [
  {
    feature: 'Built for Operations',
    faultmaven: true,
    generic: false,
    description: 'Purpose-built for SRE workflows, not general chat'
  },
  {
    feature: 'Incident-Aware Context',
    faultmaven: true,
    generic: false,
    description: 'Understands logs, metrics, and operational patterns'
  },
  {
    feature: 'Knowledge Retention',
    faultmaven: true,
    generic: false,
    description: 'Stores and retrieves your team\'s runbooks and solutions'
  },
  {
    feature: 'Zero Integration Setup',
    faultmaven: true,
    generic: true,
    description: 'Browser extension—works immediately'
  },
  {
    feature: 'Root Cause Analysis',
    faultmaven: true,
    generic: false,
    description: 'Specialized diagnostics, not just text generation'
  },
  {
    feature: 'Compliance & Audit Trails',
    faultmaven: true,
    generic: false,
    description: 'Built-in tracking for regulated environments'
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          Why Not Just Use ChatGPT or Claude?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
          Generic AI assistants are powerful, but they weren&apos;t designed for operational troubleshooting. Here&apos;s what makes FaultMaven different:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-slate-100">Capability</th>
                <th className="text-center py-4 px-4 font-semibold text-blue-600 dark:text-blue-400">FaultMaven</th>
                <th className="text-center py-4 px-4 font-semibold text-slate-500 dark:text-slate-400">Generic AI</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-medium text-slate-900 dark:text-slate-100 mb-1">{item.feature}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{item.description}</div>
                  </td>
                  <td className="text-center py-4 px-4">
                    {item.faultmaven ? (
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 dark:text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {item.generic ? (
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 dark:text-red-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-center text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">The bottom line:</strong> While you can copy-paste logs into ChatGPT, FaultMaven is built from the ground up to understand operational context, retain your team&apos;s knowledge, and integrate with your workflow—not replace it.
          </p>
        </div>
      </div>
    </section>
  );
}
