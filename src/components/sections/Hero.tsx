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
              Stop Solving the Same Problem Twice
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
              You know this pain: It's 3 AM. Production is down. You've seen this error before. But where's the fix? Slack? Confluence? Someone's head?
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">FaultMaven is your AI copilot that actually remembers.</span> Deploy locally in minutes with Docker Compose, or scale with Enterprise Cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="primary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Get Started
              </Button>
              <Button asChild href="/product" variant="secondary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              Need team collaboration, SSO, or managed hosting? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contact Sales</a>
            </p>
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
