'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import heroImage from '../../../public/images/hero-mttr.webp';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full">
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                Fair Source · Self-Hostable · Runs Air-Gapped
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50 leading-tight"
            >
              The AI-Powered Troubleshooting Copilot for Modern Engineering
            </h1>

            <div className="text-lg md:text-xl mb-6 max-w-2xl text-slate-600 dark:text-slate-400 space-y-4">
              <p className="font-semibold text-slate-900 dark:text-slate-200">
                Built to solve, not to chat.
              </p>
              <p>
                FaultMaven works a problem the way a seasoned engineer does — goal-driven,
                methodical, and grounded in evidence. It doesn&apos;t just answer questions; it
                leads, driving the investigation to the next decisive step.
              </p>
              <p>
                It correlates the logs, metrics, and configs you bring it with your runbooks, docs,
                and past fixes to deliver answers grounded in your actual system—not generic
                guesses. Every problem it solves becomes knowledge it reuses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Deploy Now (Free)
              </Button>
              <Button asChild href="#how-it-works" variant="secondary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroImage}
              alt="FaultMaven AI Copilot analyzing logs, metrics, and configs"
              priority
              placeholder="blur"
              className="rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
        <div className="text-center mt-24">
          <hr className="my-10 border-slate-200 dark:border-slate-700" />
          <div className="mx-auto max-w-2xl mt-10">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              No magic. Just deep context, vector search, and your full stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
