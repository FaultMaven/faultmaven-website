---
title: "We Turned Reasoning Off and the Answers Got Better"
date: "2026-08-19"
description: "A reasoning model's hidden thinking and its visible answer share one token budget, and the API tells you when the answer lost. We were discarding that signal — here's the bug, how long it ran unseen, and why prose truncation is invisible by construction."
tags: ["llm", "ai", "reliability", "observability", "sre"]
author: "The FaultMaven Team"
status: "published"
---

One of our knowledge-base answers came back at 215 characters. Sibling answers to the same kind of question — same tool, same retrieval pipeline, same prompt template — ran 5,261, 7,285, and 7,729 characters. The short one wasn't an error. It wasn't flagged, retried, or logged as anything unusual. It was returned to the investigation engine as a complete, successful result, and the engine treated it as one, because every signal it had said so: the call returned cleanly, the text was well-formed, and nothing anywhere raised.

The answer had been cut off mid-thought. Not by a network fault, not by a parsing bug, not by the model refusing — by arithmetic. And the API had told us, explicitly, in a field we had been throwing away for the entire life of the codebase.

## Reasoning and the answer share one budget

Here's the mechanism, and if you run reasoning models behind an API you may want to go check this in your own system before reading further.

For reasoning models, the `usage.completion_tokens` figure **includes the hidden reasoning tokens**. Thinking is not a separate pool billed and capped on the side; it comes out of the same completion budget as the text you actually receive. We verified this directly against the API rather than trusting documentation: a call reported `completion_tokens=474` and `reasoning_tokens=95`, and the visible text was 1,503 characters — roughly 376 tokens. 376 + 95 ≈ 474. One budget, two consumers.

Now apply that to the failing call. Our cap on these calls was 2,000 completion tokens. The 215-character answer is around 54 tokens of visible text — which means roughly 1,946 tokens went to reasoning we never see. The model spent 97% of the budget thinking and handed the answer whatever was left.

That reframes the failure in a way that matters for the fix. The healthy siblings ran 5,261 to 7,729 characters — roughly 1,300 to 1,900 tokens, living right up against the same 2,000-token ceiling without hitting it. So the failing call had budget enough for a full answer. The budget just never reached the answer, because reasoning spends first and the text gets the remainder — and a competitor that took 1,946 tokens out of 2,000 will happily take more out of more. Raising the cap doesn't fix that; it just moves the line that the same failure crosses on a harder question. The problem isn't the size of the budget. It's that the budget has a competitor.

This is worth saying carefully, because the wrong lesson is nearby: this is not "reasoning models are bad." The shared budget is how reasoning models are designed across the industry — it's the same architecture almost everywhere, not one vendor's mistake — and hidden reasoning genuinely helps on the right problems. The lesson is narrower and more useful: when you adopt a model whose capability consumes the same resource as its output, you have introduced a resource contention you didn't have before, and you need to know when the output loses.

## The API tells you — we weren’t listening

Every major provider reports, on every response, why generation stopped. OpenAI calls it `finish_reason` and reports `"length"` when the token cap ended the response. Anthropic calls it `stop_reason: "max_tokens"`. Gemini calls it `finishReason: "MAX_TOKENS"`. This is the authoritative signal — not a heuristic, not an inference, the provider itself saying *this response is incomplete and I know it*.

We were discarding it at the provider boundary. Our internal response object had no field for a stop reason — not a field that was sometimes unpopulated, no field, ever, across the whole history of the repository. Nine LLM providers, and exactly one of the nine adapters read its own stop reason at all — and even that one only raised on structured-output requests, where truncation was about to cause a parse failure anyway.

That "structured requests only" detail is the heart of why this bug could exist. Our system did detect truncation — but only ever as a side effect of JSON parsing. Cut a JSON body off mid-object and it fails to parse; the parse failure triggered a retry ladder, and the retry usually recovered. That machinery worked, and its existence is precisely what let us believe truncation was a handled problem. But a cut-off *prose* answer is perfectly valid text. It parses, because there's nothing to parse. It renders. It reads fine right up to the point where it stops. Nothing fails, so nothing raises, so nothing retries.

We keep re-learning this shape of lesson in different clothes. [We wrote earlier this year](/blog/llm-portability-is-a-lie) that when a required output is enforced by convention rather than by the transport, the failure is silent by construction. This is the same law one layer down: **if your truncation detection depends on something failing to parse, you only catch the JSON.** The prose failure mode isn't rarer — it's structurally undetectable by that mechanism, no matter how good the mechanism gets.

## Nineteen answers, two weeks, and a floor

Once we knew what to look for, we could go back through our telemetry and count. Over roughly two weeks, 19 knowledge-base answers were served as complete when the provider had explicitly reported them truncated — about 5.6% of all recorded LLM calls in that window. Every one of them flowed into an investigation as a trusted result. Not one left a trace at the time.

And 19 is a *floor*, not a count. The only way we could find these in hindsight was to look for completion counts landing exactly on the cap — the arithmetic signature of a response that ran out of budget. Any response where generation was cut a token short of the cap looks, in our records, identical to a response that finished normally. The signal that would have distinguished them is exactly the one we never stored. We can put a lower bound on how often this happened. We cannot put an upper bound on it, and that asymmetry is itself part of the cost of discarding the field.

## The sentinel and the blacklist

