import { PanelRight } from 'lucide-react';
import InceptionMembership from '@/components/ui/InceptionMembership';
import { textLinkClass } from '@/components/ui/Section';
import { CHROME_WEB_STORE_URL } from '@/lib/links';

// A ruled band under the hero for facts a third party has granted, each stated
// as a sentence about FaultMaven. Claims FaultMaven makes about itself (fair
// source, self-hostable) already open the hero and do not belong here.
export default function CredentialsStrip() {
  return (
    <div className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-16 gap-y-4 px-6 py-6">
        <InceptionMembership badgeClassName="h-11" />
        <p className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
          <PanelRight aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400" />
          <span>
            FaultMaven Copilot is available in the{' '}
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
              Chrome Web Store
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
