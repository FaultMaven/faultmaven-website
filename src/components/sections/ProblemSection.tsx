import { IconBellSlash, IconDocumentMinus, IconLoop } from '@/components/icons/homepage';
import { Card, CardTitle, IconTile } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/Section';

const gaps = [
  {
    Icon: IconLoop,
    title: 'Your Observability Stack Tells You What. Not Why.',
    body: "Dashboards light up red. Alerts fire. You know something is broken—but you're still manually hunting through logs, correlating timestamps, and guessing at root cause.",
  },
  {
    Icon: IconBellSlash,
    title: "Generic AI Doesn't Know Your Systems",
    body: "ChatGPT can explain a stack trace. It can't see your Kubernetes configs, your deployment history, or the fix your teammate applied last month. Every incident starts from zero.",
  },
  {
    Icon: IconDocumentMinus,
    title: 'Tribal Knowledge Disappears',
    body: 'The senior engineer who knew why that service fails under load? They left. Their expertise is buried in Slack threads nobody will ever find.',
  },
];

export default function ProblemSection() {
  return (
    <Section>
      <SectionHeader title="Three Gaps Between the Alert and the Fix" />
      <div className="grid gap-8 md:grid-cols-3">
        {gaps.map(({ Icon, title, body }) => (
          <Card key={title}>
            <IconTile>
              <Icon aria-hidden="true" />
            </IconTile>
            <CardTitle className="mb-3">{title}</CardTitle>
            <p className="text-slate-600 dark:text-slate-400">{body}</p>
          </Card>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
        FaultMaven is the ER surgeon for systems already on the table — not the predictive AIOps platform forecasting next quarter&apos;s failures. It injects deep context into AI reasoning so you get answers that actually work for <strong className="text-slate-900 dark:text-slate-200">YOUR</strong> system.
      </p>
    </Section>
  );
}
