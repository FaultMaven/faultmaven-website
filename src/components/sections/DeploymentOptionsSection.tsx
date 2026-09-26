import { Cloud, Server } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import { Card, CardTitle, CheckList, IconTile, cardSubtitleClass } from '@/components/ui/card';
import { Section, SectionHeader, textLinkClass } from '@/components/ui/Section';
import { SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';

export default function DeploymentOptionsSection() {
  return (
    <Section>
      <SectionHeader
        title="Run It Yourself, or Let Us Run It for You"
        lead="One engine, two ways to run it. Because it is fair source and self-hostable, whichever you choose, you are never locked in."
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {/* FAULTMAVEN CLOUD */}
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

        {/* STANDALONE (SELF-HOSTED) */}
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
            className="mb-8 flex-grow text-sm"
            items={[
              'One command with Docker Compose',
              'Cases, evidence, and knowledge base stay on your disk',
              'Retrieval runs with no network — the embedding model ships in the image',
              'The model provider you choose, with your own key',
              'Single user · no usage limits',
            ]}
          />
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
    </Section>
  );
}
