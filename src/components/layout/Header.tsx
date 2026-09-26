'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import type { FocusEvent, MouseEvent as ReactMouseEvent } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SELF_HOST_PATH, SIGN_IN_URL, TRY_CLOUD_URL } from '@/lib/links';
import { cn } from '@/lib/utils';

type NavLink = { href: string; label: string };

// Five top-level entries is what fits one line beside the logo and the three
// actions at the desktop breakpoint; anything more belongs under Resources.
const PRIMARY_LINKS: NavLink[] = [
  { href: '/product', label: 'Product' },
  { href: '/use-cases', label: 'Use cases' },
  { href: '/pricing', label: 'Pricing' },
];

const RESOURCE_LINKS: NavLink[] = [
  { href: '/investigation', label: 'Real investigation' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/roadmap', label: 'Roadmap' },
];

const CONTACT_LINK: NavLink = { href: '/contact', label: 'Contact' };

// The desktop layout switches on at 64em rather than Tailwind's `lg` (1024px).
// An em in a media query follows the browser's default font size while the
// header's rem-sized text does too, so a reader who sets 20px gets the menu
// button up to 1280px instead of links drawn over each other. At the default
// 16px it is the same 1024px.
const DESKTOP_ONLY = 'hidden [@media(min-width:64em)]:flex';
const MOBILE_ONLY = '[@media(min-width:64em)]:hidden';

// 'page' is the page showing; 'section' is a page under it, such as a post
// under /blog. Both are highlighted, but only 'page' is the current page to
// assistive technology.
function matchPath(pathname: string, href: string): 'page' | 'section' | null {
  if (pathname === href) return 'page';
  if (pathname.startsWith(`${href}/`)) return 'section';
  return null;
}

const linkTone = (active: boolean) =>
  active
    ? 'text-blue-600 dark:text-blue-500'
    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500';

const desktopLinkClass = (active: boolean) =>
  cn('nav-underline whitespace-nowrap transition-colors duration-200', linkTone(active));

const mobileLinkClass = (active: boolean) => cn('block py-2 transition-colors duration-200', linkTone(active));

const resourceLinkClass = (active: boolean) =>
  cn('block px-4 py-2 transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-700', linkTone(active));

function NavItem({
  link,
  pathname,
  className,
}: {
  link: NavLink;
  pathname: string;
  className: (active: boolean) => string;
}) {
  const match = matchPath(pathname, link.href);
  return (
    <Link
      href={link.href}
      aria-current={match === 'page' ? 'page' : match === 'section' ? 'true' : undefined}
      className={className(match !== null)}
    >
      {link.label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname() ?? '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // The header lives in the root layout and survives navigation, so an open
  // menu has to be closed when the route changes (including back/forward).
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setIsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Escape closes whichever menu is open. Focus goes back to the control that
  // opened it only if focus was inside the menu; from anywhere else on the
  // page, Escape is not ours to take.
  useEffect(() => {
    if (!isDropdownOpen && !isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const focused = document.activeElement;
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
        if (dropdownRef.current?.contains(focused)) dropdownButtonRef.current?.focus();
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
        if (menuRef.current?.contains(focused)) menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen, isMenuOpen]);

  // Tabbing out of Resources closes it. A null relatedTarget is a press on
  // something unfocusable, which the mousedown handler already decides;
  // closing here too would unmount the menu before a click on one of its links
  // landed in browsers that do not focus links on click.
  const handleDropdownBlur = (event: FocusEvent<HTMLDivElement>) => {
    const next = event.relatedTarget as Node | null;
    if (next && !event.currentTarget.contains(next)) setIsDropdownOpen(false);
  };

  // Any link in the header closes an open menu, including one to the page
  // already showing, which changes no route. That link was focused and is
  // about to unmount with its menu, so focus goes back to the control that
  // opened the menu instead of falling to the top of the document.
  const handleLinkClick = (event: ReactMouseEvent<HTMLElement>) => {
    const link = (event.target as HTMLElement).closest('a');
    if (!link) return;
    const openedFrom = menuRef.current?.contains(link)
      ? menuButtonRef.current
      : dropdownRef.current?.contains(link)
        ? dropdownButtonRef.current
        : null;
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    const url = new URL(link.href, window.location.href);
    if (openedFrom && url.origin === window.location.origin && url.pathname === pathname) openedFrom.focus();
  };

  const resourcesActive = RESOURCE_LINKS.some((l) => matchPath(pathname, l.href) !== null);

  return (
    <header
      onClick={handleLinkClick}
      className="sticky top-0 z-50 bg-slate-50/95 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center gap-8">
        {/* Left: logo + primary nav */}
        <div className="flex items-center gap-8 min-w-0">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/fmlogo-darktext-transparent.svg"
              alt="FaultMaven Logo Light"
              width={150}
              height={40}
              priority
              className="dark:hidden"
            />
            <Image
              src="/images/fmlogo-whitetext-transparent.svg"
              alt="FaultMaven Logo Dark"
              width={150}
              height={40}
              className="hidden dark:block"
            />
          </Link>
          <nav aria-label="Main" className={cn(DESKTOP_ONLY, 'items-center gap-6 text-sm font-medium')}>
            {PRIMARY_LINKS.map((l) => (
              <NavItem key={l.href} link={l} pathname={pathname} className={desktopLinkClass} />
            ))}
            <div className="relative" ref={dropdownRef} onBlur={handleDropdownBlur}>
              <button
                ref={dropdownButtonRef}
                type="button"
                className={cn('flex items-center', desktopLinkClass(resourcesActive))}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-controls="resources-menu"
              >
                Resources
                <ChevronDown
                  aria-hidden="true"
                  className={cn('ml-1 w-4 h-4 transition-transform duration-200', isDropdownOpen && 'rotate-180')}
                />
              </button>
              {isDropdownOpen && (
                <div
                  id="resources-menu"
                  className="absolute -left-4 top-full mt-3 w-52 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg"
                >
                  {RESOURCE_LINKS.map((l) => (
                    <NavItem key={l.href} link={l} pathname={pathname} className={resourceLinkClass} />
                  ))}
                </div>
              )}
            </div>
            <NavItem link={CONTACT_LINK} pathname={pathname} className={desktopLinkClass} />
          </nav>
        </div>

        {/* Right: sign in + the two ways to run FaultMaven */}
        <div className={cn(DESKTOP_ONLY, 'shrink-0 items-center gap-3 text-sm font-medium')}>
          <Link href={SIGN_IN_URL} className={cn('mr-2', desktopLinkClass(false))}>
            Sign in
          </Link>
          <Button asChild href={SELF_HOST_PATH} variant="secondary" size="sm" className="whitespace-nowrap">
            Self-host
          </Button>
          <Button asChild href={TRY_CLOUD_URL} variant="primary" size="sm" className="whitespace-nowrap">
            Get started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          className={cn(MOBILE_ONLY, 'text-slate-700 dark:text-slate-300')}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-label="Main"
          className={cn(MOBILE_ONLY, 'bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800')}
        >
          <div className="px-6 py-4">
            {[...PRIMARY_LINKS, ...RESOURCE_LINKS, CONTACT_LINK].map((l) => (
              <NavItem key={l.href} link={l} pathname={pathname} className={mobileLinkClass} />
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <Link href={SIGN_IN_URL} className={mobileLinkClass(false)}>
                Sign in
              </Link>
              <Button asChild href={SELF_HOST_PATH} variant="secondary" className="w-full">
                Self-host
              </Button>
              <Button asChild href={TRY_CLOUD_URL} variant="primary" className="w-full">
                Get started
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
