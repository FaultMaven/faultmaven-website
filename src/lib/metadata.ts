import type { Metadata } from 'next';
import { alt as socialImageAlt, size as socialImageSize } from '@/app/opengraph-image';

/**
 * Metadata for one page: a bare title (the root layout's template appends
 * ` | FaultMaven`), its description, and its canonical path — echoed into the
 * Open Graph and Twitter cards so a share of this page carries this page's
 * title and URL rather than the site card inherited from the root layout.
 *
 * `openGraph` and `twitter` are replaced wholesale by a page that sets them —
 * including the generated social image, which the root segment's
 * `opengraph-image.tsx` attaches only to the root — so each page must restate
 * what it wants kept; this does that once.
 */
export function pageMetadata({
  title,
  description,
  path,
  openGraph,
}: {
  title: string;
  description: string;
  path: string;
  /** Extra Open Graph fields, e.g. `{ type: 'article' }` or a card-specific description. */
  openGraph?: Metadata['openGraph'];
}): Metadata {
  const branded = `${title} | FaultMaven`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'FaultMaven',
      locale: 'en_US',
      description,
      ...openGraph,
      title: branded,
      url: path,
      images: [{ url: '/opengraph-image', alt: socialImageAlt, ...socialImageSize }],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@faultmaven',
      title: branded,
      description,
    },
  };
}
