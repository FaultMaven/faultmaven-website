import fs from 'fs';
import path from 'path';
import { DISCUSSIONS_URL, ENGINE_REPO_URL, QUICKSTART_URL, SELF_HOST_PATH } from '@/lib/links';

// Visits to the self-host page are only counted if every "self-host it" call
// to action reaches it. One CTA pointing straight at the GitHub Quick Start is
// a hole in the count that nothing else would ever notice — the page still
// works, the link still works, and the number is quietly short.
const SRC = path.join(__dirname, '..', 'src');
const LINKS_MODULE = path.join(SRC, 'lib', 'links.ts');

function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.(tsx?|mdx?)$/.test(entry.name) ? [full] : [];
  });
}

function offenders(literal: RegExp): string[] {
  return sourceFiles(SRC)
    .filter((file) => file !== LINKS_MODULE && literal.test(fs.readFileSync(file, 'utf8')))
    .map((file) => path.relative(SRC, file));
}

function escape(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

describe('self-host calls to action', () => {
  it('is an on-site path, so a visit is counted here before the hand-off', () => {
    expect(SELF_HOST_PATH.startsWith('/')).toBe(true);
    expect(SELF_HOST_PATH).not.toMatch(/^\/\//);
  });

  it('never links the Quick Start directly outside the links module', () => {
    // Matches the literal wherever it appears, so a CTA pasted in with a
    // hard-coded URL fails here rather than slipping past the page.
    expect(offenders(new RegExp(escape(QUICKSTART_URL)))).toEqual([]);
  });
});

// A destination `links.ts` owns is written nowhere else, so a change lands
// once. Each of these was hard-coded in several files before it had a home.
describe('destinations owned by links.ts', () => {
  it('never spells the Discussions URL outside the links module', () => {
    expect(offenders(new RegExp(escape(DISCUSSIONS_URL)))).toEqual([]);
  });

  it('never spells the bare engine repository URL outside the links module', () => {
    // Bare: the URL followed by a quote or whitespace. Deep links into the
    // repository (`/blob/main/...`, `/issues`, `#quick-start`) and the other
    // repositories that share the prefix (`faultmaven-website`) are not this
    // constant and are left alone.
    expect(offenders(new RegExp(`${escape(ENGINE_REPO_URL)}(?=["'\`\s)]|$)`))).toEqual([]);
  });
});
