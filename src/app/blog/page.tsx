import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import Button from '@/components/ui/Button';
import { pageMetadata } from '@/lib/metadata';
import { PageHeader, Section, sectionTitleClass, subsectionTitleClass } from '@/components/ui/Section';

export const metadata = pageMetadata({
  title: 'Blog',
  description:
    'Insights, guides, and engineering perspectives on AI-powered incident investigation, telemetry correlation, and SRE workflows.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="FaultMaven blog"
        lead={
          <p>
            Engineering insights, diagnostic methodologies, and perspectives on AI-powered incident investigation for engineers, SREs, and platform teams.
          </p>
        }
      />
      <Section>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white py-16 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              No blog posts found. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md md:p-8 dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
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
                <h2 className={`${subsectionTitleClass} mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                  {post.description}
                </p>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
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

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-8 text-center md:p-12 dark:border-blue-900 dark:bg-blue-950/40">
          <h2 className={`${sectionTitleClass} mb-4`}>
            Stay ahead in AI-powered operations
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
            Deploy FaultMaven Standalone free right now, or read a real investigation end to end and judge it for yourself.
          </p>
          <Button asChild href="/investigation" variant="primary">
            See a real investigation
          </Button>
        </div>
      </Section>
    </>
  );
}
