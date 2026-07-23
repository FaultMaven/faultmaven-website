---
title: "Evidence Before Answers: Why LLMs Fail at Troubleshooting"
date: "2026-01-20"
description: "LLMs answer before they investigate — pattern-matching to the most common cause instead of your actual one. What an evidence-first diagnostic method looks like, and why refusing to conclude is a feature."
tags: ["ai", "llm", "troubleshooting", "sre", "incident-response"]
author: "The FaultMaven Team"
status: "published"
---

It's 2 a.m. and checkout is throwing 502s. You paste the nginx error into an AI chat assistant, and three seconds later you have an answer: fluent, structured, confident. *"A 502 Bad Gateway typically indicates your upstream server timed out. Increase `proxy_read_timeout` and `proxy_connect_timeout`, and consider adding retries."* It even formats the config block for you.

You apply it. Nothing changes. Twenty minutes later you find the real cause — a memory regression in yesterday's deploy — and it had nothing to do with timeouts.

Most engineers who have used an LLM mid-incident have a version of this story. The interesting part is that the model didn't malfunction. It did exactly what it is built to do. Understanding why that's not the same thing as troubleshooting is worth ten minutes, because it points at what a genuinely useful AI troubleshooting tool has to do differently.

## Plausible is not grounded

A language model generates the most probable continuation of your prompt. Ask it what causes a symptom and you get, roughly, the most common cause of that symptom across everything it has read. That answer is *plausible*: it is a correct answer to the most frequent instance of your question.

But an incident is not the most frequent instance of anything. It is one specific instance, in one specific system, with one specific cause. Plausibility is a property of an answer relative to a training corpus. Groundedness is a property of an answer relative to *your system, right now*. The model gave you a base-rate answer dressed as a case-specific diagnosis.

What makes this dangerous rather than merely unhelpful is fluency. A well-structured causal explanation, delivered with confident tone and a ready-made fix, reads like the output of an investigation. No investigation happened. The model consulted zero evidence from your environment — not your logs, not your deploy history, not your metrics — because you didn't give it any and it didn't ask.

This isn't hallucination in the usual sense. "502s are usually upstream timeouts" may be a true statement about the world. The failure is subtler: a statistical prior presented with the confidence of a verified conclusion. And mid-incident, a confident wrong answer is worse than no answer, because you act on it.

## What a diagnostic method demands

None of this is a new problem. Every mature diagnostic discipline has evolved defenses against exactly this failure — concluding from priors instead of evidence. Physicians call the defense differential diagnosis: enumerate the candidate causes, then order tests that discriminate between them, rather than treating the most common disease that matches the symptoms. The Google SRE book's chapter on effective troubleshooting recommends the same structure for production systems — the hypothetico-deductive method: examine the evidence, hypothesize, test, repeat.

Distilled, the method makes four demands:

**1. Verify the symptom before explaining it.** What exactly is failing? Since when? At what rate, for whom, in which environment? A surprising number of investigations end here — the alert was stale, the dashboard aggregated two services, the "spike" was a redeployed exporter. Explaining a problem you haven't confirmed is how you spend an hour fixing something that isn't broken.

**2. Name the hypothesis before claiming the cause.** "X caused Y" presupposes "X *might have* caused Y" — a testable statement, held alongside its competitors. The discipline of writing the hypothesis down does two things: it exposes your reasoning to challenge, and it tells you what evidence you actually need next. A cause you never stated as a hypothesis is a cause you never tested.

**3. Make every conclusion traceable to evidence.** Show your work. Each claim should cite the specific observation that supports it — this log line, this metric window, this config diff. If you cannot point at the evidence behind a conclusion, you don't have a conclusion; you have a guess with good posture.

**4. Treat "not enough evidence" as a valid answer.** When the data supports two explanations equally, the honest output is both explanations plus the observation that would discriminate between them — not a coin-flip presented as a finding. Refusing to conclude feels like weakness, especially under incident pressure. It is the method's most important feature. The expensive failure mode in troubleshooting is not slowness; it is confidently fixing the wrong thing.

Chat LLMs, used naively, violate all four. They explain unverified symptoms, skip from symptom to cause without a stated hypothesis, cite nothing, and are trained toward answering over abstaining.

## One symptom, two problems

Here's why the base-rate answer fails, concretely. Two incidents, identical presenting symptom: intermittent 502s from nginx, around 0.5% of requests.

**Incident A.** Yesterday's deploy introduced a memory regression. Backend pods get OOM-killed every so often; while a pod restarts, nginx can't connect.

**Incident B.** The backend's idle keepalive timeout is shorter than nginx's. Nginx reuses a connection the application already closed, and the request on that connection fails.

