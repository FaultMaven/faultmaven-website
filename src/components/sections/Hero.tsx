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
                ✨ Open Source & Available Now
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50 leading-tight"
            >
              The AI-Powered Troubleshooting Copilot for Modern Engineering
            </h1>

            <p className="text-lg md:text-xl mb-6 max-w-2xl text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                Stop solving the same problem twice.
              </span>
              <br className="mb-2 block" />
              FaultMaven correlates logs, metrics, and traces to accelerate root cause analysis.
            </p>

            <p className="text-base md:text-lg mb-10 max-w-2xl text-slate-500 dark:text-slate-500">
              Get instant answers based on your team&apos;s past resolutions. Deploy locally in minutes with Docker Compose, or scale with Enterprise Cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Get Started (Self-Hosted)
              </Button>
              <Button asChild href="/product" variant="secondary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                See How It Works
              </Button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
              Need SSO, RBAC, or managed hosting? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Enterprise Options</a>
            </p>
          </div>
          <div className="relative">
            <Image
              src={heroImage}
              alt="FaultMaven AI Copilot analyzing full-stack telemetry"
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
              Built by SREs who got tired of being woken up at 3 AM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
