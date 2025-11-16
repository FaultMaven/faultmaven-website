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
            <div className="inline-block mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                🚀 Now in Private Beta with Design Partners
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50 leading-tight"
            >
              AI-Powered Troubleshooting That Reduces MTTR
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
              Your AI Copilot for faster incident resolution. Analyze logs, diagnose issues, and resolve problems—directly in your browser with <span className="font-semibold text-slate-700 dark:text-slate-300">zero integration required</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild href="/waitlist" variant="primary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Apply for Early Access
              </Button>
              <Button asChild href="/product" variant="secondary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroImage}
              alt="FaultMaven AI Copilot in action, analyzing code to reduce MTTR"
              priority
              placeholder="blur"
              className="rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
        <div className="text-center mt-24">
          <hr className="my-10 border-slate-200 dark:border-slate-700" />
          <div className="mx-auto max-w-2xl mt-10">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Built by seasoned SREs and AI experts with real-world operational experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
