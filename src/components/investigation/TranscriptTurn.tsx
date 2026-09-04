import React from 'react';
import type { TranscriptEntry } from '@/data/redisOomTranscript';

// FaultMaven emits light markdown: **bold**, `code`, and fenced blocks. It is
// rendered here without dangerouslySetInnerHTML, so the transcript stays exactly
// what the engine produced and nothing inside it can become markup.
function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) {
      nodes.push(
        <strong key={`${keyBase}-b${i}`} className="font-semibold text-slate-900 dark:text-slate-100">
          {tok.slice(2, -2)}
        </strong>
      );
    } else {
      nodes.push(
        <code
          key={`${keyBase}-c${i}`}
          className="font-mono text-[0.86em] bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded px-1 py-0.5"
        >
          {tok.slice(1, -1)}
        </code>
      );
    }
    last = m.index + tok.length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderBody(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const parts = text.split(/```(?:[a-zA-Z]*)\n?/);
  parts.forEach((part, idx) => {
    if (!part.trim()) return;
    if (idx % 2 === 1) {
      out.push(
        <pre
          key={`code-${idx}`}
          className="my-4 overflow-x-auto rounded-md bg-slate-900 dark:bg-slate-950 border border-slate-700 p-4"
        >
          <code className="font-mono text-[13px] leading-relaxed text-slate-100 whitespace-pre">
            {part.replace(/\n$/, '')}
          </code>
        </pre>
      );
      return;
    }
    part
      .split(/\n{2,}/)
      .filter((p) => p.trim())
      .forEach((para, pIdx) => {
        out.push(
          <p key={`p-${idx}-${pIdx}`} className="mb-3 last:mb-0 leading-relaxed">
            {renderInline(para.trim(), `p-${idx}-${pIdx}`)}
          </p>
        );
      });
  });
  return out;
}

export default function TranscriptTurn({ entry }: { entry: TranscriptEntry }) {
  if (entry.kind === 'op') {
    return (
      <div className="mb-6">
        <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-2">
          {entry.label ?? 'Operator'} · turn {entry.turn}
        </div>
        {entry.mono ? (
          <pre className="overflow-x-auto rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-4">
            <code className="font-mono text-[12.5px] leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre">
              {entry.text}
            </code>
          </pre>
        ) : (
          <div className="rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-4 text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
            {entry.text}
          </div>
        )}
        {entry.truncated ? (
          <div className="mt-2 text-xs text-slate-500 font-mono">
            … {entry.truncated} more lines, trimmed for length — full output in the raw transcript
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-8 border-l-2 border-blue-500 dark:border-blue-600 pl-5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-700 dark:text-blue-400">
          FaultMaven · turn {entry.turn}
        </span>
        {entry.status ? (
          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            case_status={entry.status}
          </span>
        ) : null}
        {entry.milestones?.map((m) => (
          <span
            key={m}
            className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400"
          >
            {m}
          </span>
        ))}
      </div>
      <div className="text-[15px] text-slate-700 dark:text-slate-300">{renderBody(entry.text)}</div>
    </div>
  );
}
