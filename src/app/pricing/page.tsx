import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section - The 3 AM Test */}
      <section className="py-20 text-center bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            The 3 AM Test: What&apos;s Your Sleep Worth?
          </h1>

          <div className="text-left max-w-3xl mx-auto mb-12 space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <strong>Let&apos;s do the math:</strong>
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              You get paged at 3:14 AM. It&apos;s a database timeout. You&apos;ve seen this before... somewhere.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              You spend 3 hours:
            </p>
            <ul className="list-disc pl-8 text-lg text-slate-700 dark:text-slate-300 space-y-2">
              <li>Grep-ing through 47 microservices worth of logs</li>
              <li>Asking Slack &quot;has anyone seen this?&quot; (crickets)</li>
              <li>Googling generic error messages</li>
              <li>Finally finding the fix in a Confluence page from 2021</li>
            </ul>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <strong>Cost:</strong> 3 hours × $100/hour (loaded) = <span className="text-2xl font-bold text-red-600 dark:text-red-400">$300</span><br />
              <strong>Emotional cost:</strong> Your sleep schedule, your sanity, your will to live.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Now imagine FaultMaven answers in 30 seconds because it remembers the last time this happened.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <strong>Savings:</strong> 2.5 hours = <span className="text-2xl font-bold text-green-600 dark:text-green-400">$250</span><br />
              <strong>Emotional savings:</strong> Priceless (and you&apos;re back in bed by 3:30 AM).
            </p>
          </div>

          <hr className="my-12 border-slate-200 dark:border-slate-700" />

          {/* Future Pricing */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Our Plan (When We Actually Charge Money):
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 text-left">
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Open Source: $0/month
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Forever. Self-hosted. Full privacy.
                </p>
                <Button asChild href="https://github.com/FaultMaven/faultmaven#quick-start" variant="secondary" className="w-full">
                  Deploy Open Source
                </Button>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-left">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Enterprise: $49-99/user/month
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  SSO, teams, managed hosting, SLA
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-4">
                  If you use it twice a month, it pays for itself.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-slate-200 dark:border-slate-700" />

          {/* Current Reality - Beta Founders */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              But Right Now? It&apos;s Free.
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 italic">
              Why? Because it&apos;s hard to prove FaultMaven saves 2.5 hours without, you know, actual engineers at actual 3 AM incidents.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              We need you more than you need us right now. We need:
            </p>
            <ul className="list-disc pl-8 text-lg text-slate-700 dark:text-slate-300 space-y-2 mb-8 text-left max-w-2xl mx-auto">
              <li>Real incidents (not contrived demos)</li>
              <li>Real data (messy, chaotic, production-y)</li>
              <li>Real feedback (&quot;this saved my ass&quot; or &quot;this was useless&quot;)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Beta Founders Program */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
            The &quot;Beta Founders&quot; Deal
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              We are opening limited spots for our <strong>Founding Beta Program</strong>.
            </p>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">What you get:</h3>
              <ul className="list-disc pl-6 text-lg text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                <li>Full Enterprise access (SSO, Teams, Managed Cloud) for <strong className="text-green-600 dark:text-green-400">$0/month</strong></li>
                <li>No credit card</li>
                <li>No time limit</li>
                <li>Grandfathered status when we launch paid tiers</li>
              </ul>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">The Catch:</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                We want your brutally honest feedback. Tell us what breaks. Tell us if it saved you time. Tell us if it sucked.
              </p>
            </div>

            <div className="text-center">
              <Button asChild href="/contact" variant="primary" className="text-lg px-8 py-4">
                Apply for Beta Access
              </Button>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                Tell us about your last painful incident. If it sounds painful enough, you&apos;re in.
              </p>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-center text-slate-700 dark:text-slate-300">
                <strong>Fair warning:</strong> If you aren&apos;t actually getting paged or debugging complex systems, stick to the Open Source version for now. We are optimizing for people in pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                &quot;Free? What&apos;s the catch?&quot;
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                The catch is we&apos;ll ask you for feedback. A lot of feedback. And if FaultMaven saves your ass at 3 AM, we might ask to anonymize your story and share it. That&apos;s it. No credit card traps, no surprise bills, no selling your data.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                When we start charging, Beta Founders get grandfathered pricing (we&apos;ll tell you what that means before we charge anyone).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                &quot;How do I apply?&quot;
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contact us</Link> and tell us about your last painful incident. The more details, the better. We want to know:
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mt-2">
                <li>What broke</li>
                <li>How long it took to fix</li>
                <li>What made it hard to debug</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                If we think FaultMaven can help, you&apos;re in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
