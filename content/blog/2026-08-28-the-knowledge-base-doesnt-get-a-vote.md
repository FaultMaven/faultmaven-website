---
title: "The Knowledge Base Doesn't Get a Vote"
date: "2026-08-28"
description: "Retrieval seeds a candidate cause from a matching runbook, and the obvious design is to trust it more because it's documented. We built the opposite: an invariant, enforced by an architectural test, that makes a seeded prior mechanically indistinguishable from one the engine generated itself — with exactly one narrow, low-stakes exception."
tags: ["rag", "knowledge-management", "sre", "reliability", "ai"]
author: "The FaultMaven Team"
status: "draft"
---

Retrieval does its job: a runbook from three incidents ago matches the shape of the one happening right now, and its documented cause gets instantiated as a candidate node in the investigation's causal graph before anyone has looked at a single log line. It's a good match. It was written by someone who solved this exact problem, reviewed, presumably correct.

The obvious design move is to give that candidate a head start — a higher prior, a shorter path to confirmation, some acknowledgment that it arrived with credentials the engine's own guesses don't have. We built FaultMaven not to do that, on purpose, and enforced the refusal in a test rather than a comment.

## The instinct is the bug

Here's the case against the obvious move. A runbook match is retrieval telling you "this shape looked like that shape" — a claim about text similarity, made before any evidence from *this* incident has been examined. It might be exactly right. It might also be the wrong runbook for a symptom that looks superficially similar to three different root causes. The only way to know which is to test it against what's actually happening right now, and testing doesn't get cheaper because the candidate showed up with better paperwork.

`faultmaven/core/investigation/kb_cause_seeder.py` is the module that turns a matching runbook's causes into real nodes in the case's causal graph, and its module docstring says exactly what a seeded cause is allowed to be:

> "A seeded cause is a **prior, not a gate**: it is created candidate-only, its hypothesis prior is capped like any other (`NEW_HYPOTHESIS_MAX_PRIOR`), it links no evidence, and it is subject to the same confidence decay, anchoring detection, and failed-fix demotion as a self-generated hypothesis... seeding grants **zero evidentiary privilege**."

Concretely: a seeded hypothesis starts at a prior of 0.3, under the 0.5 ceiling every hypothesis is capped at regardless of where it came from. It links no evidence at seed time. From that point forward it has to earn its way to confirmed the same way a hypothesis the model dreamed up from scratch would — on this case's evidence, not on the runbook's reputation.

## The invariant: no safety mechanism gets to know

The design intent above is easy to state and easy to violate by accident — one `if seeded: confidence += 0.1` slipped into a decay function years from now, written by someone with good intentions and no memory of this constraint, and the whole guarantee is gone. So it isn't left as a docstring. It's an invariant, and the invariant is: **every safety mechanism in the engine must be provenance-blind.**

That means confidence decay, anchoring detection, failed-fix demotion, node and hypothesis state derivation, `cause_state` derivation, and the terminal and conclusion gates all have to treat a seeded node exactly like a self-generated one — not "similarly," not "with a small adjustment," identically, because there is no code path available to them that can tell the difference.

## Enforced, not documented

The enforcement lives in `tests/unit/core/investigation/test_kb_cause_seeder.py`, in a test called `test_safety_mechanisms_are_provenance_blind`, and it's worth walking through what it actually checks, because the interesting part isn't the assertion — it's the reasoning behind what it bans.

A seeded node carries three surfaces that reveal where it came from: a metadata key on the node (`SEEDED_FROM_RUNBOOK_KEY`), a distinctive prefix on the hypothesis's rationale text (`"Seeded from runbook"`), and a metadata key holding the runbook's captured remediation steps (`SEEDED_INTERVENTIONS_KEY`), present on a node only if it was seeded. The test opens every module that contains safety logic — the causal graph, the hypothesis manager, the milestone engine, cause assurance, terminal transitions, progress monitoring, state validation, the working-conclusion generator, and the two evidence-need-consuming paths that read what a seeded cause emits — and greps the source for all three literal values. None of them may appear.

That much would be a reasonable test on its own. What makes it a proof rather than a gesture is the next thing it does: it also bans the **symbol names** — `SEEDED_FROM_RUNBOOK_KEY`, `SEEDED_RATIONALE_PREFIX`, `SEEDED_INTERVENTIONS_KEY` — and the three case-level origin-reading functions, from appearing anywhere in those modules at all. The test's own docstring explains why the literal-value check isn't enough by itself:

> "a module could import the symbol and branch on origin without the literal *value* ever appearing in its source, so the literal-value grep alone is only a tripwire, not a proof. Banning the names closes that gap."

That line generalizes past this one test. Any architectural invariant enforced by grepping for a magic string has the same hole: importing the constant and branching on it never puts the string itself in your file. If you're going to claim a property is *enforced* rather than merely *observed so far*, the check has to close off the indirect route too, or it's decoration.

## Blind mechanisms, not a blind record

