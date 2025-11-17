'use client';

import { Check, Github, Cloud } from 'lucide-react';
import Button from '../ui/Button';

export default function DeploymentOptionsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          Choose Your Deployment Path
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          One platform, two ways to deploy. Start with open source for privacy and control, or go enterprise for collaboration and scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Open Source Path */}
          <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-8 h-8 text-slate-900 dark:text-slate-100" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Open Source
              </h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              Privacy-first, self-hosted, single-user deployment. Deploy locally in minutes via Docker Compose.
            </p>

            <div className="mb-6">
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Free Forever</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Apache 2.0 License</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Zero-configuration Docker deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Complete data privacy & control</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">SQLite + lightweight JWT auth</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Perfect for individual engineers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Auditable, open-source codebase</span>
              </li>
            </ul>

            <Button
              asChild
              href="https://github.com/FaultMaven/FaultMaven"
              variant="secondary"
              className="w-full"
            >
              View on GitHub
            </Button>
          </div>

          {/* Enterprise SaaS Path */}
          <div className="p-8 border-2 border-blue-500 dark:border-blue-600 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-800/50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                RECOMMENDED
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Enterprise Cloud
              </h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              Fully managed SaaS with team collaboration, SSO, and enterprise-grade security.
            </p>

            <div className="mb-6">
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">$49-99/user/month</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Now in Private Beta</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Zero infrastructure management</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Team collaboration & knowledge sharing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">SSO & enterprise authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">PostgreSQL + managed infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Priority support & SLAs</span>
              </li>
            </ul>

            <Button
              asChild
              href="/waitlist"
              variant="primary"
              className="w-full"
            >
              Request Enterprise Access
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Both paths share the same core architecture—built on our open-source microservices foundation
        </p>
      </div>
    </section>
  );
}
