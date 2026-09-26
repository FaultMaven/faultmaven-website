import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, SectionHeader } from '@/components/ui/Section';

// Knowledge is runbooks, at three scopes that differ only in who can see
// them. Case history is not a scope: a case becomes knowledge only when it is
// turned into a runbook. Narrowest scope on top; one blue scale that deepens
// toward the shared base.
const tiers = [
  {
    name: 'Personal',
    desc: 'Your own runbooks — written by you, or generated from a case you resolved',
    tags: ['Written by you', 'Generated from resolved cases', 'Visible to you'],
    width: 'md:w-2/3',
    dark: false,
    surface: 'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40',
  },
  {
    name: 'Team',
    badge: 'Cloud',
    desc: 'Personal runbooks shared with your organization',
    tags: ['Shared by teammates', 'Your services and procedures', 'Visible to your organization'],
    width: 'md:w-5/6',
    dark: false,
    surface: 'border-blue-300 bg-blue-100 dark:border-blue-800 dark:bg-blue-900/50',
  },
  {
    name: 'Global',
    badge: 'Included',
    desc: '91 curated runbooks, 641 documented causes — shipped with every deployment',
    tags: ['Kubernetes', 'PostgreSQL', 'Redis', 'AWS/GCP/Azure'],
    width: 'w-full',
    dark: true,
    surface: 'border-blue-700 bg-blue-600 dark:bg-blue-700',
  },
];

export default function TieredKnowledgeEngineSection() {
  return (
    <Section>
      <SectionHeader
        title="Knowledge that grows as you resolve cases"
        lead="FaultMaven's knowledge is runbooks — reusable procedures — kept at three scopes that differ only in who can see them. Every investigation searches all the runbooks you can see."
      />

      <div className="mx-auto max-w-4xl">
        <div className="space-y-3">
          {tiers.map((t) => (
            <div key={t.name} className={cn('mx-auto w-full rounded-xl border p-6', t.width, t.surface)}>
              <div className="mb-2 flex items-center justify-between gap-4">
                <h3
                  className={cn(
                    'text-sm font-semibold uppercase tracking-wider',
                    t.dark ? 'text-white' : 'text-blue-800 dark:text-blue-200',
                  )}
                >
                  {t.name}
                </h3>
                {t.badge ? (
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-xs font-medium',
                      t.dark ? 'bg-white/15 text-white' : 'bg-white text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                    )}
                  >
                    {t.badge}
                  </span>
                ) : null}
              </div>
              <p className={cn('mb-3', t.dark ? 'text-blue-50' : 'text-slate-700 dark:text-slate-300')}>{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      'rounded-md px-2 py-1 text-xs',
                      t.dark ? 'bg-white/15 text-white' : 'bg-white/80 text-slate-700 dark:bg-slate-900/60 dark:text-slate-300',
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ArrowDown aria-hidden="true" className="mx-auto my-6 h-6 w-6 text-slate-400 dark:text-slate-500" />
        {/* An OOMKilled pod, as an example: what the case supplies beside what the knowledge base does. */}
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/50">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Evidence — from this case</p>
            <p className="text-slate-700 dark:text-slate-300">The pod events and container logs you shared</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">Knowledge — from the runbooks</p>
            <p className="text-slate-700 dark:text-slate-300">The global runbook for OOMKilled pods</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center text-lg">
        <p className="text-slate-600 dark:text-slate-400">
          FaultMaven reasons over both and keeps them apart: a runbook says what might be true; the evidence says what is.
        </p>
        <p className="font-medium text-slate-700 dark:text-slate-300">
          When a case resolves, FaultMaven can turn it into a runbook — that is how every problem it solves becomes knowledge it reuses. Share it, and your team starts from it too.
        </p>
      </div>
    </Section>
  );
}
