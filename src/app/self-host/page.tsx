import Button from '@/components/ui/Button';
import { CodeBlock } from '@/components/ui/card';
import { PageHeader, Section, subsectionTitleClass, textLinkClass } from '@/components/ui/Section';
import { DISCUSSIONS_URL, ENGINE_REPO_URL, QUICKSTART_URL, TRY_CLOUD_URL } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Self-host FaultMaven',
  description:
    'Run FaultMaven on your own hardware: one command with Docker Compose, free forever, fair source (FSL-1.1-ALv2). Your cases, evidence and knowledge base stay on your machine.',
  path: '/self-host',
  openGraph: {
    description:
      'One command with Docker Compose. Free forever, no usage limits, fair source. The same engine that runs FaultMaven Cloud.',
  },
});

const codeClass = 'bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[0.9em] font-mono';

function GuideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className={`${subsectionTitleClass} mb-4`}>{title}</h2>
      <div className="space-y-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function SelfHostPage() {
  return (
    <>
      <PageHeader
        align="left"
        width="prose"
        title="Run FaultMaven on your own hardware"
        lead={
          <p>
            One command starts the full FaultMaven engine with Docker Compose — free forever, no
            usage limits, fair source (FSL-1.1-ALv2). It is the same engine FaultMaven Cloud runs,
            so what you can read and audit here is what runs there.
          </p>
        }
      />
      <Section width="prose">

        <GuideSection title="What you need">
          <ul className="list-disc pl-6 space-y-2">
            <li>Docker and Docker Compose</li>
            <li>At least 4 CPU cores, 8 GB RAM and 20 GB of disk</li>
            <li>An API key for one model provider (see below)</li>
          </ul>
        </GuideSection>

        <GuideSection title="Start it">
          <CodeBlock>
            {`git clone https://github.com/FaultMaven/faultmaven.git
cd faultmaven
cp .env.example .env   # set one provider's API key
./faultmaven.sh start`}
          </CodeBlock>
          <p>
            Then open <code className={codeClass}>http://localhost:3333</code>. Budget 10–20 minutes
            for the first run — most of it is a 2.3 GB image pull, because the embedding model
            ships inside the image. Later starts take seconds.
          </p>
        </GuideSection>

        <GuideSection title="What stays on your machine">
          <p>
            Your cases, the evidence you give it and your knowledge base are stored on your own disk.
            Retrieval runs with no network: the embedding model is baked into the image. FaultMaven
            sends no usage data back to us.
          </p>
          <p>
            What does leave is each investigation turn&apos;s prompt, which goes to the model provider
            you configure. An optional redaction layer can scrub keys, tokens and personal data
            before it does.
          </p>
        </GuideSection>

        <GuideSection title="Which model provider">
          <p>
            FaultMaven supports nine providers. For the main investigation role, use one that
            enforces structured output — Gemini (the shipped default), OpenAI or Anthropic. The
            engine drives an investigation from schema-constrained responses, and providers that
            only request the schema in the prompt produce degraded investigations.
          </p>
        </GuideSection>

        <GuideSection title="Local models: where it stands">
          <p>
            There is a <code className={codeClass}>local</code> provider for OpenAI-compatible
            endpoints such as vLLM or Ollama, and it decides tool-calling support from the endpoint
            rather than the model&apos;s name. What we have not done yet is verify a full
            investigation end to end on an open-weights model, and local endpoints are best-effort
            for structured output. Until we publish a tested configuration, we recommend a hosted
            provider for the investigation role.
          </p>
          <p>
            If you run FaultMaven against a local model, we would like to hear how it went —{' '}
            <a
              href={DISCUSSIONS_URL}
              className={textLinkClass}
            >
              GitHub Discussions
            </a>{' '}
            is the place.
          </p>
        </GuideSection>

        <GuideSection title="How it differs from Cloud">
          <p>
            Same engine, run two ways. A self-hosted install is single-user: the team knowledge
            scope needs FaultMaven Cloud&apos;s multi-tenancy. You also decide when to upgrade —
            Cloud is deployed on its own schedule, so the two can be on different versions.
          </p>
        </GuideSection>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild href={QUICKSTART_URL} variant="primary">
            Open the full quick start on GitHub →
          </Button>
          <Button asChild href={ENGINE_REPO_URL} variant="secondary">
            Read the source
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
          Rather not operate it?{' '}
          <a href={TRY_CLOUD_URL} className={textLinkClass}>
            FaultMaven Cloud
          </a>{' '}
          runs the same engine for you, with nothing to install.
        </p>
      </Section>
    </>
  );
}
