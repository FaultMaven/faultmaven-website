import Link from 'next/link';
import { codeBlockClass } from '@/components/ui/card';
import { Section, SectionHeader, type SectionTone, textLinkClass } from '@/components/ui/Section';

const REPO = 'https://github.com/FaultMaven/faultmaven/blob/main';
const STORE = `${REPO}/faultmaven/infrastructure/knowledge/knowledge_vector_store.py`;
const CHUNKER = `${REPO}/faultmaven/modules/knowledge/domain/services/content_chunker.py`;
const KB_TOOL = `${REPO}/faultmaven/modules/agent/tools/kb_configs/unified_kb_config.py`;

// Every claim below is checked against the engine's main branch: the constants
// and weights are copied from the linked files, and the 84-of-1,297 figure is
// the measurement recorded beside IDENTIFIER_DF_RATIO in the vector store.

const stages = [
  {
    n: '01',
    title: 'Chunk on structure, never on token counts',
    body: (
      <>
        Documents split at markdown headings (<code>H1</code>–<code>H4</code>), or at horizontal rules in a
        document without headings, never at fixed windows. Chunk length therefore varies on purpose, from
        100 to 3,000 characters: shorter sections merge into a neighbour and longer ones split at line
        breaks. A config parameter description and a remediation procedure are not the same size, and
        cutting mid-procedure loses the command, the flag, or the verification step — exactly the parts
        that made it a runbook. A runbook that fails structural validation is refused at upload, so it is
        never indexed.
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
        Every investigation searches the knowledge base on two arms: a dense arm (BGE-M3, 1024 dimensions,
        cosine) alongside keyword-constrained recall that requires the query&rsquo;s most distinctive terms to
        appear in the chunk <em>as written</em>, ignoring case. To an embedding,{' '}
        <code>ERR-1042</code> and <code>ERR-1024</code> are near neighbours. To a diagnosis they are
        different planets. Engineers paste identifiers, so the highest-signal part of the query is precisely
        what a pure vector search handles worst.
      </>
    ),
    href: STORE,
  },
  {
    n: '03',
    title: 'Rerank on four signals, weighted by how specific the query is',
    body: (
      <>
        Candidates are scored on a blend, and the blend shifts toward term overlap when the query names
        something rare in the knowledge base: a term found in at most 2% of its chunks. Rarity catches what
        spelling rules miss — <code>enospc</code> and <code>libvirt</code> look like ordinary words but
        discriminate hardest — and the shape patterns for error codes, CamelCase names and dotted paths are
        only the fallback when those statistics are unavailable. Term overlap is IDF-weighted too: on the
        shipped pack, a word that appears in 84 of 1,297 chunks counts for less than one that appears in 11.
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
        When FaultMaven queries its knowledge base, each chunk carries its lifecycle status — verified,
        in-review, draft, stale, deprecated — into the answer, and the answer has to say when a runbook is
        draft or deprecated. Status and age also count in the ranking, with freshness decaying as{' '}
        <code>1 / (1 + days/365)</code>. That is why, in the{' '}
        <Link href="/investigation" className={textLinkClass}>
          published transcript
        </Link>
        , the engine told the operator the runbook it found was a draft instead of presenting it as
        settled. The answer is also told to keep procedures whole — every command and step — rather than
        summarise them, because a summarised runbook has lost the command.
      </>
    ),
    href: KB_TOOL,
  },
  {
    n: '05',
    title: 'Retrieved knowledge never becomes evidence',
    body: (
      <>
        This boundary is treated as inviolable, and the engine&rsquo;s instructions draw it explicitly: only
        data the user submitted is recorded as evidence, and nothing from the knowledge base, a web search or
        the model&rsquo;s own training ever is. What a runbook says <em>might</em> be true is a prior. What
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
  ['Metadata match (domain, service, status)', '0.20', '0.20'],
  ['Freshness', '0.15', '0.15'],
];

export default function RetrievalPipelineSection({ tone = 'muted' }: { tone?: SectionTone } = {}) {
  // scroll-mt clears the sticky header when /product#retrieval is opened.
  return (
    <Section id="retrieval" tone={tone} width="narrow" className="scroll-mt-16">
      <SectionHeader
        align="left"
        title="What actually happens when you ask"
        lead={
          <p>
            Start with a question, not necessarily a crisis. Share a log or point FaultMaven at a dashboard and
            ask whether anything looks off; when something real surfaces it shifts from that inquiry into a
            full investigation. Underneath, retrieval is not &ldquo;search the docs and hope&rdquo;. It is five
            stages, and the constants below are the ones in the shipped code.
          </p>
        }
      />

      <div className="space-y-12">
        {stages.map((s) => (
          <div key={s.n} className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-7">
            <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 pt-1 tabular-nums">
              {s.n}
            </div>
            <div className="border-l border-slate-200 dark:border-slate-800 pl-5 md:pl-7 -ml-px pb-2">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{s.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed [&_code]:font-mono [&_code]:text-[0.87em] [&_code]:bg-white [&_code]:border [&_code]:border-slate-200 [&_code]:dark:bg-slate-800 [&_code]:dark:border-slate-700 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded">
                {s.body}
              </p>

              {s.code ? (
                <pre className={`mt-4 ${codeBlockClass}`}>
                  <code className="whitespace-pre">{s.code}</code>
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
          identifiers. What BM25 would add on top — weighting repeated terms and normalising for chunk length —
          is unproven here, so there is no separate BM25 index. The full argument is in{' '}
          <Link
            href="/blog/rag-for-troubleshooting-knowledge"
            className={textLinkClass}
          >
            RAG for troubleshooting knowledge
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
