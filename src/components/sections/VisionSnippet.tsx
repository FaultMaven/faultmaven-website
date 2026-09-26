import Button from '../ui/Button';
import { Card } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/Section';

// Phase labels carry status colour: green is what ships now, blue is next.
const phases = [
  { label: 'Phase 1 · Now', tone: 'text-green-700 dark:text-green-400', name: 'Copilot', desc: 'Turn-by-turn. Zero access to your systems — it works only from what you share.' },
  { label: 'Phase 2 · Next', tone: 'text-blue-700 dark:text-blue-400', name: 'Investigator', desc: 'Hand it a diagnostic data bundle; get back a diagnosis. Systems stay isolated.' },
  { label: 'Phase 3 · Roadmap', tone: 'text-slate-600 dark:text-slate-300', name: 'Integrated Agent', desc: 'Connected to your stack, alert-triggered — autonomous from detection to fix.' },
];

export default function VisionSnippet() {
  return (
    <Section tone="muted" width="narrow">
      <SectionHeader
        title="The vision: earned autonomy"
        lead={
          <>
            <p className="font-medium text-slate-700 dark:text-slate-300">Trust first. Autonomy earned.</p>
            <p>
              FaultMaven is a copilot by choice, not by limitation. Rather than demand broad access on day one, it starts hands-on and earns more autonomy as it proves itself — growing in three phases:
            </p>
          </>
        }
      />
      <div className="mb-10 grid gap-6 sm:grid-cols-3">
        {phases.map((p) => (
          <Card key={p.name} className="md:p-6">
            <p className={`mb-1 text-xs font-semibold uppercase tracking-wide ${p.tone}`}>{p.label}</p>
            <p className="mb-1 font-semibold text-slate-900 dark:text-slate-100">{p.name}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button asChild href="/roadmap" variant="secondary">
          Read the roadmap →
        </Button>
      </div>
    </Section>
  );
}
