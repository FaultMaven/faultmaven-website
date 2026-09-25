import type { Metadata } from 'next';

// `page.tsx` here is a client component, which cannot export metadata; the
// segment's layout carries it instead. Bare title: the root layout's template
// appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'Run it yourself, or let us run it for you',
  description:
    'The same engine either way. FaultMaven Cloud runs it for you with nothing to operate — free during beta, with a daily limit on investigation turns. Self-hosting is free forever. Because the engine is fair source, you are never locked in to either.',
  alternates: { canonical: '/pricing' },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
