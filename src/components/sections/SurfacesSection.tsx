'use client';

import { LayoutDashboard, PanelRight, Slack } from 'lucide-react';
import Link from '@/components/ui/Link';
import { CHROME_WEB_STORE_URL, COMMUNITY_SLACK_URL, TRY_CLOUD_URL } from '@/lib/links';

export default function SurfacesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-4">
          Three ways to bring FaultMaven to work
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          The same engine, met where you already work — in the browser, alongside the page you are staring at, or in the channel where the incident is already being discussed.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Dashboard — the web app */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-2">
              <LayoutDashboard className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                FaultMaven Dashboard
              </h3>
            </div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              In your browser · nothing to install
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The whole product in a tab. Open a case, paste the logs and configs you already have in front of you, and work it through to a conclusion — with the transcript, the hypotheses and the evidence all in one place.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <a
                href={TRY_CLOUD_URL}
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Cloud beta is open
              </a>{' '}
              — sign up with your email, free while it is in beta. Or run the same dashboard yourself with Standalone.
            </p>
          </div>

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
              <a
                href={CHROME_WEB_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Available now on the Chrome Web Store
              </a>{' '}
              — Chrome, Edge, Brave, and other Chromium browsers. Works against FaultMaven Cloud or your own self-hosted server.
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
              For the team · in the channel
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Invite it to any channel and @mention it like the teammate who has seen every incident and knows every runbook. Always on and shared by the whole team — a go-to first responder, right in the channel where the conversation is already happening.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Try it with no account and nothing installed in the{' '}
              <a
                href={COMMUNITY_SLACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                FaultMaven Community Slack
              </a>
              .{' '}
              <Link href="/slack" className="text-blue-600 dark:text-blue-400">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
