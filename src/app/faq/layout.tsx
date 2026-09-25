import type { Metadata } from 'next';

// `page.tsx` here is a client component, which cannot export metadata; the
// segment's layout carries it instead. Bare title: the root layout's template
// appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Quick answers to common questions about FaultMaven.',
  alternates: { canonical: '/faq' },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
