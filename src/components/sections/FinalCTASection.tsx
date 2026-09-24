'use client';

import Button from '../ui/Button';
import { CHROME_WEB_STORE_URL, ENGINE_REPO_URL, SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          Two Ways to Run FaultMaven
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
          The same engine either way. Start on Cloud today, or run it on your own hardware.
        </p>

        {/* The two paths, side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-600 rounded-xl p-8 shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Let us run it for you
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              Sign up for FaultMaven Cloud with your email and work a case a minute later — nothing
              to install or operate, and your team can share what it learns. In beta it is free,
              with a daily limit on investigation turns.
            </p>
            <Button asChild href={TRY_CLOUD_URL} variant="primary" className="w-full text-lg">
              Start on FaultMaven Cloud
            </Button>
          </div>

          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Run it yourself
            </h3>
            <pre className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-400 font-mono text-sm block">
{`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
./faultmaven.sh start`}
              </code>
            </pre>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              Free forever. Set one model provider&apos;s API key in{' '}
              <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">.env</code>{' '}
              first.
            </p>
            <Button asChild href={SELF_HOST_PATH} variant="secondary" className="w-full text-lg">
              Self-hosting guide →
            </Button>
          </div>
        </div>

        {/* Secondary Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Work Beside the Page You Are Reading
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              FaultMaven Copilot is on the Chrome Web Store. One install works against Cloud or a server you self-host.
            </p>
            <Button asChild href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" variant="secondary" className="w-full">
              Get the Copilot extension
            </Button>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Want to Contribute?
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              FaultMaven is fair source — every line is public. We welcome PRs.
            </p>
            <Button asChild href={ENGINE_REPO_URL} variant="secondary" className="w-full">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
