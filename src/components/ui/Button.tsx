import React from 'react';
import clsx from 'clsx';

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

export const buttonBase =
  'inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

// The transparent border keeps a primary button the same height as a
// secondary one beside it.
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-transparent bg-[#2563EB] text-white shadow-sm hover:bg-blue-700',
  secondary:
    'border border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB] hover:text-white',
  tertiary:
    'text-[#2563EB] bg-transparent hover:underline px-2 py-1',
};

// Tertiary is a text link and carries its own padding.
const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-6 py-3',
  sm: 'px-4 py-2 text-sm',
};

// The same classes for a caller that renders its own element, e.g. a
// next/link that should look like a button.
export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return clsx(buttonBase, variantClasses[variant], variant !== 'tertiary' && sizeClasses[size], className);
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
  const classes = buttonClasses(variant, size, className);
  if (asChild && href) {
    // Render as a link, only spread anchor props
    const { type, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
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
