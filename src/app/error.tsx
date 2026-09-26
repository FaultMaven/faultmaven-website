'use client'

import Button from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/Section';

export default function Error({ error, reset }: {
  error: Error
  reset: () => void
}) {
  return (
    <PageHeader
      title="Something went wrong!"
      lead={<p>{error.message}</p>}
      className="border-b-0 md:pb-32"
    >
      <Button onClick={() => reset()} variant="primary">
        Try Again
      </Button>
    </PageHeader>
  );
}
