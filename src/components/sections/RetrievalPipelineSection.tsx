import Link from 'next/link';

const REPO = 'https://github.com/FaultMaven/faultmaven/blob/main';
const STORE = `${REPO}/faultmaven/infrastructure/knowledge/knowledge_vector_store.py`;
const CHUNKER = `${REPO}/faultmaven/modules/knowledge/domain/services/content_chunker.py`;

const stages = [
  {
    n: '01',
    title: 'Chunk on structure, never on token counts',
    body: (
      <>
        Documents split at markdown headings (<code>H1</code>–<code>H4</code>) and horizontal rules, not
        at fixed windows. Chunk length therefore varies from 100 to 3,000 characters on purpose: a config
        parameter description and a remediation procedure are not the same size, and cutting mid-procedure
        loses the command, the flag, or the verification step — exactly the parts that made it a runbook.
        Documents that fail structural validation are not indexed at all.
      </>
    ),
    code: 'HEADER_SPLIT_BOUNDARY_RE = re.compile(r"\\n(?=#{1,4}\\s+\\S)")\nMAX_CHUNK_CHARS = 3000\nMIN_CHUNK_CHARS = 100',
    href: CHUNKER,
  },
  {
    n: '02',
    title: 'Recall on two arms, because embeddings blur identifiers',
    body: (
      <>
        A dense arm (BGE-M3, 1024 dimensions, cosine) runs in parallel with keyword-constrained recall that
        requires extracted identifier tokens to appear <em>verbatim</em> in the chunk. To an embedding,{' '}
        <code>ERR-1042</code> and <code>ERR-1024</code> are near neighbours. To a diagnosis they are
        different planets. Engineers paste identifiers, so the highest-signal part of the query is precisely
        what a pure vector search handles worst.
      </>
    ),
    href: STORE,
  },
  {
    n: '03',
    title: 'Rerank on four signals, weighted by the shape of the query',
    body: (
      <>
        Candidates are scored on a blend, and the blend shifts when the query contains identifier-like
        tokens — error codes, CamelCase names, dotted paths — detected with a handful of regexes. Term
        overlap is IDF-weighted, so a word that appears in 84 of 1,297 chunks counts for less than one that
        appears in 11.
      </>
    ),
    table: true,
    href: STORE,
  },
  {
    n: '04',
    title: 'Carry trust signals into the answer',
    body: (
      <>
        Lifecycle status travels with the chunk rather than stopping at the ranker: verified, in-review,
        draft, stale, deprecated, with staleness decaying as{' '}
        <code>1 / (1 + days/365)</code>. That is why, in the{' '}
        <Link href="/investigation" className="text-blue-600 dark:text-blue-400 hover:underline">
          published transcript
        </Link>
        , the engine told the operator its own retrieved runbook was marked draft instead of presenting it
        as settled. Procedures are relayed verbatim, not summarised — a summarised runbook has lost the
        command.
      </>
    ),
  },
  {
    n: '05',
    title: 'Retrieved knowledge never becomes evidence',
    body: (
      <>
        This boundary is treated as inviolable. What a runbook says <em>might</em> be true is a prior. What
        the logs say <em>is</em> happening is fact. A system that lets a runbook&rsquo;s hypothetical leak
        into its account of observed reality is manufacturing evidence, and everything downstream of that is
        contaminated.
      </>
    ),
  },
];

const weights = [
  ['Vector similarity', '0.40', '0.25'],
  ['Term overlap (IDF-weighted)', '0.25', '0.40'],
  ['Metadata match (domain / service)', '0.20', '0.20'],
  ['Freshness', '0.15', '0.15'],
];

export default function RetrievalPipelineSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          What actually happens when you ask
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
          Start with a question, not necessarily a crisis. Share a log or point FaultMaven at a dashboard and
          ask whether anything looks off; when something real surfaces it shifts from that inquiry into a
          full investigation. Underneath, retrieval is not &ldquo;search the docs and hope&rdquo;. It is five
          stages, and the constants below are the ones in the shipped code.
        </p>

        <div className="mt-14 space-y-12">
          {stages.map((s) => (
            <div key={s.n} className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-7">
              <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 pt-1 tabular-nums">
                {s.n}
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-5 md:pl-7 -ml-px pb-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed [&_code]:font-mono [&_code]:text-[0.87em] [&_code]:bg-slate-100 [&_code]:dark:bg-slate-800 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded">
                  {s.body}
                </p>

                {s.code ? (
                  <pre className="mt-4 overflow-x-auto rounded-md bg-slate-900 dark:bg-slate-950 border border-slate-700 p-4">
                    <code className="font-mono text-[12.5px] leading-relaxed text-slate-100 whitespace-pre">
                      {s.code}
                    </code>
                  </pre>
                ) : null}

                {s.table ? (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-slate-300 dark:border-slate-700">
                          <th className="text-left font-semibold text-slate-700 dark:text-slate-300 py-2 pr-4">
                            Signal
                          </th>
                          <th className="text-right font-semibold text-slate-700 dark:text-slate-300 py-2 px-3 whitespace-nowrap">
                            Prose query
                          </th>
                          <th className="text-right font-semibold text-slate-700 dark:text-slate-300 py-2 pl-3 whitespace-nowrap">
                            Identifier query
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {weights.map(([sig, a, b]) => (
                          <tr key={sig}>
                            <td className="py-2 pr-4 text-slate-600 dark:text-slate-400">{sig}</td>
                            <td className="py-2 px-3 text-right font-mono tabular-nums text-slate-700 dark:text-slate-300">
                              {a}
                            </td>
                            <td className="py-2 pl-3 text-right font-mono tabular-nums text-slate-900 dark:text-slate-100 font-semibold">
                              {b}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {s.href ? (
                  <a
                    href={s.href}
                    className="inline-block mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Read the source &rarr;
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-200 dark:border-slate-800 pt-6 text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
          <p>
            One precision, since the distinction matters to anyone who has built this: the lexical arm is a
            contains-gate plus IDF-weighted term overlap, not true BM25 with term-frequency statistics — the
            vector store does not expose them. It captures most of the value, which is refusing to lose exact
            identifiers. A real BM25 index is still on the list. The full argument is in{' '}
            <Link
              href="/blog/rag-for-troubleshooting-knowledge"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              RAG for troubleshooting knowledge
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
