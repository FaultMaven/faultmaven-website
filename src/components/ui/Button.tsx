import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'md' | 'sm';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

// For <button>
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
// For <a>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = NativeButtonProps | AnchorButtonProps;

// The ring is for keyboard focus only. On plain :focus, a link clicked with
// the mouse keeps its ring, and in the header, which survives client-side
// navigation, keeps it on the next page too.
export const buttonBase =
  'inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

// The transparent border keeps a primary button the same height as a
// secondary one beside it.
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-transparent bg-blue-600 text-white shadow-sm hover:bg-blue-700',
  secondary:
    'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white',
  tertiary:
    'text-blue-600 bg-transparent hover:underline px-2 py-1',
};

// Tertiary is a text link and carries its own padding.
const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-6 py-3',
  sm: 'px-4 py-2 text-sm',
};

// A page on this site navigates client-side through next/link. Another
// origin, a protocol-relative URL, mailto: or a bare #fragment stays a plain
// anchor, and so does a file (a path ending in an extension, such as the raw
// transcript), which next/link would otherwise prefetch as a page.
export function isSitePage(href: string) {
  if (!href.startsWith('/') || href.startsWith('//')) return false;
  const path = href.split(/[?#]/)[0];
  return !/\.[a-z0-9]+$/i.test(path);
}

export default function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  // cn, not clsx: a caller's class replaces the conflicting default rather
  // than competing with it on stylesheet order.
  const classes = cn(buttonBase, variantClasses[variant], variant !== 'tertiary' && sizeClasses[size], className);
  if (asChild && href) {
    // Render as a link, only spread anchor props
    const { type, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    if (isSitePage(href)) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  );
}
