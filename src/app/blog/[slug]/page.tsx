import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import Button from '@/components/ui/Button';
import ArticleBody from '@/components/blog/ArticleBody';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found | FaultMaven Blog',
    };
  }

  return {
    title: `${post.title} | FaultMaven Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header Header Card */}
        <header className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200/80 dark:border-slate-700/80 shadow-sm mb-12">
          {/* Date & Reading Time */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-6">
            <div className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Author & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              By <strong className="text-slate-700 dark:text-slate-200">{post.author}</strong>
            </span>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2.5 py-1 rounded-md"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Content Body */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-14 border border-slate-200/80 dark:border-slate-700/80 shadow-sm mb-16">
          <ArticleBody html={post.contentHtml || ''} />
        </div>

        {/* Footer Navigation & CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900 text-white rounded-2xl p-8 shadow-lg">
          <div>
            <h3 className="text-xl font-bold mb-2">Build Grounded AI Troubleshooting</h3>
            <p className="text-sm text-slate-300">
              Deploy FaultMaven free — or join the Cloud beta waitlist.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Back to Blog
            </Link>
            <Button asChild href="/waitlist" variant="primary">
              Join Waitlist
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}
