import type { Metadata } from 'next';

// `page.tsx` here is a client component, which cannot export metadata; the
// segment's layout carries it instead. Bare title: the root layout's template
// appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'See FaultMaven in Action',
  description:
    'Real problems. A methodical path to the cause.',
  alternates: { canonical: '/use-cases' },
};

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
