# faultmaven-website

Source of [faultmaven.ai](https://faultmaven.ai): Next.js 15 (App Router), React 18,
TypeScript (`strict`), Tailwind CSS 3. Vercel deploys it (production from `main`,
previews from pull requests); GitHub Actions only verifies. The product itself lives in
[FaultMaven/faultmaven](https://github.com/FaultMaven/faultmaven).

## Commands

pnpm is the package manager (`pnpm-lock.yaml`); CI runs Node 20 and pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm dev                     # next dev on http://localhost:3000
pnpm lint                    # next lint (next/core-web-vitals)
pnpm type-check              # tsc --noEmit
pnpm test                    # jest (jsdom): tests/**/*.test.ts, src/**/*.test.ts(x)
pnpm build                   # next build; also lints and type-checks
node scripts/brand-lint.mjs  # brand terminology lint, stdlib only
```

## CI (`.github/workflows/`)

| Workflow | Runs |
|---|---|
| `ci.yml` | `pnpm run lint` + `tsc --noEmit`, then `pnpm run build`; `pnpm audit --audit-level=moderate` in parallel |
| `brand-lint.yml` | `node scripts/brand-lint.mjs` on PRs touching `README.md`, `src/**` or the lint itself |
| `dependency-review.yml` | fails a PR that adds a dependency with a known advisory |
| `policy-no-direct-k8s-deploy.yml` | fails if a workflow under `.github/workflows/` mentions kubectl, helm, kustomize or Kubernetes |

CI does not run `pnpm test`. Run it locally before pushing.

## Layout

```
src/app/            App Router: one directory per route, plus sitemap.ts, robots.ts,
                    opengraph-image.tsx (generated social card), layout.tsx (site metadata)
src/app/blog/       /blog index and /blog/[slug] post pages
src/app/api/        route handlers: /api/hello, and 501 stubs (auth, stripe/analytics webhooks)
src/components/     layout/ (Header, Footer), sections/ (homepage), ui/, icons/, blog/ArticleBody
src/lib/blog.ts     reads content/blog/*.md (gray-matter + marked)
src/lib/links.ts    shared destinations (dashboard, sign-up, self-host, Quick Start, …)
src/middleware/     rate-limit helper imported by /api/auth; NOT Next.js middleware
content/blog/       blog posts as Markdown; README.md there is the authoring guide
tests/              jest suites for links.ts, next.config.js redirects, self-host CTAs
```

Imports use `@/*` → `src/*` (`tsconfig.json`, mirrored in `jest.config.js`).

## Content rules

- **Brand terminology.** `scripts/brand-lint.mjs` applies terminology rules to `README.md`
  and `src/**/*.ts(x)`, and tone rules to `README.md` only. It is a downstream copy of the
  canonical brand-messaging skill in the faultmaven repo
  (`.claude/skills/brand-messaging/SKILL.md`); read that before writing product copy.
  A retired term is added to both in step. `brand-lint: allow` on a line whitelists a
  deliberate use.
- **Blog posts.** Follow `content/blog/README.md` (file naming, frontmatter, editorial bar).
  `content/` is deliberately outside the brand lint; a technically wrong claim in a post is
  corrected in review, whatever the post's age.
- **Post status.** Only `status: "published"` renders. A missing or unknown status is
  treated as `draft` with a build-log warning; unpublished posts 404 and are left out of
  the sitemap (`src/lib/blog.ts`).
- **Links.** A destination used in more than one place lives in `src/lib/links.ts`. Every "self-host"
  call to action links `SELF_HOST_PATH`; the Quick Start URL appears only in `links.ts`
  (`tests/self-host-links.test.ts` enforces this).
- **Retired routes** get a redirect in `next.config.js`, covered by `tests/redirects.test.ts`.

## Rendering and SEO

- Every page route prerenders as static HTML; only `/api/*` is dynamic.
  `/blog/[slug]` is SSG through `generateStaticParams` over the published posts.
- Post Markdown becomes HTML at build time (`marked`) and is injected unsanitized, so it
  must stay trusted repository content. `ArticleBody` (client) swaps fenced `mermaid`
  blocks for SVG after hydration, sanitized with DOMPurify.
- `src/app/layout.tsx` owns site metadata: `metadataBase` `https://www.faultmaven.ai`,
  Open Graph, Twitter card, robots, and the title template `%s | FaultMaven`. A page sets
  a bare `title`; the template appends the site name.
- Pages set `export const metadata`; blog posts use `generateMetadata`. A `'use client'`
  page cannot export metadata and inherits the site default, so a page that needs its
  own title keeps `page.tsx` a server component and moves interactivity into components.
- `src/app/sitemap.ts` lists static routes by hand and appends published posts. A new
  public page is added there.
- Vercel Web Analytics (`<Analytics />`) is mounted in the root layout.

## Traps

- **Root `middleware.ts` never runs.** In a `src/` project Next.js loads middleware only
  from `src/middleware.ts`; `next build` registers none (`.next/server/middleware-manifest.json`
  is empty). The security headers and CSP in that file are not served. Moving it into
  `src/` activates a CSP that has never been exercised against the site.
- **`NEXT_PUBLIC_DASHBOARD_URL`** (optional, see `.env.example`) overrides the dashboard
  origin in `links.ts`. `next/jest` loads `.env*` files, so a test that asserts on a
  resolved env-derived constant sees only the local value; test the derivation
  (`normalizeOrigin`) instead.

## Pointers

- `README.md`: overview and local setup. `CONTRIBUTING.md`: branch naming, PR checklist.
- `content/blog/README.md`: blog authoring guide.
- Commits follow Conventional Commits (`docs:`, `feat:`, `fix:`, …).
