'use client';

import Button from '../ui/Button';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-6">
          Join the Private Beta
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-center">
          We&apos;re working with select engineers and organizations to refine FaultMaven. Here&apos;s how you can get involved:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50 flex flex-col hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              SREs & Operations Engineers
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              Get early access to FaultMaven 1.0 and help shape its features with your real-world troubleshooting scenarios.
            </p>
            <Button asChild href="/waitlist" variant="primary" className="text-center">
              Apply for Early Access
            </Button>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50 flex flex-col hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Investors & Partners
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              Explore partnership opportunities with a unique approach to AIOps, backed by seasoned expertise.
            </p>
            <Button asChild href="/contact" variant="secondary" className="text-center">
              Request Vision Deck
            </Button>
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50 flex flex-col hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Engineers & Builders
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              Interested in joining our mission to transform operational troubleshooting? Let&apos;s talk about future opportunities.
            </p>
            <Button asChild href="/contact" variant="secondary" className="text-center">
              Explore Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
