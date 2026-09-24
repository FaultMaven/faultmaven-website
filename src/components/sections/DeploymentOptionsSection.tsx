'use client';

import { Check, Server, Cloud } from 'lucide-react';
import Button from '../ui/Button';
import { SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';

function Item({ tone, children }: { tone: 'blue' | 'green'; children: React.ReactNode }) {
  const color = tone === 'green' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400';
  return (
    <li className="flex items-start gap-2">
      <Check className={`w-4 h-4 ${color} mt-0.5 flex-shrink-0`} />
      <span>{children}</span>
    </li>
  );
}

export default function DeploymentOptionsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          Run It Yourself, or Let Us Run It for You
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          One engine, two ways to run it. Because it is fair source and self-hostable, whichever
          you choose, you are never locked in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* FAULTMAVEN CLOUD */}
          <div className="p-8 border-2 border-blue-500 dark:border-blue-600 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-800/50 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                FaultMaven Cloud
              </h3>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
              We run it for you
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 mb-6">
              <strong>Best for:</strong> individuals and teams who would rather use FaultMaven than operate it.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-slate-700 dark:text-slate-300 flex-grow">
              <Item tone="blue">Nothing to install or operate — sign up with your email</Item>
              <Item tone="blue">The same engine as the self-hosted version</Item>
              <Item tone="blue">Team knowledge sharing — share runbooks with your team</Item>
              <Item tone="blue">Managed upgrades, storage, and model routing — no API keys to manage</Item>
              <Item tone="blue">In beta: free, with a daily limit on investigation turns</Item>
            </ul>

            <Button asChild href={TRY_CLOUD_URL} variant="primary" className="w-full">
              Start on FaultMaven Cloud
            </Button>
          </div>

          {/* STANDALONE (SELF-HOSTED) */}
          <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:border-green-500 dark:hover:border-green-600 transition-colors duration-200 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-8 h-8 text-green-700 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Standalone
              </h3>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-4">
              You run it yourself · Free forever
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 mb-6">
              <strong>Best for:</strong> engineers who want FaultMaven on hardware they control.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-slate-700 dark:text-slate-300 flex-grow">
              <Item tone="green">One command with Docker Compose</Item>
              <Item tone="green">Cases, evidence, and knowledge base stay on your disk</Item>
              <Item tone="green">Retrieval runs with no network — the embedding model ships in the image</Item>
              <Item tone="green">The model provider you choose, with your own key</Item>
              <Item tone="green">Single user · no usage limits</Item>
            </ul>

            <Button asChild href={SELF_HOST_PATH} variant="secondary" className="w-full">
              Self-host it
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Both are built from one codebase, fair source (FSL-1.1-ALv2).{' '}
          <a href="/pricing" className="text-blue-600 dark:text-blue-400 hover:underline">
            Compare them in detail
          </a>
          .
        </p>
      </div>
    </section>
  );
}
