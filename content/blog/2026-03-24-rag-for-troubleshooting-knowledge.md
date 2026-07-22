---
title: "Semantic Similarity Is Not Diagnostic Relevance: RAG for Troubleshooting Knowledge"
date: "2026-03-24"
description: "Why wiring your runbooks into a vector database produces plausible-but-wrong answers during incidents, and what retrieval built for troubleshooting has to do differently: cause-structured chunks, lexical signals for exact identifiers, and grounded synthesis."
tags: ["rag", "sre", "troubleshooting", "knowledge-management", "reliability"]
author: "The FaultMaven Team"
status: "draft"
---

The demo works great. You point an embedding pipeline at your wiki and your runbooks, stand up a vector database, wire it to an LLM, and ask it a question from last quarter's incident review. The answer is fluent, cites a real document, and arrives in two seconds. You ship it.

Three weeks later someone asks it "why are the API pods crash-looping?" during an actual incident. The answer is still fluent. It's also assembled from a fragment of a runbook that was deprecated after the Kubernetes 1.27 upgrade, a remediation step ripped away from the paragraph that said when it applies, and two sentences about a different service that happens to fail in similar-sounding ways. Every chunk was genuinely similar to the query. None of it was safe to act on.

This is the standard failure mode of naive RAG on operational knowledge, and it comes from a single wrong assumption: that semantic similarity is the same thing as diagnostic relevance. It isn't. Similarity asks "does this text talk about the same things as the query?" Diagnosis asks "does this text apply to this system, in this state, right now?" Those questions come apart constantly in operations, and when they come apart mid-incident, the cost isn't a mediocre answer — it's an engineer running a command in the wrong context at the worst possible time.

We spent a long time on this problem while building the knowledge system behind FaultMaven. This post is about what we learned: why generic RAG pipelines degrade specifically on runbooks, incident history, and logs, and what retrieval has to do differently when the reader is an on-call engineer rather than a curious chatbot user.

## Three ways similarity betrays you

The failures aren't random. They cluster into three patterns, and each one is worth recognizing because each has a different fix.

**Stale text embeds identically to current text.** An embedding model has no concept of deprecation. The runbook you wrote for the old ingress controller and the one you wrote for its replacement discuss the same symptoms in the same vocabulary, so they land next to each other in vector space — and the outdated one may well score higher, because older documents tend to be longer and more detailed. Nothing in cosine similarity encodes "we stopped doing it this way in March."

**Chunking severs steps from their preconditions.** Most pipelines split documents into fixed-size windows — some number of tokens, with overlap. Operational documents are uniquely hostile to this. A runbook is full of statements like "if replication lag exceeds 30 seconds *and* the primary is healthy, fail over" — where the conditional and the action might sit 900 characters apart, on opposite sides of an arbitrary chunk boundary. The retriever returns the chunk with the failover command. The precondition lives in a chunk that didn't match. For prose, a lost precondition means a slightly degraded summary. For a runbook, it means an instruction that is actively dangerous outside the context that scoped it.

**Adjacent services fail in similar words.** "Connection pool exhausted," "readiness probe failing," "queue depth climbing" — the vocabulary of failure is small and shared. Prose about your payments service and prose about your notifications service can be near-neighbors in embedding space while being useless or misleading for each other. Similarity has no notion of *which system* the text governs.

Notice that none of these are LLM problems. The synthesis model at the end of the pipeline is usually doing a competent job with what it was handed. The failure is upstream: retrieval handed it the wrong material, convincingly packaged.

## Fix the documents before you fix the retriever

The tempting move is to reach for a better retriever — a reranking model, a bigger embedding model, query expansion. We'd argue the highest-return fix is earlier: **operational knowledge has structure, and the pipeline should refuse to destroy it.**

A troubleshooting document is not an essay. It has a natural atomic unit, and it isn't the paragraph or the 512-token window. It's the *cause*: one candidate explanation for a failure, together with everything an engineer needs to act on it —

- the **symptom** as it actually presents (the alert name, the exact error string, the metric pattern),
- the **cause statement** — what is going wrong, phrased at the level of observable evidence,
- the **verification** — how to confirm this cause and not its siblings,
- the **remediation** — the fix, with its preconditions and a check that it worked.

If retrieval returns that whole unit, the engineer (or the model) gets something actionable and self-contained. If retrieval returns a fragment of it, you get the precondition-severing failure above. So the design rule we converged on: **chunk at the boundaries the author drew, and write documents so those boundaries contain complete cause→fix units.**

Concretely, FaultMaven's knowledge base ingests runbooks with structure-aware chunking — splits happen at markdown headers, not at character counts — and the runbook template is built so that each cause subsection is one chunk. A cause section looks roughly like this:

```markdown
### Cause A: Idle transactions exhausting the pool
**Statement:** Sessions in `idle in transaction` hold connection
slots indefinitely, exhausting `max_connections` under steady churn.
**Indicators:**
- [Step 2] sessions idle-in-transaction older than 30 minutes present
- [Step 1] active connections > 80% of max_connections
**Interventions:**
- **remediation:** bound idle-in-transaction lifetime:
  `ALTER SYSTEM SET idle_in_transaction_session_timeout = '30s';`
  **Verification:** re-run Step 2; old sessions no longer accumulate.
- **mitigation:** terminate the oldest idle sessions to free slots now.
  **Risk:** may roll back in-flight transactions.
```

Whatever template you use, the properties that matter are transferable:

