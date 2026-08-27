import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import jsYaml from 'js-yaml';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  rawSlug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  author: string;
  status: PostStatus;
  contentHtml?: string;
  readingTime: string;
}

/** Editorial lifecycle, per content/blog/README.md: draft -> approved -> published. */
const POST_STATUSES = ['draft', 'approved', 'published'] as const;

export type PostStatus = (typeof POST_STATUSES)[number];

const DEFAULT_STATUS: PostStatus = 'draft';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

const matterOptions = {
  engines: {
    yaml: {
      parse: (str: string) => (jsYaml.load(str) as object) || {},
      stringify: (obj: object) => jsYaml.dump(obj),
    },
  },
};

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * The single source of truth for a post's lifecycle status.
 *
 * Defaults to `draft` rather than `published`: a dropped or misnamed `status`
 * key must not put an unreviewed post on the live site. Every unrecognised
 * value is warned about rather than silently downgraded, so a typo surfaces in
 * the build log instead of quietly hiding a post that was meant to ship.
 */
function resolveStatus(data: Record<string, unknown>, fileName: string): PostStatus {
  const raw = data.status;

  if (typeof raw === 'string' && (POST_STATUSES as readonly string[]).includes(raw)) {
    return raw as PostStatus;
  }

  const problem =
    raw === undefined
      ? 'no `status` in frontmatter'
      : `unrecognised status ${JSON.stringify(raw)}`;

  console.warn(
    `[blog] ${fileName}: ${problem} — treating as "${DEFAULT_STATUS}". ` +
      `Expected one of: ${POST_STATUSES.join(', ')}.`
  );

  return DEFAULT_STATUS;
}

/** Only published posts are surfaced publicly; drafts and in-review posts stay hidden. */
function isPublished(status: PostStatus): boolean {
  return status === 'published';
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIRECTORY);
  const posts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') || fileName.toLowerCase() === 'readme.md') {
      continue;
    }

    const fullPath = path.join(BLOG_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents, matterOptions);

    const rawSlug = fileName.replace(/\.md$/, '');
    const cleanSlug = rawSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');

    posts.push({
      slug: cleanSlug,
      rawSlug,
      title: (data.title as string) || 'Untitled',
      date: (data.date as string) || '',
      description: (data.description as string) || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: (data.author as string) || 'The FaultMaven Team',
      status: resolveStatus(data, fileName),
      readingTime: calculateReadingTime(content),
    });
  }

  return posts
    .filter((post) => isPublished(post.status))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slugParam: string): Promise<BlogPost | null> {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return null;
  }

  const fileNames = fs.readdirSync(BLOG_DIRECTORY);
  let targetFileName: string | null = null;

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') || fileName.toLowerCase() === 'readme.md') {
      continue;
    }
    const rawSlug = fileName.replace(/\.md$/, '');
    const cleanSlug = rawSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');

    if (cleanSlug === slugParam || rawSlug === slugParam) {
      targetFileName = fileName;
      break;
    }
  }

  if (!targetFileName) {
    return null;
  }

  const fullPath = path.join(BLOG_DIRECTORY, targetFileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents, matterOptions);

  // Draft/in-review posts are not directly reachable either — 404 them.
  const status = resolveStatus(data, targetFileName);
  if (!isPublished(status)) {
    return null;
  }

  const contentHtml = await marked(content);
  const rawSlug = targetFileName.replace(/\.md$/, '');
  const cleanSlug = rawSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');

  return {
    slug: cleanSlug,
    rawSlug,
    title: (data.title as string) || 'Untitled',
    date: (data.date as string) || '',
    description: (data.description as string) || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: (data.author as string) || 'The FaultMaven Team',
    status,
    contentHtml,
    readingTime: calculateReadingTime(content),
  };
}
