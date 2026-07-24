'use client';
import { useState } from 'react';

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
          <a href="https://github.com/FaultMaven/faultmaven#quick-start" className="text-blue-600 hover:underline">
            deploy it yourself for free
          </a>{' '}
          in about five minutes.
        </>
      ),
    },
    {
      question: 'How is it different from ChatGPT or Claude?',
      answer: "Generic AI has no memory of your infrastructure or your past incidents, and it will confidently guess. FaultMaven grounds every step in the evidence you provide, won't present a root cause it can't back with that evidence, and remembers what it learns — every resolved case becomes reusable knowledge. It also lives alongside your tools instead of a separate chat tab.",
    },
    {
      question: 'Is it really free, and is the source open?',
      answer: (
        <>
          Standalone (self-hosted) is free. The engine is fair source (FSL-1.1-ALv2): every line is public to audit and fork, and each release converts to Apache 2.0 two years after it ships. The Copilot, Dashboard, and Slack app are Apache 2.0. FaultMaven Cloud is a managed option, currently in beta —{' '}
          <a href="/pricing" className="text-blue-600 hover:underline">
            compare the two
          </a>
          .
        </>
      ),
    },
    {
      question: 'How does FaultMaven handle my data?',
      answer: "The Copilot runs client-side in your browser and never asks for production credentials — you control exactly what you share. FaultMaven includes an optional redaction layer (regex for keys and tokens, Presidio for PII) you can enable to scrub sensitive values before prompts reach an external provider — or run local models (Ollama, vLLM) so nothing leaves your infrastructure at all. Your data stays on your infrastructure.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-50 mb-8">
          Your Questions Answered
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12">
          We believe in clarity. Here are answers to some common initial questions:
        </p>
        <div className="space-y-4">
          {faqSnippet.map((item, idx) => (
            <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left flex justify-between items-center p-6 focus:outline-none"
              >
                <span className="font-semibold text-slate-800 dark:text-slate-100">{item.question}</span>
                <svg
                  className={`h-6 w-6 text-slate-500 transform transition-transform ${
                    faqOpenIndex === idx ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {faqOpenIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