The strongest evidence that this signal was missing isn't the 19 truncated answers. It's what we found the codebase had grown in the signal's absence.

In one provider adapter, someone had handled truncation by substituting a literal string into the response content: `"[Response truncated due to token limit]"`. Somewhere else entirely — a different module, a different author's problem, a completely unrelated code path — we found a string blacklist whose job was to filter that same placeholder back out, so it couldn't be saved as a case title.

Stop and look at what that pair of patches is. One layer invented a sentinel value to smuggle a fact through a channel that had no field for it. Another layer, downstream, string-matched the sentinel to un-smuggle it. Neither author did anything unreasonable; each solved the problem visible from where they stood. But together they are a fact about a response being routed through the response's *content* — through the data itself — because the metadata channel that should have carried it didn't exist.

When you find a sentinel string in one place and a blacklist for that string in another, you haven't found two small hacks. You've found the outline of a missing field, drawn in workarounds. It's the same tell we described when [we deleted our agent framework twice](/blog/we-deleted-our-agent-framework-twice): machinery built to route around your own design is the design reporting its own defect.

## The fix: remove the competitor, keep the signal

The fix had two parts, and neither of them was "give reasoning more room."

**First, we removed the competitor where it wasn't earning its seat.** The calls that were starving are grounded extraction: answer strictly from the provided context — retrieved runbook chunks, document excerpts, case evidence. The model's job on these calls is to read what's in front of it and report faithfully, not to derive anything. Extended hidden reasoning plausibly adds little there, and it was demonstrably capable of consuming the entire answer budget. So on grounded-extraction calls, reasoning is now explicitly capped. The budget's competitor is gone from the calls where the answer must win.

**Second, we built the missing channel.** Every one of the nine provider adapters now maps its native stop signal — `finish_reason`, `stop_reason`, `finishReason`, whatever the provider calls it — into one normalized stop reason on our internal response object. A truncated response is finally a *detectable* response, uniformly, regardless of provider.

One design decision in that second part deserves a paragraph, because it's where a lazy version of the fix would quietly recreate the bug. Not every provider reports a stop reason in every mode, so our normalized field includes `UNKNOWN` as a distinct state — and `UNKNOWN` is *not* collapsed into "finished normally." The temptation is obvious: default the field to the happy value and spare every caller a case. But a check written against that default fails open — a provider that never reports the signal would pass every truncation check forever, which is precisely the failure mode we were digging out of. "The provider told us it finished" and "the provider didn't tell us anything" are different facts, and a system that's serious about its conclusions has to keep them different.

## What we measured — and only what we measured

After the fix, we ran a 20-turn simulated investigation of the kind that surfaced the bug. It made 14 knowledge-base lookups. Zero came back starved, zero clipped; answers ran 1,088 to 5,454 characters — the full healthy range, with nothing landing at the cap.

The same investigation also turned up an unrelated inefficiency worth exactly one line: we were embedding the same search query four times per lookup instead of once, and fixing that took the retrieval step from roughly 22.9 seconds to 15.0.

Note what we are *not* claiming. We haven't measured that the answers got smarter, and we won't claim it. What we measured is that answers stopped silently losing their budget to a consumer we couldn't see — that the failure mode is closed and, more importantly, that it's now observable if it ever reopens.

## Three things to check in your own system

**The stop reason is data you are probably discarding.** Go look at your provider boundary right now: does your internal response type carry the provider's finish reason, for every provider, in every mode? If your truncation detection is "malformed output fails downstream," you have JSON-only detection, and every prose response you serve is unverified. This is a one-field fix with a nine-adapter blast radius, and it's worth it.

**A cap is a backstop, not a design parameter.** We had been treating max-tokens as a number to size — make it big enough that hitting it is rare. That's the wrong frame. The cap *will* be hit; the question is whether your system is correct when it happens. Handle the event, don't just tune the number. Rare-and-silent is strictly worse than common-and-loud.

**A more capable model is not automatically better output when the capability competes with the output for the same resource.** Reasoning is a genuine capability. It is also, under the prevailing API design, a consumer of the same budget your answer draws on. Adopting it isn't free even when the per-token price says it is — you've added contention, and contention needs management.

## What we don't know yet

Here's the part we want to be honest about, because it would be easy to end this post one notch more confident than the evidence supports.

We turned reasoning off on grounded extraction — calls where the model answers strictly from provided context, where it plausibly adds little, and where it was measurably starving the output. That decision we can defend with data.

Whether reasoning helps on FaultMaven's genuinely inferential work — generating hypotheses, building causal chains, ruling explanations out — we do not know, because we have never measured it. The published research doesn't settle it either: there's work finding that agents already know when to call tools without explicit reasoning, and work finding that enhancing reasoning can amplify tool hallucination. Both results are credible. Neither is about our workload.

So we wrote down the experiment — same investigation scenarios, reasoning on versus capped, judged on investigation outcomes rather than vibes — and we deliberately deferred it rather than guessing. The bug taught us that an invisible consumer of the answer's budget went undetected for the life of the repository. It would be a strange response to that lesson to start making invisible, unmeasured claims about what the consumer was worth.

FaultMaven is source-available and the Standalone deployment is free to self-host — the [Quick Start](https://github.com/FaultMaven/faultmaven#quick-start) takes a few minutes, or see what we're building at [faultmaven.ai](https://faultmaven.ai).
