import type { Metadata } from 'next';

// `page.tsx` here is a client component, which cannot export metadata; the
// segment's layout carries it instead. Bare title: the root layout's template
// appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'The FaultMaven Roadmap',
  description:
    'Trust first. Autonomy earned.',
  alternates: { canonical: '/roadmap' },
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