There's a version of this post that's about RAG systems hiding where their answers came from. That isn't this one. The provenance is *kept*: the seeded node carries its origin key, the hypothesis's rationale records the runbook it came from, and the investigation's replies cite the runbooks they drew on by title, so an engineer can see which documented patterns are in play. What's withheld is narrower and more specific — no automated mechanism may branch on that origin.

The two are easy to conflate, and the distinction is the whole design. Keeping provenance in the record is good practice; it's how you audit a bad conclusion after the fact. Letting the machinery *read* it mid-investigation is how a documented-sounding prior skips the line and becomes a certified wrong answer nobody double-checks, precisely because it looked authoritative going in. The decay function, the anchoring detector, and the conclusion gate get no access to it at all.

Worth being straight about where this currently stops: seed provenance lives in the case record, not as a per-hypothesis badge in the interface. Surfacing it well to the person — who *can* weigh it, and should — is work we haven't done yet.

## The one place provenance is allowed to matter

There is exactly one exception to the invariant, and naming it precisely is the point of writing this post rather than stopping at "we made it fair." A single function, `confirmed_root_seed_origin`, is permitted to read seed provenance, and it is permitted to do so in exactly one place: the gate that decides whether to offer generating a new runbook once a case resolves.

The reasoning is narrow and specific. If a case was resolved by counterfactually confirming a cause the seeder had planted from an existing runbook, offering to generate a *new* runbook from that same case would just produce a near-duplicate of the runbook that was already right. So this one gate is allowed to ask "did the confirmed root cause originate from a runbook match?" — and if the answer is yes, it skips the redundant offer and points back at the runbook that covers it instead.

Why is this gate allowed to see what every other mechanism is blind to? The test's own carve-out justifies it by blast radius:

> "a wrong answer at that gate can only produce a missing or redundant 'generate runbook' affordance, never an incorrect conclusion or a collapse under pressure... the manual create path and the async... similarity backstop both remain."

If the offer gate gets it wrong, the cost is a UI affordance that's missing or slightly redundant — not a false root cause entering the case record, not a poisoned entry in the knowledge base. And it isn't even the only safeguard against duplication: an engineer can still manually create a runbook through the API regardless of what the gate decides, and a separate, asynchronous similarity search checks new runbook candidates against the existing library and surfaces a likely match for a human to judge before anything gets published. The offer gate is a convenience layer sitting on top of two backstops that don't depend on it at all.

That's the whole shape of the rule, stated once so it can be reused: **you may privilege a signal only where being wrong about it costs nothing that matters.** A root-cause conclusion is not that place — an incorrect one propagates into the knowledge base and misleads every future case that retrieves it. A "would you like to generate a runbook?" button is exactly that place, precisely because getting the button wrong costs a moment of the user's attention and nothing else.

## One detail that shows the exception was actually thought through

It would have been easy to implement the offer gate as "does this case have *any* seeded node on it" — cheaper to write, and wrong in a way that wouldn't show up until it mattered. A case routinely carries several seeded candidates from retrieval, and the investigation goes on to refute most of them before landing on the real cause, which might be self-discovered and have nothing to do with any runbook match. If the gate keyed on "any seed anywhere in the case," a refuted seeded candidate sitting off to the side would silently suppress the runbook offer for a completely different, legitimately novel cause — quietly withholding a knowledge capture opportunity the team earned.

Instead, `confirmed_root_seed_origin` keys specifically on the *confirmed root's own distinct-cause cluster* — the counterfactually validated node and anything that collapses into it, refuted branches explicitly excluded. A seed elsewhere in the case that never validated is invisible to the gate. It's the kind of detail you only get right if you've actually sat with the failure mode rather than shipping the first version that passes the happy-path test.

## The adjacent problem this isn't

We've [written before about anchoring](/blog/your-first-theory-is-wrong) — the bias where a team locks onto its first plausible theory and stops updating on contrary evidence within a single incident. This is a different failure sitting one level up: anchoring not on your own first guess, but on your organization's *institutional memory* — the accumulated, documented, presumably-trustworthy output of every incident that came before this one. The remedy for the first kind is procedural: hold competing hypotheses, demand a kill condition, let confidence decay. The remedy here is architectural: make sure the machinery literally cannot tell a documented prior from a fresh guess, so the temptation to shortcut verification never has a lever to pull. Different failure, same underlying commitment — nothing gets to skip the evidence.

We're aware this cuts against a lot of current RAG writing, [including our own](/blog/rag-for-troubleshooting-knowledge), which is mostly about getting provenance *in front of* people and systems, not keeping it away from them. Both are correct, applied to the right layer: surface provenance to the reader who can weigh it. Withhold it from any mechanism whose job is to decide, unsupervised, whether a claim is true.

FaultMaven is source-available and the Standalone deployment is free to self-host — the [Quick Start](https://github.com/FaultMaven/faultmaven#quick-start) takes a few minutes, or see what we're building at [faultmaven.ai](https://faultmaven.ai).
