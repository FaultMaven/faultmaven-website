import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import DemoVideo, { DEMO_VIDEO_SRC } from './DemoVideo';

const playButton = () => screen.queryByRole('button', { name: /^Play the screen recording: / });

describe('DemoVideo', () => {
  it('shows the poster and a play button, and no player, until play', () => {
    const { container } = render(<DemoVideo sizes="100vw" caption="A caption" />);
    expect(playButton()).toHaveAccessibleName(/2 minutes 36 seconds, no sound\.$/);
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('video')).toBeNull();
    expect(screen.getByText('A caption').tagName).toBe('FIGCAPTION');
  });

  it('renders no caption unless given one', () => {
    const { container } = render(<DemoVideo sizes="100vw" />);
    expect(container.querySelector('figcaption')).toBeNull();
  });

  it('swaps in the player on play, starts it and hands it keyboard focus', () => {
    const focus = jest.spyOn(HTMLElement.prototype, 'focus');
    const { container } = render(<DemoVideo sizes="100vw" />);
    fireEvent.click(playButton()!);

    const video = container.querySelector('video');
    expect(video).not.toBeNull();
    expect(playButton()).toBeNull();
    expect(video).toHaveAttribute('autoplay');
    expect(video!.querySelector('source')).toHaveAttribute('src', DEMO_VIDEO_SRC);
    expect(focus.mock.contexts).toContain(video);
    focus.mockRestore();
  });

  it('plays over the poster image rather than downloading a poster of its own', () => {
    const { container } = render(<DemoVideo sizes="100vw" />);
    fireEvent.click(playButton()!);
    expect(container.querySelector('video')).not.toHaveAttribute('poster');
    expect(container.querySelector('img')).toBeInTheDocument();
  });
});
