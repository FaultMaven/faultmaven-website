'use client';

import {
  IconBellSlash,
  IconDocumentMinus,
  IconLoop,
} from '@/components/icons/homepage';

export default function ProblemSection() {
  return (
    <section className="py-32 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-6">
          Sound Familiar?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto text-center">
          If you&apos;re on the front lines keeping systems running, you know these challenges:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md bg-slate-50 dark:bg-slate-800/50 text-center hover:shadow-lg transition-shadow duration-200">
            <IconLoop className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Slow, Manual Troubleshooting
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Repetitive diagnostic steps eat up time, increasing MTTR and risk of human error.
            </p>
          </div>
          <div className="p-10 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md bg-slate-50 dark:bg-slate-800/50 text-center hover:shadow-lg transition-shadow duration-200">
            <IconBellSlash className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Alert Fatigue & Signal Noise
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Drowning in alerts makes it hard to distinguish critical issues from noise.
            </p>
          </div>
          <div className="p-10 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md bg-slate-50 dark:bg-slate-800/50 text-center hover:shadow-lg transition-shadow duration-200">
            <IconDocumentMinus className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Scattered Knowledge
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Reinventing solutions due to outdated runbooks and tribal knowledge loss.
            </p>
          </div>
        </div>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mt-16">
          These obstacles impact innovation, team morale, and the bottom line. <strong className="text-slate-700 dark:text-slate-300">FaultMaven changes that</strong>—our design partners are already seeing the difference.
        </p>
      </div>
    </section>
  );
}
