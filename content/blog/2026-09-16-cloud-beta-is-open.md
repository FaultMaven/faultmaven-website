---
title: "Cloud Beta Is Open"
date: "2026-09-16"
description: "FaultMaven Cloud is open to anyone with an email address — no waiting list, no invite code. Here is what you can try, what it costs, what beta actually means, and the two ways to look at FaultMaven without signing up for anything."
tags: ["announcement", "beta", "cloud", "slack", "copilot"]
author: "The FaultMaven Team"
status: "draft"
---

FaultMaven Cloud is open. You can sign up at [app.faultmaven.ai](https://app.faultmaven.ai) with an email address and work a case in your browser a minute later. There is no waiting list, no invite code, and nothing to install. It is free while it is in beta.

We are opening it for an unglamorous reason: we want to find out whether it is useful to people who are not us. We have run FaultMaven against our own incidents and against a simulator for long enough to be confident it does something real, and long enough to stop trusting our own judgement about it. The only way past that is to put it in front of people who have no reason to be kind about it.

So this is an invitation, not a launch. If you try it and it does not earn its place, we would rather know that now.

## Two ways to look at it without signing up

**Read a real one.** We publish [a complete investigation transcript](/investigation) — a Redis out-of-memory case, start to finish, unedited. It is not a highlight reel. It includes the turns where FaultMaven asked for data it did not get, and the four separate points where it declined to name a cause because the evidence did not support one yet. If you want to judge whether the method holds up, that page is a better use of ten minutes than anything we could write about ourselves.

**Put a problem to it.** FaultMaven is installed in the [FaultMaven Community Slack](https://join.slack.com/t/faultmaven-community/shared_invite/zt-493fv3w3o-mPBBI2v3mMYQKS4649mY1A). Join and @mention it in a channel — no account, no install, nothing to configure. One caveat worth stating plainly: that workspace is shared and public. What you post there is visible to everyone else in it, and the investigations it produces run under a FaultMaven-managed account rather than one of your own. It is the right place for a real but unremarkable problem, and the wrong place for production secrets.

## Three places you can work

The same engine, reached three ways.

**In your browser.** The dashboard at [app.faultmaven.ai](https://app.faultmaven.ai) is the whole product. Open a case, paste the logs and configs you already have in front of you, and work it to a conclusion — transcript, hypotheses and evidence in one place. Nothing to install.

**Alongside the page you are staring at.** [FaultMaven Copilot](https://chromewebstore.google.com/detail/faultmaven-copilot/fghoagggojmkdopidfopijfnlmchjcng) is a side panel that follows you across tabs — Grafana, the AWS Console, your terminal output. Chrome, Edge, Brave and other Chromium browsers. One install works against Cloud or against a server you run yourself.

**In the channel where the incident already is.** The Slack agent answers in the thread. You can try it today in the community workspace. If you want it in your own, we connect workspaces by hand during beta rather than offering a self-serve button — that is deliberate, so that your team's cases land in your team's own account instead of a shared one. Ask in the community workspace and we will set it up.

## Standalone has not changed

None of this narrows the self-hosted path. Standalone is still free, still fair source under FSL-1.1-ALv2, still has no usage limits, and still runs air-gapped — the embedding model ships inside the image precisely so it never has to call out to anyone. `git clone`, one command, and it is yours. That is not a trial edition of Cloud and it is not going away.

Cloud exists for people who would rather not run it, and for teams who want shared knowledge across more than one person. Which of those is right for you is a real question with two real answers.

## What beta means

Four things, stated plainly, because a beta invitation that buries these is not worth accepting.

**Check its work.** FaultMaven runs on large language models. Its hypotheses, the data it asks for and the fixes it proposes can be incomplete, misleading or simply wrong — and it can be wrong confidently. Treat what it says as a suggestion from a colleague you have not verified yet. FaultMaven proposes; you approve and execute. It has no access to your infrastructure and takes no action on your systems.

**It is beta software.** Expect rough edges and occasional downtime. It is provided as is, without warranty — the [Terms](/terms) say so in more words.

**Mind what you paste.** FaultMaven stores the cases and files you give it, because reusing them is how it gets better at your problems specifically. Do not paste production secrets or customer data you would not want stored.

**Accounts do not merge.** If you sign up with a personal address now and later move to a company one, that is a new account — there is no migration, and your beta cases do not follow you. We would rather say that up front than have you discover it in three months.

---

If you try it, tell us what broke, what was obvious to you and wasn't to it, and what you expected it to do that it didn't. That is the entire point of this phase.
