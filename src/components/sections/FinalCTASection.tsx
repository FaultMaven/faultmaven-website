import { Cloud, Server } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import { Card, CardTitle, CheckList, CodeBlock, IconTile, cardSubtitleClass } from '@/components/ui/card';
import { Section, SectionHeader, textLinkClass } from '@/components/ui/Section';
import { CHROME_WEB_STORE_URL, ENGINE_REPO_URL, SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';

// The page's one closing choice: the two ways to run FaultMaven, then the
// Copilot extension and the source.
export default function FinalCTASection() {
  return (
    <Section tone="muted">
      <SectionHeader
        title="Two ways to run FaultMaven"
        lead="One engine, two ways to run it. Because it is fair source and self-hostable, whichever you choose, you are never locked in."
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {/* FaultMaven Cloud */}
        <Card highlight className="flex flex-col">
          <IconTile>
            <Cloud aria-hidden="true" />
          </IconTile>
          <CardTitle className="text-2xl">FaultMaven Cloud</CardTitle>
          <p className={`${cardSubtitleClass} mt-2 mb-4`}>We run it for you</p>
          <p className="mb-6 text-slate-700 dark:text-slate-300">
            <strong>Best for:</strong> individuals and teams who would rather use FaultMaven than operate it.
          </p>
          <CheckList
            className="mb-8 flex-grow text-sm"
            items={[
              'Nothing to install or operate — sign up with your email',
              'The same engine as the self-hosted version',
              'Team knowledge sharing — share runbooks with your team',
              'Managed upgrades, storage, and model routing — no API keys to manage',
              'In beta: free, with a daily limit on investigation turns',
            ]}
          />
          <Button asChild href={TRY_CLOUD_URL} variant="primary" className="w-full">
            Start on FaultMaven Cloud
          </Button>
        </Card>

        {/* Standalone (self-hosted) */}
        <Card className="flex flex-col">
          <IconTile>
            <Server aria-hidden="true" />
          </IconTile>
          <CardTitle className="text-2xl">Standalone</CardTitle>
          <p className={`${cardSubtitleClass} mt-2 mb-4`}>You run it yourself · Free forever</p>
          <p className="mb-6 text-slate-700 dark:text-slate-300">
            <strong>Best for:</strong> engineers who want FaultMaven on hardware they control.
          </p>
          <CheckList
            className="mb-6 text-sm"
            items={[
              'Cases, evidence, and knowledge base stay on your disk',
              'Retrieval runs with no network — the embedding model ships in the image',
              'The model provider you choose, with your own key',
              'Single user · no usage limits',
            ]}
          />
          <CodeBlock className="mb-3">
            {`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
./faultmaven.sh start`}
          </CodeBlock>
          <p className="mb-8 flex-grow text-sm text-slate-600 dark:text-slate-400">
            One command with Docker Compose. Set one model provider&apos;s API key in{' '}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-800">.env</code>{' '}
            first.
          </p>
          <Button asChild href={SELF_HOST_PATH} variant="secondary" className="w-full">
            Self-host it
          </Button>
        </Card>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
        Both are built from one codebase, fair source (FSL-1.1-ALv2).{' '}
        <Link href="/pricing" className={textLinkClass}>
          Compare them in detail
        </Link>
        .
      </p>

      {/* Secondary paths */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardTitle className="mb-3">Work beside the page you are reading</CardTitle>
          <p className="mb-6 flex-grow text-slate-600 dark:text-slate-400">
            FaultMaven Copilot is on the Chrome Web Store. One install works against Cloud or a server you self-host.
          </p>
          <Button asChild href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" variant="secondary" className="w-full">
            Get the Copilot extension
          </Button>
        </Card>
        <Card className="flex flex-col">
          <CardTitle className="mb-3">Want to contribute?</CardTitle>
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
