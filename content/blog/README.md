# FaultMaven Blog Content

Markdown source for posts published at **faultmaven.ai/blog**. The blog page
(`src/app/blog/page.tsx`) renders these files via `src/lib/blog.ts` (gray-matter
frontmatter + Markdown body); each post is served at `/blog/<slug>`.

## Conventions

- One file per post: `YYYY-MM-DD-slug.md` (date = the post's publication date).
- Posts are dated to align with the phase of FaultMaven's development they
  describe, beginning early 2026 — the archive reads as a development timeline.
- Every post stays `status: draft` until the founder signs off. Nothing ships
  unreviewed.

## Frontmatter template

```yaml
---
title: "Post title"
date: "2026-01-20"
description: "1–2 sentence summary used for SEO meta and the post card."
tags: ["sre", "incident-response", "ai"]
author: "The FaultMaven Team"
status: "draft"   # draft → approved (founder sign-off) → published
---
```

## Editorial bar (summary)

- One idea per post, developed properly. Teach; don't pitch.
- Open with a real reader problem; close with a takeaway the reader can use.
- Ground claims in the design docs (`faultmaven/docs/architecture/`) and
  reputable external sources. No invented statistics or benchmarks.
- Never claim a capability the product doesn't have.
- Terminology and positioning follow the canonical brand-messaging skill
  (`faultmaven/.claude/skills/brand-messaging.md`): the backend is
  **fair-source (FSL-1.1-ALv2)**, never "open source"; deployments are
  **Standalone / Cloud**; it's a **troubleshooting copilot**, not an AIOps
  platform; cases, evidence, hypotheses, runbooks, investigations.
- One soft CTA per post (Quick Start or faultmaven.ai) — invite, never push.
