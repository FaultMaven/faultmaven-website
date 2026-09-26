'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Play } from 'lucide-react';
import poster from '../../../public/video/faultmaven-slack-demo-poster.jpg';

// The one place the Slack demo recording is described. Its poster is a frame
// of the recording, so the poster's size is the video's.
export const DEMO_VIDEO_SRC = '/video/faultmaven-slack-demo.mp4';
const DURATION = '2:36';
const DURATION_SPOKEN = '2 minutes 36 seconds';
const DESCRIPTION =
  'FaultMaven investigating an api-gateway 503 incident inside a Slack thread, from the initial PagerDuty alert through to a resolved case.';

type DemoVideoProps = {
  /** The `sizes` for the poster at the width the page lays the video out. */
  sizes: string;
  /** Preload the poster: true where the video is above the fold. */
  priority?: boolean;
  caption?: ReactNode;
};

// The recording as its poster with a play button until someone presses play.
// The poster goes through next/image, so it is sized per viewport and blurred
// in; the 3.6 MB video is not requested until play. The player then sits over
// the same poster image with no poster of its own, so nothing is downloaded
// twice and the frame does not flash while the first video frame loads.
export default function DemoVideo({ sizes, priority = false, caption }: DemoVideoProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The play button unmounts on click; hand keyboard focus to the player.
  useEffect(() => {
    if (playing) videoRef.current?.focus();
  }, [playing]);

  return (
    <figure>
      <div
        className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white shadow-2xl"
        style={{ aspectRatio: `${poster.width} / ${poster.height}` }}
      >
        <Image src={poster} alt="" fill priority={priority} placeholder="blur" sizes={sizes} className="object-cover" />
        {playing ? (
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full"
            aria-label={`Screen recording: ${DESCRIPTION}`}
          >
            <source src={DEMO_VIDEO_SRC} type="video/mp4" />
            Your browser cannot play this video. It is a screen recording of a FaultMaven
            investigation running in a Slack thread.
          </video>
        ) : (
          // The focus indicator is an outline drawn inside the frame: an inset
          // ring would sit under the poster, and forced-colors mode drops
          // box-shadows but keeps outlines.
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full focus:outline-none focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-blue-500"
            aria-label={`Play the screen recording: ${DESCRIPTION} ${DURATION_SPOKEN}, no sound.`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 transition-colors duration-200 group-hover:from-slate-900/60 group-focus-visible:from-slate-900/60"
            />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl ring-8 ring-white/70 transition duration-200 group-hover:scale-105 group-hover:bg-blue-700 group-focus-visible:scale-105 group-focus-visible:bg-blue-700 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </span>
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-4 rounded-md bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-white"
            >
              FaultMaven for Slack · {DURATION}
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{caption}</figcaption>
      )}
    </figure>
  );
}
