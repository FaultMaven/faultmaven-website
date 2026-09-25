import type { Metadata } from 'next';

// `page.tsx` here is a client component, which cannot export metadata; the
// segment's layout carries it instead. Bare title: the root layout's template
// appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'Built by engineers, for engineers',
  description:
    'We got tired of solving the same problem twice. So we built FaultMaven.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
