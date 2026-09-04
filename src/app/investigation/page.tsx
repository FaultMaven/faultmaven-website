import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import TranscriptTurn from '@/components/investigation/TranscriptTurn';
import { transcript } from '@/data/redisOomTranscript';

export const metadata: Metadata = {
  title: 'A real investigation, unedited',
  description:
    'The full transcript of FaultMaven working a Redis out-of-memory case: the data it was given, the diagnostics it asked for, the cause it found in the application source — and the four points where it refused to claim more than the evidence supported.',
  alternates: { canonical: '/investigation' },
  openGraph: {
    type: 'article',
    url: 'https://www.faultmaven.ai/investigation',
    title: 'A real investigation, unedited — FaultMaven',
    description:
      'A Redis OOM case worked end to end. Includes the moments FaultMaven declined to assert a cause, refused an unsafe fix, and closed the case without claiming it was resolved.',
  },
};

const RAW = '/transcripts/redis-oom-investigation.txt';

function Annotation({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="my-8 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 rounded-r-md px-5 py-4">
      <div className="text-[11px] uppercase tracking-wider font-bold text-amber-800 dark:text-amber-500 mb-1">
        {title}
      </div>
      <div className="text-[15px] text-slate-800 dark:text-slate-300 leading-relaxed">{children}</div>
    </aside>
  );
}

// Annotations keyed by the FaultMaven turn they follow.
const notes: Record<number, React.ReactNode> = {
  4: (
    <Annotation title="It has the symptom and still will not name a cause">
      Redis is at its ceiling with <code className="font-mono text-[0.9em]">noeviction</code>, and the
      obvious move is to blame the workload. Instead: <em>&ldquo;The logs do not identify which writer or
      key population is responsible for the buildup, so that remains unestablished.&rdquo;</em> It proposes a
      problem statement and asks for confirmation before investigating.
    </Annotation>
  ),
  6: (
    <Annotation title="The operator did not deliver, and it does not pretend otherwise">
      A model optimising for a smooth conversation would move on. This one holds the request open:{' '}
      <em>&ldquo;there is no new result to analyze and I won&rsquo;t treat the earlier diagnostic request as
      completed.&rdquo;</em>
    </Annotation>
  ),
  7: (
    <Annotation title="One sample is not the population">
      It now has a 12.9 MB key with <code className="font-mono text-[0.9em]">TTL -1</code> and a plausible
      story. It takes the finding and immediately bounds it: <em>&ldquo;the sample alone does not prove every
      one of the 853 keys lacks a TTL or that this is the sole contributor.&rdquo;</em> The next request is
      for a TTL distribution — the check that would actually settle it.
    </Annotation>
  ),
  8: (
    <Annotation title="It rates its own knowledge, and refuses the tempting fix">
      Switching to <code className="font-mono text-[0.9em]">allkeys-lru</code> would make the errors stop.
      It declines, because these keys are not provably disposable: changing eviction &ldquo;can evict data
      assumed durable.&rdquo; It also discloses the quality of its own source — <em>&ldquo;The KB source is
      marked draft&rdquo;</em> — rather than presenting retrieved guidance as settled fact.
    </Annotation>
  ),
  9: (
    <Annotation title="Cause found in the application source, not guessed from the symptom">
      The <code className="font-mono text-[0.9em]">FeatureWriter</code> code closes the chain: batch{' '}
      <code className="font-mono text-[0.9em]">MSET</code> and single{' '}
      <code className="font-mono text-[0.9em]">SET</code> with no TTL and no size guard, writing 8&ndash;15 MB
      values. Note the fix uses <code className="font-mono text-[0.9em]">&lt;approved_ttl&gt;</code> and{' '}
      <code className="font-mono text-[0.9em]">&lt;approved_max_bytes&gt;</code> as placeholders — it will not
      invent a retention policy that belongs to the data&rsquo;s owner — and it states blast radius and
      reversibility for every action it proposes.
    </Annotation>
  ),
};

