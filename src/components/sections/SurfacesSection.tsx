'use client';

import { PanelRight, Slack } from 'lucide-react';

export default function SurfacesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          Two ways to bring FaultMaven to work
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          The same engine, met where you already work — one for the individual engineer, one for the whole team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Copilot — individual */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-2">
              <PanelRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                FaultMaven Copilot
              </h3>
            </div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              For the individual engineer · browser extension
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              A browser side-panel that stays with you across tabs — Grafana, the AWS Console, Datadog, your terminal output. You sign in and it&apos;s yours: paste a log, capture the page, and work the problem without leaving what you&apos;re looking at.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Coming soon to the Chrome Web Store.
            </p>
          </div>

          {/* Slack agent — team */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-2">
              <Slack className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                FaultMaven Slack Agent
              </h3>
            </div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              For the team · in your Slack workspace
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Invite it to any channel and @mention it like the teammate who has seen every incident and knows every runbook. Always on and shared by the whole team — a go-to first responder, right in the channel where the conversation is already happening.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Coming soon to the Slack Marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
