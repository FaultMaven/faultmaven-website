import Image from 'next/image';
import { cn } from '@/lib/utils';

// NVIDIA's for-screen RGB badge artwork, unmodified: its colours and text must
// not change, and the file carries its own clear space. The height is the
// caller's, within NVIDIA's rules: the badge itself is about 76% of the image
// height, so h-10 (40px) is the smallest that keeps it above NVIDIA's 30px
// digital minimum, and it may not be wider than the FaultMaven logo next to it
// (112px in the footer, 150px in the header).
export default function InceptionBadge({ className }: { className: string }) {
  return (
    <a
      href="https://www.nvidia.com/en-us/startups/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <Image
        src="/images/nvidia-inception-program-badge.svg"
        alt="FaultMaven is a member of NVIDIA Inception"
        width={500}
        height={216}
        className={cn('w-auto', className)}
      />
    </a>
  );
}
