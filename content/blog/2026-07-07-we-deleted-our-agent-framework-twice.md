---
title: "We Deleted Our Agent Framework Twice"
date: "2026-07-07"
description: "We built FaultMaven's investigation engine three times — on a popular agent framework, then on borrowed expert methodologies, and finally on a domain model of investigation itself. Both deletions failed for the same reason, and the lesson transfers to any agentic app."
tags: ["ai", "llm", "troubleshooting", "sre", "reliability"]
author: "The FaultMaven Team"
status: "draft"
---

Every team building an agentic application asks the same question first:
*should we build on LangChain and LangGraph, or roll our own?*

It sounds like the foundational decision. Pick the framework, inherit the
orchestration, get to product logic faster. We asked it too, and we answered
yes: FaultMaven's investigation agent was originally orchestrated with
LangGraph. Then we replaced it with something we were even more confident
about — an in-house engine built on two of the most battle-tested
methodologies in the field, the Google SRE book's troubleshooting process and
Boyd's OODA loop. That one shipped, fully implemented and tested.

We deleted both. The second deletion removed roughly 5,900 lines of working
code in a single commit.

Here's the uncomfortable part: the two designs had almost nothing in common —
one was a third-party graph framework, the other was hand-built around expert
human process — and they failed for the *same* reason. Both imposed a
control-flow model on a problem whose real state is epistemic: not "what runs
next" but "what do we now know, and on what evidence." It took us two
funerals to see that, which is why "should we use LangChain?" is the wrong
first question. The right first question is *what is the state of my domain,
and who owns it?* This post is the long version of how we learned that, told
in the order we learned it.

## Attempt one: the framework that orchestrated nothing

The LangGraph version worked. That needs saying up front, because nothing in
this section is a complaint about the framework. LangGraph is a competent
tool, and if your problem is genuinely graph-shaped — pipelines, fan-out to
parallel workers, handoffs between specialized agents — it earns its place.
Our failure was fit-to-problem, not framework quality.

A graph-of-nodes framework answers one question extremely well: *what runs
next.* Nodes, edges, conditional routing, a state object threaded through the
graph. But a troubleshooting investigation's hard question was never "what
runs next." It's "what have we established, and on what evidence?" Has the
symptom actually been confirmed, or are we still working from the user's
report? Which hypotheses are alive, which did the evidence kill? Did the fix
get verified, or just proposed?

None of that is control flow. It's epistemic state — a record of justified
belief — and it has to be durable, auditable, and owned by the domain,
because it *is* the case record the engineer and the agent are jointly
building.

So that's where we put it. Even at the height of the LangGraph era, our own
architecture docs contained this sentence: the agent's LangGraph state is
ephemeral and in-memory; all persistent state — investigations, evidence,
tool calls — flows through the case module's own repository. Every fact that
mattered bypassed the framework into our domain records. The graph state
carried nothing durable.

Read that sentence again as a design review, because it's the tell. If all
durable state bypasses the framework, the framework is orchestrating
nothing. It's a routing veneer over a domain model that's doing the actual
work. The removal was correspondingly quiet: the LangGraph imports came out
in late 2025 as part of the move to our milestone-based architecture, and
the LangChain dependency itself lingered, unused, until a spring 2026
cleanup commit titled — honestly — "remove vestigial LangChain dependency."

That commit title is the tombstone, and it's worth dwelling on the word.
The framework didn't break. It didn't fail under load or block a feature.
It just stopped mattering, gradually, as the real state model grew up next
to it. Vestigial: an organ left over from an earlier stage of evolution.

## Attempt two: borrowed authority

If a generic framework doesn't fit, the obvious next move is a
domain-specific one. And in troubleshooting, the domain has giants to stand
on. The Google SRE book lays out an effective troubleshooting progression —
triage, examine, diagnose, test and treat. Boyd's OODA loop —
Observe, Orient, Decide, Act — is the canonical model of decision-making
under pressure. Both are excellent. Both are proven. What could be more
rigorous than encoding them?

So we built it, properly. Seven strategic investigation phases, from Intake
through Document, modeled on that staged SRE progression. Inside each phase,
an OODA loop as the tactical execution engine, with adaptive iteration
intensity — one or two cycles for simple problems, three to five for medium,
six-plus for complex. Dual engagement modes (Consultant vs. Lead
Investigator). Hierarchical memory compression in hot, warm, and cold tiers
for long investigations. A phase orchestrator, phase transition rules,
completion criteria, a strategy selector, a workflow-progression detector.

This was not a prototype we quietly abandoned. It was fully implemented,
integrated, and covered by tests. It shipped. And at the end of January
2026 we deleted it in one refactor commit: the OODA engine (561 lines),
the phase definitions (533), the engagement modes (618), the memory
manager (597), the strategy selector (462), and more — about 5,900 lines
in total.

Two specific failures forced the decision.

**Phases are process state, and reality kept contradicting them.** A phase
model asserts that an investigation is *somewhere* in a progression. Real
investigations refuse the premise: evidence arrives in whatever order the
user can get it, root cause is sometimes obvious from the first log file,
mitigation often has to precede diagnosis because the pager doesn't wait.
Our forward-marching phase model collided with this constantly, and we
responded the way engineers respond — with machinery. We built a 449-line
"phase loopback" subsystem whose entire job was to let investigations move
*backward* through phases when reality didn't match the forward march.

That subsystem is the second tell of this story, and it generalizes: **when
you find yourself building machinery to escape your own process model, the
model is wrong.** The loopback code wasn't a bug. It worked. It was the
system honestly reporting that its own spine didn't match the problem.

