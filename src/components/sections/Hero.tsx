'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import Button from '../ui/Button';
import { SELF_HOST_PATH, TRY_CLOUD_URL } from '@/lib/links';
import demoPoster from '../../../public/video/faultmaven-slack-demo-poster.jpg';

const DEMO_VIDEO_SRC = '/video/faultmaven-slack-demo.mp4';

// The recording /slack plays, shown as its poster with a play button until
// clicked. The poster goes through next/image, so it is sized, preloaded and
// blurred in like the image it replaces; the 3.6 MB video loads only on play.
function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The play button unmounts on click; hand keyboard focus to the player.
  useEffect(() => {
    if (playing) videoRef.current?.focus();
  }, [playing]);

  return (
    <figure>
      <div className="relative aspect-[1280/946] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white shadow-2xl">
        {playing ? (
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            poster={demoPoster.src}
            className="h-full w-full bg-slate-900"
            aria-label="Screen recording: FaultMaven investigating an api-gateway 503 incident inside a Slack thread, from the initial PagerDuty alert through to a resolved case."
          >
            <source src={DEMO_VIDEO_SRC} type="video/mp4" />
            Your browser cannot play this video. It is a screen recording of a FaultMaven
            investigation running in a Slack thread.
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-500"
            aria-label="Play the screen recording: FaultMaven investigating a production incident in a Slack thread, 2 minutes 36 seconds, no sound"
          >
            <Image
              src={demoPoster}
              alt=""
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 transition-colors duration-200 group-hover:from-slate-900/60"
            />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl ring-8 ring-white/70 transition duration-200 group-hover:scale-105 group-hover:bg-blue-700 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </span>
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-4 rounded-md bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-white"
            >
              FaultMaven for Slack · 2:36
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        Uncut screen recording, no sound: FaultMaven works an api-gateway 503 in a Slack thread,
        from the PagerDuty alert to a resolved case.
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full">
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                Fair Source · Self-Hostable · No Production Credentials
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50 leading-tight"
            >
              The AI Troubleshooting Copilot — Run It Yourself, or Let Us Run It for You
            </h1>

            <div className="text-lg md:text-xl mb-6 max-w-2xl text-slate-600 dark:text-slate-400 space-y-4">
              <p className="font-semibold text-slate-900 dark:text-slate-200">
                Same engine either way. Fair source, so you are never locked in.
              </p>
              <p>
                FaultMaven works a problem the way a
                seasoned engineer does — goal-driven, methodical, and grounded in evidence — and
                leads, driving the investigation to the next decisive step.
              </p>
              <p>
                It correlates the logs, metrics, and configs you bring it with your runbooks, docs,
                and past fixes, and every problem it solves becomes knowledge it reuses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild href={TRY_CLOUD_URL} variant="primary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Start on FaultMaven Cloud
              </Button>
              <Button asChild href={SELF_HOST_PATH} variant="secondary" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Self-host it
              </Button>
            </div>
            <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
              FaultMaven Cloud runs it for you, with nothing to install or operate. Self-hosting runs
              the same fair-source engine on your own hardware. Or{' '}
              <a
                href="/investigation"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                read a real investigation
              </a>{' '}
              first.
            </p>
          </div>
          <DemoVideo />
        </div>
        <div className="text-center mt-24">
          <hr className="my-10 border-slate-200 dark:border-slate-700" />
          <div className="mx-auto max-w-2xl mt-10">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              No magic. The evidence you share, the runbooks it retrieves, and a method it does not skip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
