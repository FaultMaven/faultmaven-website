import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import DOMPurify from 'dompurify';
import ArticleBody from './ArticleBody';

jest.mock('mermaid', () => ({
  __esModule: true,
  default: {
    initialize: jest.fn(),
    render: jest.fn(async () => ({ svg: '<svg data-diagram="rendered"></svg>' })),
  },
}));
jest.mock('dompurify', () => ({
  __esModule: true,
  default: { sanitize: jest.fn((svg: string) => svg) },
}));

const ARTICLE = '<pre><code class="language-mermaid">flowchart TD\n  A --&gt; B</code></pre>';

describe('ArticleBody', () => {
  it('initializes mermaid with the pre-12 look pinned and labels kept in SVG text', async () => {
    const { container } = render(<ArticleBody html={ARTICLE} />);
    await waitFor(() => expect(container.querySelector('figure.mermaid-diagram svg')).not.toBeNull());

    expect(mermaid.initialize).toHaveBeenCalledTimes(1);
    expect(mermaid.initialize).toHaveBeenCalledWith(
      expect.objectContaining({
        // mermaid 12 re-lays out and recolours unless these are set (fm#2117).
        layout: 'dagre',
        look: 'classic',
        theme: 'default',
        // 12.0 added minNodeWidth (120) and moved wrappingWidth 200 -> 120.
        flowchart: expect.objectContaining({ htmlLabels: false, minNodeWidth: 0, wrappingWidth: 200 }),
        state: expect.objectContaining({ minNodeWidth: 0, wrappingWidth: 200 }),
        // The sanitizer strips foreignObject content, so labels must stay <text>.
        securityLevel: 'strict',
        htmlLabels: false,
      }),
    );
    expect(mermaid.render).toHaveBeenCalledWith('mermaid-diagram-0', 'flowchart TD\n  A --> B');
    expect(DOMPurify.sanitize).toHaveBeenCalledWith('<svg data-diagram="rendered"></svg>');
    expect(container.querySelector('pre')).toBeNull();
  });
});
