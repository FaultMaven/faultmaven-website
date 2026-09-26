import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { usePathname } from 'next/navigation';
import Header from './Header';

jest.mock('next/navigation', () => ({ usePathname: jest.fn() }));

// Like next/link, a click is handled in the page rather than by the browser;
// jsdom cannot navigate.
jest.mock('next/link', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ children, onClick, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
      React.createElement(
        'a',
        {
          ...props,
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
            onClick?.(e);
            e.preventDefault();
          },
        },
        children,
      ),
  };
});

const mockedPathname = usePathname as jest.Mock;

function renderAt(pathname: string) {
  mockedPathname.mockReturnValue(pathname);
  const user = userEvent.setup();
  const view = render(
    <>
      <Header />
      <button type="button">Outside</button>
    </>,
  );
  return { user, ...view };
}

// Both navigations are in the DOM (CSS decides which shows); the desktop one
// is always rendered, the mobile one only while open.
const desktopNav = () => screen.getAllByRole('navigation', { name: 'Main' })[0];
const resourcesButton = () => screen.getByRole('button', { name: 'Resources' });
const resourcesMenu = () => document.getElementById('resources-menu');
const menuButton = () => screen.getByRole('button', { name: 'Toggle Menu' });
const mobileMenu = () => document.getElementById('mobile-menu');

describe('Header', () => {
  it('has five top-level entries on desktop', () => {
    renderAt('/');
    const nav = desktopNav();
    expect(within(nav).getAllByRole('link').map((a) => a.textContent)).toEqual([
      'Product',
      'Use cases',
      'Pricing',
      'Contact',
    ]);
    expect(within(nav).getByRole('button', { name: 'Resources' })).toBeInTheDocument();
  });

  describe('current page', () => {
    it('marks an exact match as the current page', async () => {
      const { user } = renderAt('/blog');
      await user.click(resourcesButton());
      expect(within(resourcesMenu()!).getByRole('link', { name: 'Blog' })).toHaveAttribute('aria-current', 'page');
    });

    it('marks the section, not the page, for a page under it', async () => {
      const { user } = renderAt('/blog/some-post');
      await user.click(resourcesButton());
      expect(within(resourcesMenu()!).getByRole('link', { name: 'Blog' })).toHaveAttribute('aria-current', 'true');
    });

    it('marks nothing elsewhere', () => {
      renderAt('/about');
      for (const link of within(desktopNav()).getAllByRole('link')) {
        expect(link).not.toHaveAttribute('aria-current');
      }
    });
  });

  describe('Resources menu', () => {
    it('closes on Escape and returns focus when focus was inside it', async () => {
      const { user } = renderAt('/');
      await user.click(resourcesButton());
      await user.tab();
      expect(within(resourcesMenu()!).getByRole('link', { name: 'Real investigation' })).toHaveFocus();
      await user.keyboard('{Escape}');
      expect(resourcesMenu()).toBeNull();
      expect(resourcesButton()).toHaveFocus();
    });

    it('closes on Escape without taking focus from elsewhere on the page', async () => {
      const { user } = renderAt('/');
      // Opened with a click that does not move focus, as in Safari, which
      // does not focus a button on click: focus stays where it was.
      act(() => screen.getByRole('button', { name: 'Outside' }).focus());
      fireEvent.click(resourcesButton());
      expect(resourcesMenu()).not.toBeNull();
      await user.keyboard('{Escape}');
      expect(resourcesMenu()).toBeNull();
      expect(screen.getByRole('button', { name: 'Outside' })).toHaveFocus();
    });

    it('closes when keyboard focus leaves it', async () => {
      const { user } = renderAt('/');
      await user.click(resourcesButton());
      for (let i = 0; i < 4; i++) await user.tab();
      expect(within(resourcesMenu()!).getByRole('link', { name: 'Roadmap' })).toHaveFocus();
      await user.tab();
      expect(within(desktopNav()).getByRole('link', { name: 'Contact' })).toHaveFocus();
      expect(resourcesMenu()).toBeNull();
    });

    it('closes on a link to the page already showing and returns focus to its button', async () => {
      const { user } = renderAt('/faq');
      await user.click(resourcesButton());
      await user.click(within(resourcesMenu()!).getByRole('link', { name: 'FAQ' }));
      expect(resourcesMenu()).toBeNull();
      expect(resourcesButton()).toHaveFocus();
    });
  });

  describe('mobile menu', () => {
    it.each([
      ['a nav link', '/pricing', 'Pricing'],
      ['the Self-host button', '/self-host', 'Self-host'],
    ])('closes on %s to the page already showing and returns focus to the menu button', async (_, path, name) => {
      const { user } = renderAt(path);
      await user.click(menuButton());
      await user.click(within(mobileMenu()!).getByRole('link', { name }));
      expect(mobileMenu()).toBeNull();
      expect(menuButton()).toHaveFocus();
    });

    it('closes on the logo', async () => {
      const { user } = renderAt('/');
      await user.click(menuButton());
      await user.click(screen.getByRole('img', { name: 'FaultMaven Logo Light' }));
      expect(mobileMenu()).toBeNull();
    });

    it('closes when the route changes', async () => {
      const { user, rerender } = renderAt('/');
      await user.click(menuButton());
      expect(mobileMenu()).not.toBeNull();
      mockedPathname.mockReturnValue('/pricing');
      rerender(
        <>
          <Header />
          <button type="button">Outside</button>
        </>,
      );
      expect(mobileMenu()).toBeNull();
    });

    it('closes on Escape and returns focus when focus was inside it', async () => {
      const { user } = renderAt('/');
      await user.click(menuButton());
      act(() => within(mobileMenu()!).getByRole('link', { name: 'Product' }).focus());
      await user.keyboard('{Escape}');
      expect(mobileMenu()).toBeNull();
      expect(menuButton()).toHaveFocus();
    });
  });
});
