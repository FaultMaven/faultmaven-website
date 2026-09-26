import { LayoutDashboard, PanelRight, Slack } from 'lucide-react';
import Link from '@/components/ui/Link';
import { Card, CardTitle, IconTile, cardSubtitleClass } from '@/components/ui/card';
import { Section, SectionHeader, textLinkClass } from '@/components/ui/Section';
import { CHROME_WEB_STORE_URL, COMMUNITY_SLACK_URL, TRY_CLOUD_URL } from '@/lib/links';


export default function SurfacesSection() {
  return (
    <Section>
      <SectionHeader
        title="Three ways to bring FaultMaven to work"
        lead="The same engine, met where you already work — in the browser, alongside the page you are staring at, or in the channel where the incident is already being discussed."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {/* Dashboard — the web app */}
        <Card className="flex flex-col">
          <IconTile>
            <LayoutDashboard aria-hidden="true" />
          </IconTile>
          <CardTitle>FaultMaven Dashboard</CardTitle>
          <p className={`${cardSubtitleClass} mt-2 mb-4`}>In your browser · nothing to install</p>
          <p className="mb-4 flex-grow text-slate-600 dark:text-slate-400">
            The whole product in a tab. Open a case, paste the logs and configs you already have in front of you, and work it through to a conclusion — with the transcript, the hypotheses and the evidence all in one place.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <a href={TRY_CLOUD_URL} className={textLinkClass}>
              Cloud beta is open
            </a>{' '}
            — sign up with your email, free while it is in beta. Or run the same dashboard yourself with Standalone.
          </p>
        </Card>

        {/* Copilot — individual */}
        <Card className="flex flex-col">
          <IconTile>
            <PanelRight aria-hidden="true" />
          </IconTile>
          <CardTitle>FaultMaven Copilot</CardTitle>
          <p className={`${cardSubtitleClass} mt-2 mb-4`}>For the individual engineer · browser extension</p>
          <p className="mb-4 flex-grow text-slate-600 dark:text-slate-400">
            A browser side-panel that stays with you across tabs — Grafana, the AWS Console, Datadog, your terminal output. You sign in and it&apos;s yours: paste a log, capture the page, and work the problem without leaving what you&apos;re looking at.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
              Available now on the Chrome Web Store
            </a>{' '}
            — Chrome, Edge, Brave, and other Chromium browsers. Works against FaultMaven Cloud or your own self-hosted server.
          </p>
        </Card>

        {/* FaultMaven for Slack — team */}
        <Card className="flex flex-col">
          <IconTile>
            <Slack aria-hidden="true" />
          </IconTile>
          <CardTitle>FaultMaven for Slack</CardTitle>
          <p className={`${cardSubtitleClass} mt-2 mb-4`}>For the team · in the channel</p>
          <p className="mb-4 flex-grow text-slate-600 dark:text-slate-400">
            Invite it to any channel and @mention it like the teammate who knows every runbook. Always on and shared by the whole team — a go-to first responder, right in the channel where the conversation is already happening.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Try it with no account and nothing installed in the{' '}
            <a href={COMMUNITY_SLACK_URL} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
              FaultMaven Community Slack
            </a>
            .{' '}
            <Link href="/slack" className={textLinkClass}>
              Learn more
            </Link>
          </p>
        </Card>
      </div>
    </Section>
  );
}
