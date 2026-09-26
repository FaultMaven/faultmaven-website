import { Section, SectionHeader } from '@/components/ui/Section';

const rows: { feature: string; generic: string; faultmaven: string | null }[] = [
  { feature: "Input", generic: "Copy-paste snippets manually", faultmaven: null },
  { feature: "Direction", generic: "Answers the question you asked", faultmaven: "Drives the investigation to the next decisive step" },
  { feature: "Certainty", generic: "Confidently guesses, even when wrong", faultmaven: "Won't present a root cause it can't back with evidence from your data — and drops a \"confirmed\" cause the moment a fix fails" },
  { feature: "Context", generic: "Training data only", faultmaven: "Your full stack (code + config + telemetry)" },
  { feature: "Memory", generic: "Forgets when you close the tab", faultmaven: "Persistent knowledge base (RAG)" },
  { feature: "Learning", generic: "Static", faultmaven: "Grows smarter with every resolved incident" },
  { feature: "Security", generic: "Data may train public models", faultmaven: "Self-hosted store on your own disk; optional PII redaction; never trains on your data" },
  { feature: "Deployment", generic: "Cloud-only", faultmaven: "Run it yourself, or let us run it for you — same engine" },
];

export default function ComparisonSection() {
  return (
    <Section tone="muted">
      <SectionHeader title="FaultMaven vs. Generic AI" lead="ChatGPT is a great research assistant. It's a terrible SRE." />

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
              <th scope="col" className="min-w-[150px] px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400">Generic LLMs (ChatGPT/Claude)</th>
              <th scope="col" className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">FaultMaven</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((r) => (
              <tr key={r.feature}>
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{r.feature}</th>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{r.generic}</td>
                <td className="px-6 py-4 text-slate-900 dark:text-slate-100">
                  {r.faultmaven ?? (
                    <>
                      Auto-ingest logs, files, metrics, configs*
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        *Automatically processes context you share (paste, upload, or page capture)
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center text-lg font-medium text-slate-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-slate-300">
        FaultMaven isn&apos;t a better chatbot. It&apos;s a different tool entirely.
      </p>
    </Section>
  );
}
