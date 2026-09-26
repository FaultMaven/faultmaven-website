'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, SectionHeader, textLinkClass } from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { SELF_HOST_PATH } from '@/lib/links';

export default function FAQSnippet() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const faqSnippet = [
    {
      question: 'What is FaultMaven?',
      answer: (
        <>
          An AI troubleshooting copilot for engineers. It works a problem the way a seasoned engineer does — goal-driven, methodical, grounded in evidence — correlating what you share with your runbooks, docs, and past fixes. You can{' '}
          <a href={SELF_HOST_PATH} className={textLinkClass}>
            run it yourself for free
          </a>{' '}
          — one command, though budget 10–20 minutes the first time: the image is a 2.3 GB
          download because the embedding model ships inside it, so nothing is fetched at runtime.
        </>
      ),
    },
    {
      question: 'How is it different from ChatGPT or Claude?',
      answer: "Generic AI has no access to your runbooks, and it will confidently guess. FaultMaven grounds every step in evidence drawn from the data you share and won't present a root cause it can't back with that evidence. It also leads — driving the investigation rather than waiting for the right question — and a case it resolves can become a runbook it reuses. And it lives alongside your tools instead of a separate chat tab.",
    },
    {
      question: 'Is it really free, and is the source open?',
      answer: (
        <>
          Standalone (self-hosted) is free. The engine is fair source (FSL-1.1-ALv2): every line is public to audit and fork, and each release converts to Apache 2.0 two years after it ships. The Copilot, Dashboard, and Slack app are Apache 2.0. FaultMaven Cloud runs the same engine for you, with nothing to operate and team knowledge sharing — in beta it is free, with a daily limit on investigation turns —{' '}
          <a href="/pricing" className={textLinkClass}>
            compare the two
          </a>
          .
        </>
      ),
    },
    {
      question: 'How does FaultMaven handle my data?',
      answer: "FaultMaven never asks for production credentials — you control exactly what you share. Self-hosted, your cases, evidence and knowledge base are stored on your own disk; each investigation prompt goes to the model provider you configure, and an optional redaction layer (regex for keys and tokens, Presidio for PII) can scrub sensitive values first. On FaultMaven Cloud, what you share is stored in our deployment, so do not paste secrets or customer data you would not want stored.",
    },
  ];

  return (
    <Section width="prose">
      <SectionHeader
        title="Your questions answered"
        lead="We believe in clarity. Here are answers to some common initial questions:"
      />
      <div className="space-y-4">
        {faqSnippet.map((item, idx) => {
          const open = faqOpenIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={open}
                aria-controls={`faq-answer-${idx}`}
                className="flex w-full items-center justify-between gap-4 rounded-xl p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="font-semibold text-slate-900 dark:text-slate-100">{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn('h-5 w-5 shrink-0 text-slate-500 transition-transform', open && 'rotate-180')}
                />
              </button>
              {open && (
                <div id={`faq-answer-${idx}`} className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
