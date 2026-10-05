import Image from 'next/image';
import { cn } from '@/lib/utils';

// FaultMaven's NVIDIA Inception membership: the sentence says it, the badge
// backs it up, so the badge is not a link and carries no alt text of its own.
// "program" is lowercase mid-sentence, per NVIDIA's writing guidelines.
//
// The badge is NVIDIA's for-screen RGB artwork, unmodified: its colours and
// text must not change, and the file carries its own clear space. The badge
// itself is about 76% of the image height, so h-10 (40px) is the smallest that
// keeps it above NVIDIA's 30px digital minimum, and it may not be wider than
// the FaultMaven logo on the page (150px in the header).
export default function InceptionMembership({
  className,
  textClassName,
  badgeClassName,
}: {
  className?: string;
  textClassName?: string;
  badgeClassName: string;
}) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <p className={cn('text-sm text-slate-600 dark:text-slate-400', textClassName)}>
        FaultMaven is a member of the NVIDIA Inception program.
      </p>
      <Image
        src="/images/nvidia-inception-program-badge.svg"
        alt=""
        width={500}
        height={216}
        className={cn('w-auto shrink-0', badgeClassName)}
      />
    </div>
  );
}
