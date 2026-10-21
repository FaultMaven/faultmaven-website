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
  beforeEach(() => jest.clearAllMocks());

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
        // 11.x wrapped flowchart and state nodes at flowchart.wrappingWidth (200),
        // with no minimum width; 12.x adds minNodeWidth (120) to both and wraps
        // both at 120. These pins restore the 11.x sizing.
        flowchart: expect.objectContaining({ htmlLabels: false, minNodeWidth: 0, wrappingWidth: 200 }),
        state: expect.objectContaining({ minNodeWidth: 0, wrappingWidth: 200 }),
        // The top-level layout would otherwise replace swimlanes' own.
        swimlane: expect.objectContaining({ layout: 'swimlane' }),
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
