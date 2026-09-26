import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button, { isSitePage } from './Button';

// next/link renders a plain <a> as well; the marker tells the two apart.
jest.mock('next/link', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
      React.createElement('a', { ...props, 'data-next-link': '' }, children),
  };
});

describe('isSitePage', () => {
  it.each([
    ['/self-host', true],
    ['/blog/some-post', true],
    ['/pricing?plan=cloud#faq', true],
    ['/transcripts/redis-oom-investigation.txt', false],
    ['/images/logo.svg?v=2', false],
    ['https://example.com/docs', false],
    ['//cdn.example.com/x', false],
    ['mailto:support@faultmaven.ai', false],
    ['#quick-start', false],
  ])('%s → %s', (href, expected) => {
    expect(isSitePage(href)).toBe(expected);
  });
});

describe('Button as a link', () => {
  it('navigates client-side to a page on this site', () => {
    render(<Button asChild href="/self-host">Self-host</Button>);
    expect(screen.getByRole('link', { name: 'Self-host' })).toHaveAttribute('data-next-link');
  });

  it('stays a plain anchor for a file, another origin or a fragment', () => {
    render(
      <>
        <Button asChild href="/transcripts/redis-oom-investigation.txt">Raw</Button>
        <Button asChild href="https://example.com/docs">Repo</Button>
        <Button asChild href="#top">Top</Button>
      </>,
    );
    for (const name of ['Raw', 'Repo', 'Top']) {
      expect(screen.getByRole('link', { name })).not.toHaveAttribute('data-next-link');
    }
  });
});

describe('Button classes', () => {
  const classesOf = (el: HTMLElement) => el.className.split(/\s+/);

  it('sizes a primary or secondary button', () => {
    render(
      <>
        <Button>Medium</Button>
        <Button variant="secondary" size="sm">Small</Button>
      </>,
    );
    expect(classesOf(screen.getByRole('button', { name: 'Medium' }))).toEqual(expect.arrayContaining(['px-6', 'py-3']));
    const small = classesOf(screen.getByRole('button', { name: 'Small' }));
    expect(small).toEqual(expect.arrayContaining(['px-4', 'py-2', 'text-sm']));
    expect(small).not.toContain('px-6');
  });

  it('keeps its own padding for tertiary, whatever the size', () => {
    render(<Button variant="tertiary" size="sm">Tertiary</Button>);
    const classes = classesOf(screen.getByRole('button', { name: 'Tertiary' }));
    expect(classes).toEqual(expect.arrayContaining(['px-2', 'py-1']));
    expect(classes).not.toContain('px-4');
  });

  it("lets the caller's class replace the default it conflicts with", () => {
    render(<Button className="px-8">Wide</Button>);
    const classes = classesOf(screen.getByRole('button', { name: 'Wide' }));
    expect(classes).toContain('px-8');
    expect(classes).not.toContain('px-6');
  });

  it('draws the focus ring for keyboard focus only', () => {
    render(<Button>Focus</Button>);
    const classes = classesOf(screen.getByRole('button', { name: 'Focus' }));
    expect(classes).toContain('focus-visible:ring-2');
    expect(classes.filter((c) => c.startsWith('focus:ring'))).toEqual([]);
  });
});
