import Button from '../ui/Button';
import { Card, CardTitle, CodeBlock } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/Section';
import { CHROME_WEB_STORE_URL, ENGINE_REPO_URL, SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';

export default function FinalCTASection() {
  return (
    <Section>
      <SectionHeader
        title="Two Ways to Run FaultMaven"
        lead="The same engine either way. Start on Cloud today, or run it on your own hardware."
      />

      {/* The two paths, side by side */}
      <div className="mx-auto mb-8 grid max-w-5xl gap-8 md:grid-cols-2">
        <Card highlight className="flex flex-col">
          <CardTitle className="mb-4 text-2xl">Let us run it for you</CardTitle>
          <p className="mb-6 flex-grow text-slate-600 dark:text-slate-400">
            Sign up for FaultMaven Cloud with your email and work a case a minute later — nothing
            to install or operate, and your team can share what it learns. In beta it is free,
            with a daily limit on investigation turns.
          </p>
          <Button asChild href={TRY_CLOUD_URL} variant="primary" className="w-full">
            Start on FaultMaven Cloud
          </Button>
        </Card>

        <Card className="flex flex-col">
          <CardTitle className="mb-4 text-2xl">Run it yourself</CardTitle>
          <CodeBlock className="mb-4">
            {`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
./faultmaven.sh start`}
          </CodeBlock>
          <p className="mb-6 flex-grow text-sm text-slate-600 dark:text-slate-400">
            Free forever. Set one model provider&apos;s API key in{' '}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-800">.env</code>{' '}
            first.
          </p>
          <Button asChild href={SELF_HOST_PATH} variant="secondary" className="w-full">
            Self-hosting guide →
          </Button>
        </Card>
      </div>

      {/* Secondary paths */}
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardTitle className="mb-3">Work Beside the Page You Are Reading</CardTitle>
          <p className="mb-6 flex-grow text-slate-600 dark:text-slate-400">
            FaultMaven Copilot is on the Chrome Web Store. One install works against Cloud or a server you self-host.
          </p>
          <Button asChild href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" variant="secondary" className="w-full">
            Get the Copilot extension
          </Button>
        </Card>
        <Card className="flex flex-col">
          <CardTitle className="mb-3">Want to Contribute?</CardTitle>
          <p className="mb-6 flex-grow text-slate-600 dark:text-slate-400">
            FaultMaven is fair source — every line is public. We welcome PRs.
          </p>
          <Button asChild href={ENGINE_REPO_URL} variant="secondary" className="w-full">
            View on GitHub
          </Button>
        </Card>
      </div>
    </Section>
  );
}
