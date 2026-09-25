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
| `ci.yml` | `pnpm run lint` + `tsc --noEmit` + `pnpm test` (jest), then (after lint) `pnpm run build` + `pnpm run test:build` (headers, 404s, redirects, titles against the built site) + `pnpm run test:browser` (Playwright/Chromium); `pnpm audit --audit-level=moderate` runs in parallel |
| `brand-lint.yml` | `node scripts/brand-lint.mjs` on push to `main`, and on PRs touching `README.md`, `src/**`, the script or its workflow |
| `dependency-review.yml` | fails a PR that adds a dependency with a known advisory |
| `policy-no-direct-k8s-deploy.yml` | PRs touching `*.yml`/`*.yaml`/`*.sh`: substring greps over `.github/workflows/`, case-sensitive for `kubectl`/`helm`, case-insensitive for `kubectl apply`/`kustomize`/`kubernetes` |

## Layout

```
src/app/            App Router: one directory per route, plus sitemap.ts, robots.ts,
                    opengraph-image.tsx (generated social card), layout.tsx (site metadata)
src/app/blog/       /blog index and /blog/[slug] post pages
src/app/signin/     redirects to the dashboard sign-in (SIGN_IN_URL)
src/app/api/        route handlers: /api/hello, and 501 stubs (auth, stripe/analytics webhooks)
src/components/     layout/, sections/ (homepage), ui/, icons/, blog/ArticleBody,
                    investigation/TranscriptTurn, auth/SignInForm (no route imports it)
src/data/           redisOomTranscript.ts: generated verbatim from a test-harness transcript;
                    do not hand-edit, regenerate from the source transcript
src/lib/            blog.ts (reads content/blog/*.md), links.ts, utils.ts (cn class merger)
src/middleware/     rate-limit helper imported by /api/auth; NOT Next.js middleware
src/types/          component-props.d.ts (currently empty)
content/blog/       blog posts as Markdown; README.md there is the authoring guide
tests/              jest suites for links.ts, next.config.js redirects, the Quick Start literal
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
- **Post status.** Only `status: "published"` renders; a missing or unknown status is `draft`
  with a build warning. Unpublished posts get the not-found page and no sitemap entry.
- **Links.** A destination used in more than one place goes in `src/lib/links.ts`, including
  the engine repo URL (`Footer.tsx`, `OpenSourceTrustSection.tsx`) and the Discussions URL.
  Self-host calls to action link `SELF_HOST_PATH`, by convention. `tests/self-host-links.test.ts`
  checks that the `QUICKSTART_URL` and `DISCUSSIONS_URL` literals, and the bare engine repo
  URL, appear nowhere in `src/` outside `links.ts`; it does not scan `content/` (blog posts
  link the Quick Start directly).
- **Retired routes** get a redirect in `next.config.js`, covered by `tests/redirects.test.ts`.

## Rendering and SEO

- Pages are meant to be static: in the `next build` route table only `/api/*` may be
  dynamic (`ƒ`). A page turning dynamic has read a request-time API, a regression.
- `/blog/[slug]` prerenders published posts through `generateStaticParams` and sets
  `dynamicParams` to `false`, so a slug outside that list 404s at the router rather than
  rendering on demand. Each post has one URL: `getPostBySlug` only resolves the clean slug,
  and `next.config.js` redirects a date-prefixed `/blog/YYYY-MM-DD-slug` request to it.
- Post Markdown becomes HTML at build time (`marked`) and renders as trusted HTML, so a
  post is repository content only. `ArticleBody` (client) swaps fenced `mermaid`
  blocks for SVG after hydration, sanitized with DOMPurify.
- `src/app/layout.tsx` owns site metadata: `metadataBase` `https://www.faultmaven.ai`,
  Open Graph, Twitter card, robots, and the title template `%s | FaultMaven`. A page
  exports metadata built with `pageMetadata(...)` (`src/lib/metadata.ts`): a bare `title`
  (the template appends ` | FaultMaven`) plus its own branded Open Graph/Twitter title and
  canonical `path`, since those aren't covered by the template. `page.tsx`, `signin/page.tsx`
  and `not-found.tsx` set a plain `Metadata` object with just a bare title instead.
- `src/app/sitemap.ts` lists static routes by hand (add new public pages) plus published posts.
- Vercel Web Analytics (`<Analytics />`) is mounted in the root layout.

## Traps

- **Middleware location.** Security headers are set in `next.config.js` (`headers()`,
  `security-headers.js`), not middleware: there is no root `middleware.ts` — in this `src/`
  layout Next.js would only load one from `src/middleware.ts`, and a static site has no
  other reason to run one. The CSP allows `'unsafe-inline'` rather than a nonce, since a
  nonce would make every page dynamic and this site stays static.
- **Env in tests.** `next/jest` runs `loadEnvConfig` with `NODE_ENV=test`: it reads
  `.env.test.local`, `.env.test` and `.env`, never `.env.local`, and never overrides a
  variable already set in the shell. `NEXT_PUBLIC_DASHBOARD_URL` (optional, `.env.example`)
  feeds `DASHBOARD_URL`, so test the derivation (`normalizeOrigin`), not the resolved constant.

## Pointers

- `README.md`: overview and local setup. `CONTRIBUTING.md`: branch naming, PR checklist.
- Commits follow Conventional Commits (`docs:`, `feat:`, `fix:`, …).
