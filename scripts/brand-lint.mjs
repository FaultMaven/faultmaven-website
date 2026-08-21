#!/usr/bin/env node
/**
 * Brand-messaging terminology lint (downstream check).
 *
 * Canonical source: `.claude/skills/brand-messaging.md` (§3 terminology, §7
 * enforcement) in the faultmaven repo. This is the downstream copy for the
 * website, scoped to its surfaces. Stdlib only — no dependencies.
 *
 * Two pattern classes, per the skill's "Authority by rule type":
 *   - UNIVERSAL : terminology — must not appear on ANY brand-facing surface,
 *                 including marketing copy. Runs on README + all of src/.
 *   - CORE_ONLY : positioning/audience/tone — core product surfaces only, NOT
 *                 marketing copy. Runs on README only (src/ is marketing copy
 *                 and owns its own positioning/voice).
 *
 * 'AIOps platform' / 'observability platform' / 'playbook' are intentionally NOT
 * grepped — FaultMaven references those categories by contrast ("not the
 * predictive AIOps platform"), so a substring match false-positives. They stay
 * §3 review rules.
 *
 * KNOWN GAP: content/blog/*.md is NOT scanned. One post carries the retired
 * 'live telemetry' claim in its author bio; faultmaven#821 deliberately left it
 * as dated, published writing. Extending the scan here needs that decision
 * first — otherwise this check goes red on an intentional exception.
 *
 * Put 'brand-lint: allow' on a line to whitelist a deliberate, justified use.
 * When retiring a NEW term, add it here AND to brand-messaging.md §7 together.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const ALLOW = 'brand-lint: allow';

const UNIVERSAL = [
  [/\btroubleshooting assistant\b/i, "use 'troubleshooting copilot', not 'troubleshooting assistant'"],
  // Retired overclaim (#821): FaultMaven has no reach into production — it works
  // from what you paste, upload or capture.
  [/\blive telemetry\b/i, "FaultMaven reads no live telemetry — say 'the logs, metrics, and configs you share'"],
  [/\bmicroservices?\s+backend\b/i, 'FaultMaven is a modular monolith, not microservices'],
  [/\bLocal Deployment\b/i, "use 'Standalone' (ADR-004); 'local' is reserved for AUTH_MODE/CHAT_PROVIDER"],
  [/\bdeploy locally\b/i, "use 'self-host' / 'Standalone' (ADR-004)"],
  [/\bEnterprise SaaS\b/i, "use 'FaultMaven Cloud'; there is no Enterprise tier"],
  [/\bCommunity Edition\b/i, "retired tier name — use 'Standalone' (one unified codebase)"],
  [/\bEnterprise Edition\b/i, "retired tier name — use 'Cloud' (one unified codebase)"],
  [/\bfaultmaven-deploy\b/i, 'obsolete repo — do not reference'],
  // The exemption names the ONE thing it exempts: the fm-provision-service-account
  // console entrypoint (faultmaven#887). A bare (?!-) also let fm-case-service-v2
  // and fm-agent-service-archive through, which ARE retired repo names.
  [/\bfm-[a-z]+-service\b(?!-account\b)/i, 'obsolete microservice repo — do not reference'],
];

const CORE_ONLY = [
  [/\bfor SRE teams\b/i, "don't narrow the audience to one role (brand §4)"],
  [/\bdesigned for DevOps\b/i, "don't narrow the audience to one role (brand §4)"],
  [/\bleverages?\b/i, "use a precise verb (uses/reads/queries…), not 'leverage' (brand §5)"],
  [/\butiliz(?:e|es|ed|ing|ation)\b/i, "use 'use', not 'utilize' (brand §5)"],
];

// Website surfaces: README (core/technical) + src/ (marketing copy).
const README = 'README.md';
const SRC_DIR = 'src';
const SCAN_SRC = true; // marketing copy lives in src/ — apply UNIVERSAL there
const SRC_EXTS = ['.ts', '.tsx'];
const SKIP_DIRS = new Set(['node_modules', '.next', 'dist', '.output', 'coverage']);

function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (!SKIP_DIRS.has(name)) walk(p, out);
    } else if (SRC_EXTS.some((e) => name.endsWith(e))) {
      out.push(p);
    }
  }
  return out;
}

function scan(absPath, rules, hits) {
  if (!existsSync(absPath)) return;
  const rel = absPath.startsWith(ROOT) ? absPath.slice(ROOT.length + 1) : absPath;
  const lines = readFileSync(absPath, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (line.includes(ALLOW)) return;
    for (const [re, msg] of rules) {
      if (re.test(line)) hits.push(`${rel}:${i + 1}: ${msg}`);
    }
  });
}

const hits = [];
scan(join(ROOT, README), [...UNIVERSAL, ...CORE_ONLY], hits);
if (SCAN_SRC && existsSync(join(ROOT, SRC_DIR))) {
  for (const f of walk(join(ROOT, SRC_DIR), [])) scan(f, UNIVERSAL, hits);
}

if (hits.length) {
  console.error('Brand-messaging lint failed (canonical: faultmaven/.claude/skills/brand-messaging.md):\n');
  for (const h of hits) console.error(`  ${h}`);
  console.error("\nFix the wording, or append 'brand-lint: allow' to the line for a deliberate, justified use.");
  process.exit(1);
}
console.log('Brand-messaging lint passed.');
