'use client';

import Button from '../ui/Button';
import DemoVideo from '../slack/DemoVideo';
import { SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full">
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                Fair Source · Self-Hostable · No Production Credentials
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50 leading-tight"
            >
              The AI Troubleshooting Copilot — Run It Yourself, or Let Us Run It for You
            </h1>

            <div className="text-lg md:text-xl mb-6 max-w-2xl text-slate-600 dark:text-slate-400 space-y-4">
              <p className="font-semibold text-slate-900 dark:text-slate-200">
                Same engine either way. Fair source, so you are never locked in.
              </p>
              <p>
                FaultMaven works a problem the way a
                seasoned engineer does — goal-driven, methodical, and grounded in evidence — and
                leads, driving the investigation to the next decisive step.
              </p>
              <p>
                It correlates the logs, metrics, and configs you bring it with your runbooks, docs,
                and past fixes, and every problem it solves becomes knowledge it reuses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild href={TRY_CLOUD_URL} variant="primary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Start on FaultMaven Cloud
              </Button>
              <Button asChild href={SELF_HOST_PATH} variant="secondary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Self-host it
              </Button>
            </div>
            <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
              FaultMaven Cloud runs it for you, with nothing to install or operate. Self-hosting runs
              the same fair-source engine on your own hardware. Or{' '}
              <a
                href="/investigation"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                read a real investigation
              </a>{' '}
              first.
            </p>
          </div>
          {/* The column is half of max-w-6xl less its gutters and gap: 520px at most. */}
          <DemoVideo
            priority
            sizes="(min-width: 1152px) 520px, (min-width: 768px) calc(50vw - 56px), calc(100vw - 48px)"
            caption="Uncut screen recording, no sound: FaultMaven works an api-gateway 503 in a Slack thread, from the PagerDuty alert to a resolved case."
          />
        </div>
        <div className="text-center mt-24">
          <hr className="my-10 border-slate-200 dark:border-slate-700" />
          <div className="mx-auto max-w-2xl mt-10">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              No magic. The evidence you share, the runbooks it retrieves, and a method it does not skip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
