import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Content surfaces: the one card, the icon tile a card opens with, the check
// list, and the code block. Blue is the accent throughout; green is kept for
// status (something available now, a verified result), never decoration.

export const cardClass =
  'rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900';
export const highlightCardClass =
  'rounded-xl border border-blue-600 bg-white p-6 shadow-sm ring-1 ring-blue-600 md:p-8 dark:border-blue-500 dark:bg-slate-900 dark:ring-blue-500';
export const iconTileClass =
  'mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 [&>svg]:h-6 [&>svg]:w-6';
// The short blue line under a card's title ("We run it for you").
export const cardSubtitleClass = 'text-sm font-semibold text-blue-600 dark:text-blue-400';

type CardProps = {
  children: ReactNode;
  /** The recommended option in a set: a blue border instead of the grey one. */
  highlight?: boolean;
  className?: string;
};

export function Card({ children, highlight = false, className }: CardProps) {
  return (
    <div className={cn(highlight ? highlightCardClass : cardClass, className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-xl font-semibold text-slate-900 dark:text-slate-100', className)}>{children}</h3>
  );
}

export function IconTile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(iconTileClass, className)}>
      {children}
    </div>
  );
}

// The number on a step in a numbered sequence.
export function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white dark:bg-blue-500">
      {n}
    </span>
  );
}

// The bullet in a plain list: a small blue dot on the first line's centre,
// set in em so it sits right at any text size.
export function Dot() {
  return <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />;
}

export function BulletList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn('space-y-1', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <Dot />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn('space-y-2.5 text-slate-700 dark:text-slate-300', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <Check aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const codeBlockClass =
  'overflow-x-auto rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm leading-relaxed text-slate-100 dark:bg-slate-950';

export function CodeBlock({ children, className }: { children: string; className?: string }) {
  return (
    <pre className={cn(codeBlockClass, className)}>
      <code className="whitespace-pre">{children}</code>
    </pre>
  );
}
