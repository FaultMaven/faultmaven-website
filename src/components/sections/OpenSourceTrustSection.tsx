import { Code, Eye, Shield } from 'lucide-react';
import { Card, CardTitle, IconTile } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ENGINE_REPO_URL } from '@/lib/links';

export default function OpenSourceTrustSection() {
  return (
    <Section>
      <SectionHeader
        title="Source-available. Auditable. Yours to run."
        lead="We don't ask for trust—we show you the code. FaultMaven Cloud runs this same engine, so whichever way you run it, you are never locked in."
      />

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="flex flex-col">
          <IconTile>
            <Eye aria-hidden="true" />
          </IconTile>
          <CardTitle className="mb-3">Every line is public</CardTitle>
          <p className="mb-4 flex-grow text-slate-600 dark:text-slate-400">
            Every line of the core troubleshooting engine is public on GitHub — fair source, not a black box. No proprietary lock-in. Fork it, audit it, extend it.
          </p>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://img.shields.io/github/last-commit/FaultMaven/faultmaven?style=flat-square&color=blue" alt="Date of the most recent commit to the FaultMaven engine" className="h-5" />
            <a href={ENGINE_REPO_URL} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
              View on GitHub →
            </a>
          </div>
        </Card>

        <Card>
          <IconTile>
            <Shield aria-hidden="true" />
          </IconTile>
          <CardTitle className="mb-3">Your data stays yours</CardTitle>
          <p className="text-slate-600 dark:text-slate-400">
            Self-hosted means your cases, the logs and configs you share, and your knowledge base are stored on your own disk, and retrieval runs with no network. Investigation prompts go only to the model provider you choose. And because the Copilot runs client-side in your browser, FaultMaven never asks for production API keys or root credentials. It holds the flashlight and reads the manuals; you fix the plumbing.
          </p>
        </Card>

        <Card>
          <IconTile>
            <Code aria-hidden="true" />
          </IconTile>
          <CardTitle className="mb-3">Fair-source licensed (FSL-1.1-ALv2)</CardTitle>
          <p className="text-slate-600 dark:text-slate-400">
            Run FaultMaven in your business, modify it for your needs, and audit every line. Each release converts to Apache 2.0 two years after it ships — the same fair-source model used by Sentry.
          </p>
        </Card>
      </div>
    </Section>
  );
}