export default function InvestigationPage() {
  const firstHalf = transcript.filter((e) => e.turn <= 10);
  const secondHalf = transcript.filter((e) => e.turn >= 17);

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Header */}
      <section className="pt-28 pb-10 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-700 dark:text-blue-400 mb-3">
            Transcript
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
            A real investigation, unedited
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Marketing copy can assert that a tool is methodical. It is cheaper to show you one working and
            let you judge. Below is a Redis out-of-memory case from start to close: the data it was handed,
            the diagnostics it asked for, the cause it found in the application source, and the fix it
            proposed.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            The most useful parts are the four points where it <em>refuses</em> — declining to name a cause
            on thin evidence, declining an eviction-policy change that would have silenced the errors, and
            declining seven times to call a mitigation verified without a post-fix measurement. It closes
            the case without claiming the problem was solved, because it wasn&rsquo;t.
          </p>
        </div>
      </section>

      {/* Provenance — stated before anything else */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider">
            Where this came from
          </h2>
          <div className="text-[15px] text-slate-700 dark:text-slate-400 space-y-3 leading-relaxed">
            <p>
              This is a scenario from the test harness I use to evaluate the engine, recorded 3 September
              2026. I want to be exact about what that means, because it changes how you should read it:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-slate-400">
              <li>
                <strong className="text-slate-900 dark:text-slate-200">Every FaultMaven response is
                verbatim.</strong> Nothing is rewritten, shortened, or cleaned up. The engine ran against
                the same knowledge pack that ships with the product.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-200">The operator side is scripted</strong> —
                a scenario persona, not a person typing. <code className="font-mono text-[0.9em]">cache-prod-01</code>{' '}
                is not a real host and the incident is constructed.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-200">Some pasted dumps are trimmed</strong>{' '}
                for page length. Each one says how many lines were cut, and the{' '}
                <a href={RAW} className="text-blue-600 dark:text-blue-400 hover:underline">
                  complete raw transcript
                </a>{' '}
                is here with nothing removed.
              </li>
            </ul>
            <p>
              So this shows you how FaultMaven reasons, not that it has been battle-tested on your stack.
              A constructed scenario is weaker evidence than your own incident — which is the argument for
              running it on one.
            </p>
          </div>
        </div>
      </section>

      {/* The case at a glance — table, not a card grid */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-5">The case at a glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border-collapse">
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {[
                  ['Reported problem', 'Redis rejecting writes with OOM; checkout and cart failing, reads fine'],
                  ['Red herring in play', 'maxmemory was already raised 8 GB → 12 GB and refilled immediately'],
                  ['Turns to the cause', '8 of 19'],
                  ['Cause', 'A recommendation-service writer storing 8–15 MB feature vectors with no TTL and no size guard'],
                  ['Evidence that settled it', 'Application source from the deployed tag — not the symptom, not the metrics'],
                  ['Final state', 'Closed with the cause documented and the fix unapplied — it would not claim resolution'],
                ].map(([k, v]) => (
                  <tr key={k as string}>
                    <td className="py-3 pr-6 align-top font-semibold text-slate-900 dark:text-slate-200 whitespace-nowrap w-[38%]">
                      {k}
                    </td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transcript */}
      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">The transcript</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-[15px]">
            Grey blocks are what the operator sent. Blue-ruled blocks are FaultMaven, verbatim, with the
            case status and any milestone it recorded on that turn. Amber notes are mine.
          </p>

          {firstHalf.map((entry, i) => (
            <div key={`${entry.kind}-${entry.turn}-${i}`}>
              <TranscriptTurn entry={entry} />
              {entry.kind === 'fm' ? notes[entry.turn] ?? null : null}
            </div>
          ))}

          {/* Elision marker */}
          <div className="my-10 rounded-md border border-dashed border-slate-400 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-5 py-4">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-2">
              Turns 11–16 omitted
            </div>
            <p className="text-[15px] text-slate-700 dark:text-slate-400 leading-relaxed">
              Six turns in which the operator proposes and then applies an emergency mitigation — scaling the
              recommendation service to zero — and repeatedly cannot produce a post-mitigation measurement.
              They are omitted because they repeat, but the repetition is the point:{' '}
              <strong className="text-slate-900 dark:text-slate-200">
                across all six, FaultMaven declines to mark the mitigation verified
              </strong>
              , each time naming the one measurement that would settle it. On turn 14 it draws the
              distinction most tools blur:{' '}
              <em>
                &ldquo;<code className="font-mono text-[0.9em]">OK</code> from the probe only proves Redis
                can accept that small write; it does not prove the checkout path has recovered.&rdquo;
              </em>{' '}
              They are in the{' '}
              <a href={RAW} className="text-blue-600 dark:text-blue-400 hover:underline">
                raw transcript
              </a>
              .
            </p>
          </div>

          {secondHalf.map((entry, i) => (
            <div key={`${entry.kind}-${entry.turn}-b${i}`}>
              <TranscriptTurn entry={entry} />
            </div>
          ))}
        </div>
      </section>

      {/* Closing read */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-5">
            What the transcript is evidence of
          </h2>
          <div className="space-y-4 text-[15px] text-slate-700 dark:text-slate-400 leading-relaxed">
            <p>
              <strong className="text-slate-900 dark:text-slate-200">It found the cause in code, not in
              the symptom.</strong> The memory numbers, the eviction policy and the error strings all
              describe the failure. None of them explain it. The explanation was a{' '}
              <code className="font-mono text-[0.9em]">write_batch()</code> that never set a TTL, and the
              investigation only got there because it kept asking for the next distinguishing piece of
              evidence rather than concluding from the first plausible one.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-200">It reads its own knowledge
              critically.</strong> The runbook it retrieved — <em>Redis Out of Memory (maxmemory
              exceeded)</em> — ships in the bundled pack, and the cause it matched is that runbook&rsquo;s
              &ldquo;unbounded key growth from missing TTLs&rdquo;. It still told the operator the source was
              marked draft, and it still declined the eviction change the runbook describes, because this
              workload did not satisfy the precondition.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-200">It never touched anything.</strong>{' '}
              FaultMaven had no access to <code className="font-mono text-[0.9em]">cache-prod-01</code>. It
              asked for read-only commands, and every state-changing action was proposed for a human to run,
              with its blast radius and reversibility stated first. That is the design, not a limitation of
              this scenario.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-200">It ended the case honestly.</strong>{' '}
              The permanent fix was a code change in another team&rsquo;s service. It could not be applied in
              the session, so the case closed documented-but-unresolved rather than dressed up as a win. A
              tool that can only report success is not one you can trust at 3 a.m.
            </p>
          </div>
        </div>
      </section>

      {/* Next step */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Run it on a problem of your own
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto text-[15px] leading-relaxed">
            A constructed scenario only tells you so much. Standalone is free and self-hosted: one command,
            and budget 10&ndash;20 minutes for the first run, most of it pulling a 2.3 GB image that carries
            its own embedding model so it works offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary">
              Self-host it, free →
            </Button>
            <Button asChild href={RAW} variant="secondary">
              Read the raw transcript
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Prefer we run it?{' '}
            <Link href="/waitlist" className="text-blue-600 dark:text-blue-400 hover:underline">
              Join the Cloud beta waitlist
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