- **One runbook, one failure mode.** "Everything about PostgreSQL" documents retrieve badly — only a small section matches any query, but the whole document competes for rank. Atomic scope means the entire retrieved document is relevant.
- **Sibling causes must be tellable-apart from evidence.** If two candidate causes can't be distinguished by anything observable, the reader can't discriminate between them and neither can a model. Write the observable difference into each cause.
- **Statements at symptom level.** "The pool is saturated by genuinely active queries, with no idle-in-transaction sessions present" matches what an engineer actually sees; "operationState.phase is Failed" matches an API nobody pastes into a question.
- **Interventions carry their own verification.** A fix without a "how do you know it worked" step leaves the loop open at exactly the moment it must close.

There's a real cost here, and we won't pretend otherwise: this pushes work onto authors. You cannot dump a wiki export into this pipeline and get these guarantees — structure has to be written, or generated and then reviewed. Our position is that for remediation knowledge this trade is simply correct. A wrong answer from a search engine wastes minutes; a wrong remediation taken during an incident can extend it. Quality enforced at the ingestion gate is far cheaper than quality debugged out of an investigation later, so documents that fail structural validation don't get indexed at all.

## Ops queries are full of tokens embeddings blur

The second divergence from generic RAG is the shape of the queries. Engineers don't ask storybook questions. They paste `CrashLoopBackOff`. They ask about `ERR-1042`, `idle_in_transaction_session_timeout`, `java.lang.OutOfMemoryError`. These identifiers are the highest-signal part of the query — and they're precisely what dense embeddings handle worst. An embedding squeezes an exact token into a general semantic neighborhood: `ERR-1042` and `ERR-1024` end up nearly indistinguishable, though for diagnosis they might as well be different planets.

The established answer is hybrid retrieval: run a lexical arm (classically BM25) alongside the dense arm, so exact-token matches can't be blurred away. We do a variant of this — candidate recall runs a pure vector search in parallel with keyword-constrained searches that *require* extracted identifier tokens to appear verbatim in the chunk, and a reranking stage then scores candidates on several signals at once: vector similarity, term overlap, metadata alignment with the case, and freshness. (Honest footnote: our lexical arm is a binary contains-gate plus term-overlap scoring, not true BM25 with term-frequency statistics — our vector store doesn't expose one. It captures most of the value, which is simply refusing to lose exact identifiers; a real BM25 index remains on our list.)

One refinement earned its keep more than we expected: **the blend should depend on the query.** "Why is checkout slow since the cache deploy?" is a semantic question — the dense arm should dominate. A pasted `CrashLoopBackOff` is a lexical question — exact match should dominate. Detecting identifier-like tokens (error codes, CamelCase names, dotted paths) with a handful of regexes and shifting weight toward lexical overlap when they're present costs nothing and fixes a whole class of misses. No learned model required.

Metadata does the remaining discrimination that embeddings can't. Every chunk carries its taxonomy — domain, service, symptom class, lifecycle status, last-updated date — and retrieval scores candidates against what the investigation already knows. If the case has established that the affected service is PostgreSQL, a PostgreSQL runbook outranks a semantically similar Kafka one *because of that fact*, not because the prose competed better. This is also where troubleshooting retrieval has an advantage generic RAG lacks: an investigation accumulates context — affected services, verified symptoms, a timeline — and every accumulated fact is a retrieval filter you didn't have to ask the user for.

## Retrieved is not the same as trustworthy

Getting the right chunk to the model is necessary and still not sufficient. Two rules govern what happens next.

**Carry the document's trust signals all the way to the reader.** Knowledge decays — commands change, dashboards get renamed. Our lifecycle metadata (verified, stale, deprecated) doesn't just influence ranking; it travels *into the synthesis context*, so a chunk that hasn't been touched in eight months arrives prefixed with a staleness warning, and the model is instructed to surface that warning rather than smooth it over. A confident answer synthesized from a stale runbook is worse than a hedged one, because the confident one gets acted on.

**Relay procedures; don't summarize them.** LLMs compress by default, and compression is exactly wrong for remediation content. A summarized runbook — "consider adjusting the timeout settings" — has lost the command, the flag, and the verification step: everything that made it a runbook. Our synthesis prompts push in the opposite direction: preserve diagnostic steps, commands, and resolution procedures verbatim; compress background only; cite the source runbook by name so the engineer can open the real document before acting. And one boundary we treat as inviolable: retrieved knowledge never becomes *evidence*. What the KB says might be wrong is a prior; what the logs say is happening is fact. An assistant that lets a runbook's hypothetical leak into its account of observed reality is manufacturing evidence, and everything downstream of that is contaminated.

## The takeaway

If you're building — or debugging — RAG over operational knowledge, the shift that matters is this: **stop optimizing for "find similar text" and start optimizing for "return a complete, current, verifiable unit of action."** In practice, four moves carry most of the weight, and each is testable on its own:

1. Chunk on document structure, never on token counts — and restructure documents so each chunk is a self-contained symptom → cause → verification → remediation unit.
2. Add a lexical arm so exact identifiers can't be blurred, and weight it up when the query contains them.
3. Put lifecycle and system metadata on every chunk, use it in ranking, and pass staleness through to the final answer instead of hiding it.
4. Instruct synthesis to relay procedures rather than summarize them, with sources named.

A useful smoke test: take your last three incidents, replay the first question an engineer actually asked, and check whether the top retrieved chunk contains both an action *and* the condition under which that action applies. If it doesn't, no amount of model quality downstream will save the answer.

This retrieval design is one piece of how FaultMaven investigates — it's the knowledge side of a copilot that correlates what your logs and metrics show with what your runbooks and past fixes know. FaultMaven is source-available, and the Standalone deployment is free to self-host with a pre-built runbook pack included — the [Quick Start](https://github.com/FaultMaven/faultmaven#quick-start) takes a few minutes, or see what we're building at [faultmaven.ai](https://faultmaven.ai).
