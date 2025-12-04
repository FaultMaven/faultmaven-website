'use client';

import { Check, Github, Cloud } from 'lucide-react';
import Button from '../ui/Button';

export default function DeploymentOptionsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          Choose Your Deployment
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          Run self-hosted for absolute data sovereignty. Choose Enterprise Cloud for team collaboration and scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Open Source Path */}
          <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-8 h-8 text-slate-900 dark:text-slate-100" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Open Source (Self-Hosted)
              </h3>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-300 mb-6">
              <strong>Free Forever · Apache 2.0</strong>
              <br /><br />
              Deploy on your infrastructure in under 5 minutes. All data stays local. Perfect for individual engineers or privacy-first environments.
            </p>

            <div className="space-y-4 mb-8 text-sm">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Scope:</p>
                <p className="text-slate-700 dark:text-slate-300">Individual user</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Infrastructure:</p>
                <p className="text-slate-700 dark:text-slate-300">Self-managed Docker Compose stack</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Data Storage:</p>
                <p className="text-slate-700 dark:text-slate-300">SQLite (local disk), local ChromaDB</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Context Scope:</p>
                <p className="text-slate-700 dark:text-slate-300">Your personal knowledge base only</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Identity:</p>
                <p className="text-slate-700 dark:text-slate-300">Basic auth (single user)</p>
              </div>
            </div>

            <Button
              asChild
              href="https://github.com/FaultMaven/faultmaven"
              variant="secondary"
              className="w-full"
            >
              Deploy Now
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
            <p className="text-base text-slate-700 dark:text-slate-300 mb-6">
              <strong>Team Pricing · Private Beta</strong>
              <br /><br />
              Fully managed SaaS with team collaboration, SSO, and shared knowledge bases. Zero infrastructure to maintain.
            </p>

            <div className="space-y-4 mb-8 text-sm">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Scope:</p>
                <p className="text-slate-700 dark:text-slate-300">Organization / multi-team</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Infrastructure:</p>
                <p className="text-slate-700 dark:text-slate-300">Managed HA K8s on AWS/GCP</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Data Storage:</p>
                <p className="text-slate-700 dark:text-slate-300">Managed PostgreSQL, Redis, S3</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Context Scope:</p>
                <p className="text-slate-700 dark:text-slate-300">Team knowledge base + shared cases</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Identity:</p>
                <p className="text-slate-700 dark:text-slate-300">SSO/SAML (Okta, Azure AD, Google)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Additional:</p>
                <p className="text-slate-700 dark:text-slate-300">Slack & PagerDuty integrations, 99.9% SLA</p>
              </div>
            </div>

            <Button
              asChild
              href="/contact"
              variant="primary"
              className="w-full"
            >
              Request Access
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Both options run on the same open-source microservices foundation. Start self-hosted, upgrade to Enterprise when your team is ready.
        </p>
      </div>
    </section>
  );
}