**OODA-per-turn manufactured pressure the conversation couldn't use.** OODA
is a model for an agent embedded in a fast-moving environment, acting
continuously against an adversary. A troubleshooting conversation isn't
that. It's often legitimately *waiting* — for the user to run a command,
pull a log, come back from the outage bridge. Forcing an
observe-orient-decide-act cycle on every turn meant the agent always had to
be driving somewhere, even when the correct move was to hold position and
say what data would unblock progress. The failure pattern, recorded verbatim
in our current design docs so we never re-learn it: per-turn rules that
force commitment or progress pressure produce an agent that "drives more,
yields less to the user, and stagnates anyway." The agent filled waiting
turns with manufactured momentum — restated plans, premature working
diagnoses, unwanted next steps — and the investigation moved no faster.

Neither failure was OODA's fault, or the SRE book's. These are excellent
methodologies *for the context that produced them*: OODA for continuous
action under adversarial pressure, the SRE progression as a description of
how effective human troubleshooting tends to unfold. Transplanting them out
of that context — turning a descriptive account of expert behavior into an
agent's mandatory per-turn control flow — is what failed. Borrowing
authority from a proven methodology feels rigorous. It's actually a way of
skipping the hard question of what *your* problem's state is, with a famous
name as cover.

And yes: deleting 5,900 lines of implemented, integrated, tested code hurt.
Every sunk-cost instinct argued for iterating instead — one more loopback
rule, one more mode. The deletion was right precisely because "implemented
and tested" is not the same as "matches the problem." Tests verify that the
system does what you designed. They are silent on whether the design models
reality.

## What survived

The third version is the one running today, and its core insight is small
enough to state in a sentence: **an investigation's state is not a position
in a process — it's a set of facts established by evidence.**

Symptom confirmed. Cause identified. Fix verified. These are milestones in
FaultMaven's engine, and they behave like facts, not like stations on a
line: they can be established in any order, several can land in a single
turn (one log file sometimes confirms the symptom *and* implicates the
cause), and none of them is ever reached by the calendar or by process
pressure — only by evidence.

The ownership split follows from that. The engine owns the deterministic
structure: what counts as established, what evidence a claim requires, when
a failed fix demotes the hypothesis that proposed it. The LLM supplies
judgment *within* that structure — reading evidence, forming hypotheses,
proposing next steps — but it cannot vote a milestone into existence, and
there is no phase pointer for it to advance. The difference is visible in
the shape of the state itself:

```python
# Control-flow state — what both deleted attempts tracked
current_phase = 3   # of 7: where are we in the process?

# Epistemic state — what survived
symptom_verified = True        # established by the nginx error log
cause_state     = "CANDIDATES" # two live hypotheses, neither confirmed
solution_proposed = False
```

The first line answers "what runs next." The last three answer "what do we
know, and on what evidence" — and notice that nothing about them implies an
order. What the SRE progression and OODA contributed survives too, but
demoted from executable process to *invariants*: never conclude ahead of
your evidence; re-orient when new facts arrive; verify before you trust a
fix. Inspiration for the rules, not the runtime.

The three attempts compress to one contrast:

| | Attempt 1 | Attempt 2 | What survived |
|---|---|---|---|
| **State owned by** | Framework graph | Methodology phases | The domain |
| **State answers** | What runs next? | Where are we in the process? | What's established, on what evidence? |
| **The tell** | All durable state bypassed it | 449 lines to move backward | — |
| **Fate** | Removed as "vestigial" | ~5,900 lines deleted | Running today |

## How to decide what your agent's state is

If you're at the start of your own agentic build, staring at the framework
question, here's the decision method the two deletions bought us:

**Start from the domain, not the orchestrator.** Before evaluating any
framework, write down what your domain's durable state actually is — the
facts a user would expect to survive a restart, an audit, a handoff to a
colleague. Then ask who owns each fact. If the answer is "our own records,
obviously," a framework can still route your calls, but know that's all it's
doing — and be honest about whether that's worth a dependency.

**Adopt a framework when your problem is genuinely control-flow-shaped.**
Pipelines, fan-out, multi-agent handoffs: real graph problems, real
framework wins. "A conversation that accumulates knowledge" is not one.

**Treat borrowed methodologies as inspiration for invariants, not as
executable process.** If a method was written for humans, extract the
principles it protects and enforce those. The moment you're encoding its
*steps* as your agent's mandatory control flow, you're transplanting it out
of the context that made it work.

**Watch for the two tells.** Durable state that bypasses your orchestration
layer means the layer is decorative. Machinery built to escape your own
process model means the model is wrong. Both showed up early for us; we just
didn't have names for them yet.

**Budget for deleting your first two attempts.** Ours were not waste. The
LangGraph version taught us — by being bypassed — that our state was
epistemic. The phase/OODA version taught us — by needing an escape hatch —
that the state had no inherent order. Each deletion was a measurement, and
the two measurements located the design that survived. If you plan for that
from the start, you'll take the readings faster and grieve the sunk cost
less.

The framework question will still be there after you've done the state
audit. It's just no longer the first question — and by the time you can
answer "what does my agent know, and on what evidence," you'll usually find
you've already answered it.

FaultMaven is source-available, and the Standalone deployment is free to
self-host — the [Quick Start](https://github.com/FaultMaven/faultmaven#quick-start)
takes a few minutes, or you can see what we're building at
[faultmaven.ai](https://faultmaven.ai).
