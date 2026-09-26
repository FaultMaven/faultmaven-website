import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, SectionHeader } from '@/components/ui/Section';

// Three tiers, narrowest on top. One blue scale that deepens toward the
// shared base, so the tiers read as layers of one system.
const tiers = [
  {
    name: 'PERSONAL CONTEXT',
    desc: 'Your specific environment, configs, and preferences',
    tags: ['Local configurations', 'Recent changes', 'Your infrastructure'],
    width: 'md:w-2/3',
    dark: false,
    surface: 'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40',
  },
  {
    name: 'TEAM KNOWLEDGE',
    badge: 'Cloud',
    desc: 'Indexed runbooks, past cases, and post-mortems',
    tags: ['Runbooks & SOPs', 'Incident history', 'Tribal knowledge'],
    width: 'md:w-5/6',
    dark: false,
    surface: 'border-blue-300 bg-blue-100 dark:border-blue-800 dark:bg-blue-900/50',
  },
  {
    name: 'GLOBAL INTELLIGENCE',
    badge: 'Included',
    desc: '91 curated runbooks, 641 documented causes',
    tags: ['Kubernetes', 'PostgreSQL', 'Redis', 'AWS/GCP/Azure'],
    width: 'w-full',
    dark: true,
    surface: 'border-blue-700 bg-blue-600 dark:bg-blue-700',
  },
];

export default function TieredKnowledgeEngineSection() {
  return (
    <Section>
      <SectionHeader title="Intelligence That Grows With Every Incident" />

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
        <blockquote className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-center font-mono text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300">
          &quot;Based on your deployment manifest, a similar incident your team resolved last month, and known K8s OOMKill patterns...&quot;
        </blockquote>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center text-lg">
        <p className="text-slate-600 dark:text-slate-400">
          When you ask FaultMaven a question, it searches all three tiers—surfacing the most relevant context from global best practices, your team&apos;s documented solutions, and your specific environment.
        </p>
        <p className="font-medium text-slate-700 dark:text-slate-300">
          The result: answers that work for <strong className="text-blue-600 dark:text-blue-400">YOUR</strong> infrastructure, not generic StackOverflow suggestions.
        </p>
      </div>
    </Section>
  );
}
