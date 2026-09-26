'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { buttonClasses } from '@/components/ui/Button';
import { SELF_HOST_PATH, SIGN_IN_URL, TRY_CLOUD_URL } from '@/lib/links';
import { cn } from '@/lib/utils';

type NavLink = { href: string; label: string };

// Five top-level entries is what fits one line beside the logo and the three
// actions from the `lg` breakpoint up; anything more belongs under Resources.
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

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const desktopLinkClass = (active: boolean) =>
  cn(
    'nav-underline whitespace-nowrap transition-colors duration-200',
    active
      ? 'text-blue-600 dark:text-blue-500'
      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500',
  );

const mobileLinkClass = (active: boolean) =>
  cn(
    'block py-2 transition-colors duration-200',
    active
      ? 'text-blue-600 dark:text-blue-500'
      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500',
  );

export default function Header() {
  const pathname = usePathname() ?? '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  // The header lives in the root layout and survives navigation, so an open
  // menu has to be closed when the route changes. A link to the page already
  // showing changes no route, so the links also close the menu on click.
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setIsDropdownOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        dropdownButtonRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  const resourcesActive = RESOURCE_LINKS.some((l) => isActive(pathname, l.href));

  return (
    <header className="sticky top-0 z-50 bg-slate-50/95 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
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
          <nav aria-label="Main" className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {PRIMARY_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(pathname, l.href) ? 'page' : undefined}
                className={desktopLinkClass(isActive(pathname, l.href))}
              >
                {l.label}
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
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
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setIsDropdownOpen(false)}
                      aria-current={isActive(pathname, l.href) ? 'page' : undefined}
                      className={cn(
                        'block px-4 py-2 transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-700',
                        isActive(pathname, l.href)
                          ? 'text-blue-600 dark:text-blue-500'
                          : 'text-slate-700 dark:text-slate-300',
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={CONTACT_LINK.href}
              aria-current={isActive(pathname, CONTACT_LINK.href) ? 'page' : undefined}
              className={desktopLinkClass(isActive(pathname, CONTACT_LINK.href))}
            >
              {CONTACT_LINK.label}
            </Link>
          </nav>
        </div>

        {/* Right: sign in + the two ways to run FaultMaven */}
        <div className="hidden lg:flex shrink-0 items-center gap-3 text-sm font-medium">
          <Link href={SIGN_IN_URL} className={cn('mr-2', desktopLinkClass(false))}>
            Sign in
          </Link>
          <Link href={SELF_HOST_PATH} className={buttonClasses('secondary', 'sm', 'whitespace-nowrap')}>
            Self-host
          </Link>
          <Link href={TRY_CLOUD_URL} className={buttonClasses('primary', 'sm', 'whitespace-nowrap')}>
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-slate-700 dark:text-slate-300"
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
          id="mobile-menu"
          aria-label="Main"
          className="lg:hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="px-6 py-4">
            {[...PRIMARY_LINKS, ...RESOURCE_LINKS, CONTACT_LINK].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(pathname, l.href) ? 'page' : undefined}
                className={mobileLinkClass(isActive(pathname, l.href))}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <Link href={SIGN_IN_URL} className={mobileLinkClass(false)}>
                Sign in
              </Link>
              <Link href={SELF_HOST_PATH} className={buttonClasses('secondary', 'md', 'w-full')}>
                Self-host
              </Link>
              <Link href={TRY_CLOUD_URL} className={buttonClasses('primary', 'md', 'w-full')}>
                Get started
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
