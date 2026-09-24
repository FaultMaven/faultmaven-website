import fs from 'fs';
import path from 'path';
import { QUICKSTART_URL, SELF_HOST_PATH } from '@/lib/links';

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

describe('self-host calls to action', () => {
  it('is an on-site path, so a visit is counted here before the hand-off', () => {
    expect(SELF_HOST_PATH.startsWith('/')).toBe(true);
    expect(SELF_HOST_PATH).not.toMatch(/^\/\//);
  });

  it('never links the Quick Start directly outside the links module', () => {
    // Matches the literal wherever it appears, so a CTA pasted in with a
    // hard-coded URL fails here rather than slipping past the page.
    const offenders = sourceFiles(SRC).filter(
      (file) => file !== LINKS_MODULE && fs.readFileSync(file, 'utf8').includes(QUICKSTART_URL)
    );
    expect(offenders.map((file) => path.relative(SRC, file))).toEqual([]);
  });
});
