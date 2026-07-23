'use client';

import { useEffect, useRef } from 'react';

interface ArticleBodyProps {
  html: string;
}

// Prose styling for the marked-generated article HTML. Kept here (rather than on
// the page) so the same client component owns both rendering and the post-hydration
// Mermaid pass below.
const PROSE_CLASS =
  'prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-6 ' +
  '[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-slate-900 [&_h2]:dark:text-slate-100 ' +
  '[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 ' +
  '[&_p]:text-base [&_p]:leading-relaxed ' +
  '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 ' +
  '[&_code]:bg-slate-100 [&_code]:dark:bg-slate-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono ' +
  '[&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto ' +
  '[&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_blockquote]:dark:text-slate-400 ' +
  '[&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-slate-300 [&_th]:dark:border-slate-700 [&_th]:p-3 [&_th]:bg-slate-100 [&_th]:dark:bg-slate-700 ' +
  '[&_td]:border [&_td]:border-slate-300 [&_td]:dark:border-slate-700 [&_td]:p-3';

/**
 * Renders the article HTML and, after hydration, replaces any fenced ```mermaid
 * blocks (emitted by `marked` as <pre><code class="language-mermaid">) with the
 * rendered SVG diagram. If a diagram fails to parse or the library fails to load,
 * the original source block is left in place — the page degrades gracefully rather
 * than breaking.
 */
export default function ArticleBody({ html }: ArticleBodyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const blocks = Array.from(
      root.querySelectorAll<HTMLElement>('code.language-mermaid'),
    ).filter((code) => code.dataset.mermaidProcessed !== 'true');

    if (blocks.length === 0) return;

    let cancelled = false;

    (async () => {
      let mermaid;
      try {
        mermaid = (await import('mermaid')).default;
      } catch {
        return; // library failed to load — leave source blocks as-is
      }

      const isDark = document.documentElement.classList.contains('dark');
      mermaid.initialize({
        startOnLoad: false,
        // 'antiscript' keeps HTML labels (so <br/> line breaks render) while
        // stripping any <script>. Diagram sources are our own build-time content.
        securityLevel: 'antiscript',
        theme: isDark ? 'dark' : 'default',
        fontFamily: 'inherit',
      });

      for (let i = 0; i < blocks.length; i++) {
        if (cancelled) return;
        const code = blocks[i];
        code.dataset.mermaidProcessed = 'true';
        const target = code.closest('pre') ?? code;
        const source = code.textContent ?? '';
        if (!source.trim()) continue;

        try {
          const { svg } = await mermaid.render(`mermaid-diagram-${i}`, source);
          if (cancelled) return;
          const figure = document.createElement('figure');
          figure.className =
            'mermaid-diagram my-8 flex justify-center overflow-x-auto not-prose';
          figure.innerHTML = svg;
          target.replaceWith(figure);
        } catch {
          // Parse error — leave the original block visible as a fallback.
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={PROSE_CLASS}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
