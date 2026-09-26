import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// The site's page layout, in one place so every page is built the same way:
// an interior page opens with a PageHeader (the home page with its Hero), then
// Sections whose tone alternates white and muted, each opening with a
// SectionHeader. Spacing, content widths and heading sizes live here, not in
// the pages.

const WIDTHS = {
  wide: 'max-w-6xl',
  narrow: 'max-w-4xl',
  prose: 'max-w-3xl',
} as const;

export type SectionWidth = keyof typeof WIDTHS;

const TONES = {
  white: 'bg-white dark:bg-slate-900',
  muted: 'bg-slate-50 dark:bg-slate-800/50',
} as const;

// The heading scales: a page's title, a page section's title, and a subsection
// within a document page (a guide, the FAQ, a legal page).
export const pageTitleClass = 'text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-50';
export const sectionTitleClass = 'text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50';
export const subsectionTitleClass = 'text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50';

// A link inside running text, and a quieter one for small print.
export const textLinkClass = 'font-medium text-blue-600 hover:underline dark:text-blue-400';
export const quietLinkClass = 'underline transition-colors hover:text-blue-600 dark:hover:text-blue-400';

// Running text on a document page (legal pages, guides). Links need the
// explicit style: the base reset makes a bare <a> inherit its colour and drop
// its underline, which leaves it indistinguishable from the text around it.
export const proseClass =
  'space-y-6 leading-relaxed text-slate-700 dark:text-slate-300 [&_a]:font-medium [&_a]:text-blue-600 hover:[&_a]:underline dark:[&_a]:text-blue-400';

// Small uppercase label above a heading.
export const eyebrowClass = 'text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400';

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn(eyebrowClass, 'mb-3', className)}>{children}</p>;
}

// A pill for a short standing statement, such as the hero's trust line.
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        className,
      )}
    >
      {children}
    </span>
  );
}

type SectionProps = {
  children: ReactNode;
  tone?: keyof typeof TONES;
  /** `compact` is for short bands (a call to action, a note); everything else is default. */
  size?: 'default' | 'compact';
  width?: SectionWidth;
  id?: string;
  className?: string;
  'aria-labelledby'?: string;
};

export function Section({
  children,
  tone = 'white',
  size = 'default',
  width = 'wide',
  id,
  className,
  'aria-labelledby': labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(TONES[tone], size === 'compact' ? 'py-16' : 'py-20 md:py-24', className)}
    >
      <div className={cn(WIDTHS[width], 'mx-auto px-6')}>{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  lead?: ReactNode;
  align?: 'center' | 'left';
  /** `tight` when the header introduces a single block (an image, a paragraph) rather than a grid. */
  spacing?: 'default' | 'tight';
  id?: string;
  className?: string;
};

export function SectionHeader({ title, eyebrow, lead, align = 'center', spacing = 'default', id, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        spacing === 'tight' ? 'mb-8' : 'mb-12 md:mb-16',
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className={sectionTitleClass}>
        {title}
      </h2>
      {lead ? (
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{lead}</div>
      ) : null}
    </div>
  );
}

type PageHeaderProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  lead?: ReactNode;
  /** Calls to action, under the lead. */
  children?: ReactNode;
  /** Small print under the calls to action. */
  footnote?: ReactNode;
  align?: 'center' | 'left';
  /** Match the body's width so the heading lines up with the text under it.
   *  Defaults: `prose` when centred, `narrow` when left-aligned. */
  width?: SectionWidth;
  className?: string;
};

// The opening band of every interior page: the page's h1 on the muted tone,
// ruled off from the white section that follows.
export function PageHeader({ title, eyebrow, lead, children, footnote, align = 'center', width, className }: PageHeaderProps) {
  const centered = align === 'center';
  const w = WIDTHS[width ?? (centered ? 'prose' : 'narrow')];
  return (
    <section
      className={cn(
        'border-b border-slate-200 bg-slate-50 pt-16 pb-14 md:pt-24 md:pb-20 dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
    >
      <div className={cn('mx-auto px-6', w, centered && 'text-center')}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className={pageTitleClass}>{title}</h1>
        {lead ? (
          <div className="mt-6 space-y-4 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            {lead}
          </div>
        ) : null}
        {children ? (
          <div className={cn('mt-8 flex flex-col gap-4 sm:flex-row', centered && 'sm:justify-center')}>{children}</div>
        ) : null}
        {footnote ? (
          <div className="mt-6 space-y-3 text-sm text-slate-500 dark:text-slate-400">{footnote}</div>
        ) : null}
      </div>
    </section>
  );
}
