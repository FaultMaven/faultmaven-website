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
  status: string;
  contentHtml?: string;
  readingTime: string;
}

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
      status: (data.status as string) || 'published',
      readingTime: calculateReadingTime(content),
    });
  }

  // Only published posts are surfaced publicly; drafts and in-review posts stay hidden.
  return posts
    .filter((post) => post.status === 'published')
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
  if (((data.status as string) || 'published') !== 'published') {
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
    status: (data.status as string) || 'published',
    contentHtml,
    readingTime: calculateReadingTime(content),
  };
}
