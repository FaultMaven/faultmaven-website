import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How FaultMaven collects, uses, discloses, and safeguards your information when you visit www.faultmaven.ai and engage with any services we offer.',
  path: '/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="relative py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] dark:bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
            Privacy Policy
          </h1>
        </div>
      </section>

      <div className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <em>Effective Date: June 2, 2025</em>
              <br />
              <em>Last Updated: September 23, 2026</em>
            </p>
            <p>
              Welcome to FaultMaven (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;FaultMaven&quot;). We
              are committed to protecting your privacy and handling your
              information in an open and transparent manner. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website, www.faultmaven.ai (the
              &quot;Site&quot;), and engage with any services we may offer (collectively,
              the &quot;Services&quot;).
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree
              with the terms of this Privacy Policy, please do not access the
              Site.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-12 !mb-4">
              1. Information We Collect (Pre-Launch Phase)
            </h2>
            <p>
              As FaultMaven is currently in a pre-launch and development phase,
              our data collection through the Site is primarily focused on:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Information You Provide Voluntarily:</strong> Such as
                any information (name, contact details, inquiry details) you
                provide when you contact us via email or future feedback forms.
                Signing up for FaultMaven Cloud happens on the application at
                app.faultmaven.ai rather than on this Site.
              </li>
              <li>
                <strong>Standard Website Usage Data:</strong> We count page
                views on this Site with Vercel Web Analytics, which sets no
                cookies. It records the page visited, the referring site,
                browser, operating system, device type, and country, and tells
                visits apart with a hash of the request that is discarded
                within 24 hours — so it cannot follow you across days or across
                other websites. We use these counts to understand which pages
                are read and which ways of running FaultMaven visitors
                look into.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information collected during this pre-launch phase to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Communicate with you about FaultMaven, including development
                progress, early access programs, and responses to your direct
                inquiries.
              </li>
              <li>
                Gather feedback to inform and shape FaultMaven&apos;s development.
              </li>
              <li>
                Analyze website usage to improve our Site&apos;s content, design,
                and navigation.
              </li>
            </ul>
            <p>We will not sell your personal information to third parties.</p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">3. Data Security</h2>
            <p>
              We are implementing reasonable administrative, technical, and
              physical security measures to help protect your information. While
              we strive to use commercially acceptable means to protect your
              personal information, no method of transmission over the Internet
              or method of electronic storage is 100% secure.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              4. Product Data &amp; Related Policies
            </h2>
            <p>
              This Privacy Policy primarily addresses data collected via our
              informational website. Data handling for each FaultMaven product
              surface is covered by its own dedicated policy:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a href="/privacy/slack">
                  FaultMaven for Slack Privacy Policy
                </a>{' '}
                — what the Slack app accesses in your workspace, when, and why.
              </li>
              <li>
                <a href="/privacy/extension">
                  FaultMaven Copilot Extension Privacy Policy
                </a>{' '}
                — page capture, chat messages, and authentication data in the
                browser extension.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">5. Your Choices &amp; Rights</h2>
            <p>
              You may opt-out of any future email communications from us by
              following the unsubscribe link provided in our emails or by
              contacting us directly at{' '}
              <a href="mailto:support@faultmaven.ai">support@faultmaven.ai</a>.
              Depending on your jurisdiction, you may have other rights
              regarding your personal data.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to make changes to this Privacy Policy at any
              time and for any reason. We will alert you about any changes by
              updating the &quot;Last Updated&quot; date of this Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
              <br />
              FaultMaven
              <br />
              <a href="mailto:support@faultmaven.ai">support@faultmaven.ai</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
