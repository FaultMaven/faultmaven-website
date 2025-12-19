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
          FaultMaven is open core. Run it yourself or let us manage it for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LEFT CARD: SELF-HOSTED */}
          <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Github className="w-8 h-8 text-slate-900 dark:text-slate-100" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                FaultMaven Core
              </h3>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-4">
              Free Forever · Docker Compose
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 mb-6">
              <strong>Best for:</strong> Individual engineers, air-gapped environments, and total data sovereignty.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Individual user</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Self-managed Docker Compose stack</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>SQLite (local disk), local ChromaDB</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Your personal knowledge base only</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Basic auth (single user)</span>
              </li>
            </ul>

            <Button
              asChild
              href="https://github.com/FaultMaven/faultmaven"
              variant="secondary"
              className="w-full"
            >
              Deploy Now
            </Button>
          </div>

          {/* RIGHT CARD: FAULTMAVEN ENTERPRISE */}
          <div className="p-8 border-2 border-blue-500 dark:border-blue-600 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-800/50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                RECOMMENDED
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                FaultMaven Enterprise
              </h3>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
              Subscription-based · SaaS
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 mb-6">
              <strong>Best for:</strong> Teams who need high availability, shared context, and zero maintenance.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Organization / multi-team</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Managed HA K8s on AWS/GCP</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Managed PostgreSQL, Redis, S3</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Global KB + Team KB + shared cases</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span>SSO/SAML (Okta, Azure AD, Google)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Slack & PagerDuty integrations, 99.9% SLA</span>
              </li>
            </ul>

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
          Built on the same core analysis engine. Use FaultMaven Core for personal context, or FaultMaven Enterprise for shared team intelligence.
        </p>
      </div>
    </section>
  );
}
