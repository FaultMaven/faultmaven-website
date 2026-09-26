import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/Section';

// Bare title: the root layout's template appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      title="Page Not Found"
      lead={<p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>}
      className="border-b-0 md:pb-32"
    >
      <Button asChild href="/" variant="primary">
        Return to Home
      </Button>
    </PageHeader>
  );
}
