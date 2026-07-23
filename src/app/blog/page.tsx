import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Blog | FaultMaven - AI-Powered Incident Investigation',
  description:
    'Insights, guides, and engineering perspectives on AI-powered incident investigation, telemetry correlation, and SRE workflows.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-6">
            FaultMaven Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Engineering insights, diagnostic methodologies, and perspectives on AI-powered incident investigation for SREs and DevOps teams.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              No blog posts found. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col bg-white dark:bg-slate-800/90 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all duration-200"
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
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
        <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead in AI-Powered Operations
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Join our waitlist to receive early access updates and new technical articles straight from our engineering team.
          </p>
          <Button asChild href="/waitlist" variant="primary">
            Apply for Early Access
          </Button>
        </section>
      </div>
    </main>
  );
}