Both are real, common causes. The generic timeout advice fixes neither. And cheap, specific evidence separates them:

| Discriminating evidence | Incident A (OOM kills) | Incident B (keepalive mismatch) |
|---|---|---|
| Exact nginx error | `connect() failed (111: Connection refused) while connecting to upstream` | `upstream prematurely closed connection while reading response header` |
| Pod restart counts | Climbing, `OOMKilled` in status | Zero restarts |
| Temporal shape of 502s | Bursts, aligned with restarts | Even background rate, often *worse* at low traffic |
| Correlation with deploy | Started at yesterday's rollout | Predates it |

The first row alone nearly settles it — and it's sitting in a log file that takes thirty seconds to check. That's the method's quiet advantage: discriminating evidence is usually cheap. What's expensive is the time you lose acting on an undiscriminated answer, plus the false confidence that the problem is handled.

Notice also what the two incidents demand next: A needs the memory regression found and fixed; B needs a one-line timeout alignment. Same symptom, disjoint fixes. Any tool — or engineer — that answers from the symptom alone is guessing between these at even odds while sounding certain.

## Building a copilot around the method

This is the problem FaultMaven exists for. FaultMaven is an AI-powered troubleshooting copilot: it correlates the evidence you give it — logs, metrics, configs — with runbooks, documentation, and past fixes to drive a contextual investigation. The design bet is that an LLM's real strengths — reading volumes of log data quickly, correlating across sources, breadth of recall — are valuable *inside* a diagnostic method, and dangerous without one.

So the method is not a politely worded prompt suggestion. As far as possible, it's structure the model operates within:

- **An investigation opens by verifying the problem, not solving it.** Until the symptom is confirmed with concrete evidence, the engine's focus is on establishing that the problem exists and what its shape is — the first thing it asks for is proof, not the first thing it offers a fix.
- **Evidence is a first-class record with a known source.** Every piece of evidence in a case traces to a specific file or user-supplied output. There are no orphan facts. Conclusions reference evidence by name — "in the nginx error log" — so the chain from claim to observation stays inspectable.
- **A causal claim requires a named hypothesis.** The engine will not record evidence as causal unless a hypothesis exists for it to support or refute. You structurally cannot say "this caused it" without having said "this might have caused it." The resulting audit trail — evidence, to hypothesis, to solution — is the "show your work" demand, enforced rather than requested.
- **Confidence is calibrated, and "resolved" requires verification.** Partial evidence gets hedged language by rule; a proposed fix is "should resolve, if applied" until post-fix evidence or the engineer's confirmation says otherwise. When evidence supports competing explanations, the agent is required to present the competitors and name the data that would discriminate — exactly the 502 table above.
- **The engineer stays in command.** FaultMaven never runs commands or touches production; it analyzes what you gather and proposes what to check next, with the blast radius of any state-changing action spelled out. That's a deliberate trust boundary, not a missing feature.

Honesty about the trade-offs: this is slower than one-shot chat for easy problems. Sometimes the base-rate answer *is* your answer, and a chat assistant wins that round in three seconds. A methodical investigation costs turns, and it will ask you for data instead of pretending to have it. And instructions to a model are ultimately stochastic — which is precisely why the load-bearing constraints above live in engine code and schemas rather than in prompt wording alone, and why we keep moving rules from "asked nicely" to "enforced structurally."

We think the trade is right because troubleshooting is asymmetric. The cost of "I don't know yet, here's what would tell us" is a few minutes. The cost of a fluent wrong answer is a fix applied to the wrong problem, an incident running longer, and an engineer who trusts the tool a little less each time.

## A test you can apply tomorrow

You don't need FaultMaven to use the method. The next time an AI assistant — or a teammate, or your own gut — hands you a cause mid-incident, ask two questions before acting:

1. *What evidence from this system supports it?* If the answer is none, you're holding a hypothesis, not a diagnosis. Treat it as one.
2. *What else would produce the same symptom, and what single observation separates the candidates?* Then go get that observation — it's usually cheaper than the fix you were about to try.

Even with a plain chat assistant, this reframing helps: stop asking "what causes this error?" and start asking "what evidence would discriminate between the likely causes of this error?" You'll get a better class of answer, because you asked a diagnostic question instead of a trivia question.

FaultMaven is our attempt to build that discipline into the tool itself, so it holds at 2 a.m. when nobody's discipline is at its best. It's source-available, and the Standalone deployment is free to self-host — the [Quick Start](https://github.com/FaultMaven/faultmaven#quick-start) takes a few minutes, or see what we're building at [faultmaven.ai](https://faultmaven.ai).
