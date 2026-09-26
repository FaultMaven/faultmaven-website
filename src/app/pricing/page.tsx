import type { ReactNode } from 'react';
import Button from '@/components/ui/Button';
import { BulletList, Card, CardTitle, CheckList } from '@/components/ui/card';
import { PageHeader, Section, SectionHeader } from '@/components/ui/Section';
import { SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';


export const metadata = pageMetadata({
  title: 'Run it yourself, or let us run it for you',
  description:
    'The same engine either way. FaultMaven Cloud runs it for you with nothing to operate — free during beta, with a daily limit on investigation turns. Self-hosting is free forever. Because the engine is fair source, you are never locked in to either.',
  path: '/pricing',
});

const noteClass = 'rounded-lg border p-4 text-sm';
const blueNote = `${noteClass} border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/40`;
const greyNote = `${noteClass} border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50`;

function Feature({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <strong className="text-slate-900 dark:text-slate-50">{title}</strong>
      <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">{children}</span>
    </>
  );
}

const comparison = [
  ['Knowledge base', 'Global + personal scopes; ships with starter runbooks', 'Adds the team scope — share runbooks with your team'],
  ['Hosting', 'Your infrastructure (Docker Compose)', 'Fully managed (Kubernetes)'],
  ['LLM', 'Bring your own keys', 'Managed multi-provider routing'],
  ['Tenancy', 'Single-user', 'Multi-tenant (orgs, teams, RBAC, SSO)'],
  ['Sessions', 'In-process (reset on restart)', 'Persistent'],
  ['License', 'Open core (fair source, FSL-1.1-ALv2)', 'Same fair-source engine, run as a managed service'],
];

function Faq({ question, children }: { question: string; children: ReactNode }) {
  return (
    <Card className="md:p-6">
      <CardTitle className="mb-3 text-lg">{question}</CardTitle>
      <div className="space-y-3 text-slate-700 dark:text-slate-300">{children}</div>
    </Card>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Run it yourself, or let us run it for you"
        lead={
          <p>
            The same engine either way. FaultMaven Cloud runs it for you with nothing to operate — free during beta, with a daily limit on investigation turns. Self-hosting is free forever. Because the engine is fair source, you are never locked in to either.
          </p>
        }
      />

      {/* Deployment options */}
      <Section>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Cloud */}
          <Card highlight className="flex flex-col">
            <CardTitle className="mb-2 text-2xl">Cloud</CardTitle>
            <p className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Free during beta</p>
            <p className="mb-1 text-slate-600 dark:text-slate-400">Multi-tenant SaaS · hosted by FaultMaven</p>
            <p className="mb-6 text-sm italic text-slate-500">FaultMaven run for you — nothing to install or operate.</p>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              The same engine as Standalone, operated by us, plus what a single-user install cannot do: the team knowledge scope, which needs multi-tenancy.
            </p>
            <CheckList
              className="mb-6 space-y-3"
              items={[
                <Feature key="1" title="Team knowledge sharing">Share personal runbooks with your team. Knowledge spans three scopes — global, team, and personal.</Feature>,
                <Feature key="2" title="Organization & access management">Organizations, teams, and role-based access control, with SSO (SAML/OIDC).</Feature>,
                <Feature key="3" title="Managed infrastructure">We run it on Kubernetes with a managed database, vector store, and sessions. No ops, no capacity planning.</Feature>,
                <Feature key="4" title="Managed LLM routing">A multi-provider fallback chain, managed for you — no API keys to wrangle.</Feature>,
                <Feature key="5" title="Persistent sessions across devices">Investigation sessions are saved across restarts and reachable from any device — not held in-process like a single-instance deployment. (Your cases persist either way.)</Feature>,
              ]}
            />
            <p className={`${blueNote} mb-8 font-medium text-slate-700 dark:text-slate-300`}>
              In beta: free, with a daily limit on investigation turns.
              Sign up with your email, no invite needed. Pricing will be
              announced before general availability.
            </p>
            <Button asChild href={TRY_CLOUD_URL} variant="primary" className="mt-auto w-full">
              Start on FaultMaven Cloud →
            </Button>
          </Card>

          {/* Standalone */}
          <Card className="flex flex-col">
            <CardTitle className="mb-2 text-2xl">Standalone</CardTitle>
            <p className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Free forever
              <span className="ml-2 text-base font-normal tracking-normal text-slate-600 dark:text-slate-400">· Fair Source</span>
            </p>
            <p className="mb-1 text-slate-600 dark:text-slate-400">Self-hosted · FaultMaven Core</p>
            <p className="mb-6 text-sm italic text-slate-500">The complete engine, on your own infrastructure.</p>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Run FaultMaven as a single instance with Docker Compose. SQLite, an embedded vector store, and in-process caching — no external services to operate.
            </p>
            <CheckList
              className="mb-6"
              items={[
                'Full AI troubleshooting and investigation engine',
                'Ships with starter runbooks, auto-loaded on first start',
                'Build a personal knowledge base; generate runbooks from resolved cases',
                'Browser extension (Copilot) + web Dashboard',
                'Multi-LLM support — 9 providers, bring your own API keys',
                'Fair source (FSL-1.1-ALv2) — audit it, fork it, run it in your business',
              ]}
            />
            <div className={`${greyNote} mb-4`}>
              <p className="mb-2 font-semibold text-slate-900 dark:text-slate-50">You provide:</p>
              <BulletList
                className="space-y-1 text-slate-600 dark:text-slate-400"
                items={[
                  'Infrastructure (Docker, 8GB+ RAM)',
                  'An API key for one model provider (Gemini, OpenAI, or Anthropic recommended)',
                ]}
              />
            </div>
            <div className={`${greyNote} mb-8`}>
              <p className="mb-2 font-semibold text-slate-900 dark:text-slate-50">Best for:</p>
              <BulletList
                className="space-y-1 text-slate-600 dark:text-slate-400"
                items={[
                  'Engineers who want full control',
                  'Keeping cases and knowledge on your own hardware',
                  'Contributors',
                  'Running it day to day, with no usage limits',
                ]}
              />
            </div>
            <Button asChild href={SELF_HOST_PATH} variant="secondary" className="mt-auto w-full">
              Self-host it →
            </Button>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="muted" width="narrow">
        <SectionHeader title="Pricing FAQs" />
        <div className="space-y-6">
          <Faq question="What's the difference between Standalone and Cloud?">
            <p className="text-slate-600 dark:text-slate-400">The same engine, run two ways:</p>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50">
                    <th scope="col" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100">Standalone</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100">Cloud</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {comparison.map(([feature, standalone, cloud]) => (
                    <tr key={feature}>
                      <th scope="row" className="px-3 py-2 font-normal text-slate-700 dark:text-slate-300">{feature}</th>
                      <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{standalone}</td>
                      <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{cloud}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-medium">
              Standalone gives you full control; Cloud adds team collaboration and removes the ops.
            </p>
          </Faq>

          <Faq question="I'm a solo engineer. Should I use Cloud?">
            <p>
              Either works. Cloud is the quickest way to be productive — nothing to install, no API keys to manage — and it works just as well for one person as for a team. Standalone has the same troubleshooting engine, ships with the same starter runbooks, and runs free on your own machine if you would rather operate it yourself.
            </p>
            <p>
              The one thing only Cloud does is share knowledge across a team, because that needs multi-tenancy.
            </p>
          </Faq>

          <Faq question="What runbooks are included?">
            <p className="text-slate-600 dark:text-slate-400">
              Both deployments ship with starter runbooks covering common stacks:
            </p>
            <BulletList
              className="grid gap-2 md:grid-cols-2"
              items={[
                'Container orchestration (Kubernetes, Docker)',
                'Databases (PostgreSQL, MySQL, Redis, MongoDB)',
                'Cloud platforms (AWS, GCP, Azure)',
                'Message queues (Kafka, RabbitMQ)',
                'Web servers (Nginx, Apache)',
                'Monitoring (Prometheus, Grafana)',
              ]}
            />
            <p>
              They load on first start, and you extend them with your own — including runbooks generated from resolved cases.
            </p>
          </Faq>

          <Faq question="How does team knowledge sharing work?">
            <p>Runbooks live in three scopes:</p>
            <BulletList
              className="space-y-2"
              items={[
                <span key="g"><strong>Global</strong> — ships with FaultMaven for every user; the community can contribute more.</span>,
                <span key="p"><strong>Personal</strong> — yours, created manually or generated from a resolved case.</span>,
                <span key="t"><strong>Team</strong> — a personal runbook you choose to share with your team.</span>,
              ]}
            />
            <p>
              The team scope requires multi-tenancy, so it&apos;s a Cloud capability. Global and personal scopes work in Standalone too.
            </p>
          </Faq>

          <Faq question="Can I contribute runbooks back?">
            <p>
              Yes. Anyone can open a pull request to add runbooks to the public repository. Once approved, they ship in the global scope for every FaultMaven user.
            </p>
          </Faq>

          <Faq question="Is it free?">
            <p>
              Standalone is free forever under the fair-source FSL license, with no usage limits — deploy it and use it.
            </p>
            <p>
              FaultMaven Cloud is free while it is in beta, with a daily limit on investigation turns. Sign up with your email — there is no waiting list and no invite code. Pricing will be announced before general availability.
            </p>
          </Faq>

          <Faq question="Am I locked in to Cloud?">
            <p>
              No. Cloud runs the same fair-source engine you can run yourself, so if FaultMaven Cloud ever stops suiting you, you can self-host it for free. Be aware that moving is manual today: there is no automated migration, so you would re-upload your knowledge base documents, and past cases stay where they are (a case can be exported to Markdown from the dashboard). If an export path matters to you, tell us — it is the kind of thing beta feedback decides.
            </p>
          </Faq>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-slate-600 dark:text-slate-400">More questions?</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild href="/faq" variant="secondary">
              View full FAQ
            </Button>
            <Button asChild href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section size="compact" width="narrow">
        <SectionHeader
          spacing="tight"
          title="Start working a case"
          lead="Sign up for FaultMaven Cloud and put a real incident to it a minute later — or self-host it with one command (budget 10–20 minutes for the first run, mostly the 2.3 GB image pull). No credit card either way."
        />
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild href={TRY_CLOUD_URL} variant="primary">
            Start on FaultMaven Cloud →
          </Button>
          <Button asChild href={SELF_HOST_PATH} variant="secondary">
            Self-host it
          </Button>
        </div>
      </Section>
    </>
  );
}
