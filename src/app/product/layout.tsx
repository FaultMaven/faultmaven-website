import type { Metadata } from 'next';

// `page.tsx` here is a client component, which cannot export metadata; the
// segment's layout carries it instead. Bare title: the root layout's template
// appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'How FaultMaven Works',
  description:
    'A methodical path from error to resolution.',
  alternates: { canonical: '/product' },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
