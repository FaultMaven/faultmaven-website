import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FaultMaven Copilot Extension Privacy Policy',
  description:
    'What data the FaultMaven Copilot browser extension accesses, where it goes, and what it does not do.',
};

const accessTable = [
  {
    data: 'Page content (visible text of the current tab)',
    when: 'Only when you explicitly click "capture page" for the active tab',
    where: 'Your configured FaultMaven backend',
    why: 'So the assistant can analyze logs, stack traces, and dashboard data you are looking at',
  },
  {
    data: 'Messages, questions, and pasted text',
    when: 'When you send them in the chat',
    where: 'Your configured FaultMaven backend',
    why: 'To answer your troubleshooting questions',
  },
  {
    data: 'Files you upload',
    when: 'When you attach a file',
    where: 'Your configured FaultMaven backend',
    why: 'To analyze logs/evidence you provide',
  },
  {
    data: 'Authentication tokens',
    when: 'During and after login',
    where: 'Stored locally; sent to your backend on each request to authenticate you',
    why: 'To keep you signed in securely',
  },
];

const permissionTable = [
  {
    permission: 'storage',
    purpose: 'Store auth tokens, session, and settings locally',
  },
  {
    permission: 'sidePanel',
    purpose: 'Render the assistant in the browser side panel',
  },
  {
    permission: 'activeTab + scripting',
    purpose:
      "Capture the current tab's content only when you initiate a capture",
  },
  {
    permission: 'tabs',
    purpose:
      'Detect completion of the OAuth login redirect and manage the login tab',
  },
  {
    permission: 'Host access to your FaultMaven backend',
    purpose: 'Communicate with the API you authenticate against',
  },
  {
    permission: 'Optional host access to other sites',
    purpose:
      'Granted on demand, per site, the first time you capture that site',
  },
];

const thClass =
  'text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-600 px-3 py-2';
const tdClass =
  'align-top border-b border-slate-200 dark:border-slate-700 px-3 py-2';

export default function ExtensionPrivacyPolicyPage() {
  return (
    <main>
      <section className="relative py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] dark:bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
            FaultMaven Copilot Extension Privacy Policy
          </h1>
        </div>
      </section>

      <div className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <em>Effective Date: June 15, 2026</em>
              <br />
              <em>
                Applies to: FaultMaven Copilot browser extension (Chrome / Edge
                / Firefox)
              </em>
            </p>
            <p>
              FaultMaven Copilot (&quot;the extension&quot;) is the browser
              interface for FaultMaven, an AI-powered troubleshooting copilot.
              This policy explains exactly what data the extension accesses,
              where that data goes, and what it does <strong>not</strong> do.
              For data collected by this website, see the{' '}
              <a href="/privacy">general FaultMaven privacy policy</a>.
            </p>
            <p>
              We designed the extension to be a thin, transparent client: it
              does not have its own servers, analytics, or trackers. It sends
              data only to the <strong>FaultMaven backend you choose to
              connect to</strong> — either FaultMaven Cloud
              (https://api.faultmaven.ai) or a self-hosted FaultMaven server
              that you or your organization operates.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-12 !mb-4">
              1. Who controls your data
            </h2>
            <p>The data controller depends on which backend you connect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>FaultMaven Cloud</strong> (app.faultmaven.ai /
                api.faultmaven.ai) — operated by the FaultMaven team. Data you
                submit is processed on FaultMaven Cloud to provide the
                troubleshooting service.
              </li>
              <li>
                <strong>Self-hosted FaultMaven</strong> — operated entirely by
                you or your organization on infrastructure you control. The
                extension sends data only to the server URL you configure in
                Settings. The FaultMaven team does not receive that data.
              </li>
            </ul>
            <p>
              The extension defaults to FaultMaven Cloud. You can point it at a
              self-hosted server at any time from the Settings screen.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              2. What the extension accesses and transmits
            </h2>
            <p>
              The extension only transmits data to your configured FaultMaven
              backend, and only as a result of actions you take. Specifically:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className={thClass}>Data</th>
                    <th className={thClass}>When</th>
                    <th className={thClass}>Where it goes</th>
                    <th className={thClass}>Why</th>
                  </tr>
                </thead>
                <tbody>
                  {accessTable.map((row) => (
                    <tr key={row.data}>
                      <td className={tdClass}>
                        <strong>{row.data}</strong>
                      </td>
                      <td className={tdClass}>{row.when}</td>
                      <td className={tdClass}>{row.where}</td>
                      <td className={tdClass}>{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              <strong>Page capture is never automatic.</strong> The extension
              only reads page content when you initiate a capture, and only
              from the tab that is active at that moment. It does not run a
              background script on every website, and it does not silently read
              or monitor the pages you browse.
            </p>
            <p>
              For sites other than your FaultMaven backend, the extension
              requests host access <strong>at the moment you first capture
              that site</strong>, and your browser shows a standard permission
              prompt that you can decline.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              3. What is stored on your device
            </h2>
            <p>
              The extension stores the following in your browser&apos;s local
              extension storage (chrome.storage.local) so the app can function:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Authentication tokens and session identifiers (access token,
                session ID, PKCE verifiers, redirect URI)
              </li>
              <li>Your settings (the backend URL you configured)</li>
              <li>
                Limited cached case/conversation state for the case you are
                currently viewing
              </li>
              <li>First-run and backend-capability flags</li>
            </ul>
            <p>
              This data stays on your device. It is cleared when you log out or
              uninstall the extension. You can also clear it via your
              browser&apos;s extension settings.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              4. What the extension does NOT do
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No third-party analytics or trackers.</strong> The
                extension contains no Google Analytics, advertising SDKs,
                session-replay, or other telemetry.
              </li>
              <li>
                <strong>No data selling or sharing.</strong> Your data is not
                sold or shared with third parties. It is sent only to the
                FaultMaven backend you connect to.
              </li>
              <li>
                <strong>No browsing surveillance.</strong> The extension does
                not log your browsing history, monitor tabs in the background,
                or capture pages you have not asked it to capture.
              </li>
              <li>
                <strong>No use beyond the feature.</strong> Data you submit is
                used solely to provide the troubleshooting copilot. It is not
                used for advertising or for unrelated purposes, and it is not
                used to train models except as separately disclosed and
                consented to by your FaultMaven backend operator.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              5. Sensitive data and redaction
            </h2>
            <p>
              Troubleshooting data (logs, traces) can contain sensitive values.
              The FaultMaven backend applies server-side PII redaction (for
              example, emails, secrets, and credentials) before storing and
              processing content. When using a self-hosted backend, redaction
              and retention are governed by your own deployment&apos;s
              configuration and policies.
            </p>
            <p>
              You remain responsible for the content you choose to capture and
              submit. Avoid submitting data you are not authorized to share.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              6. Permissions and why they are needed
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className={thClass}>Permission</th>
                    <th className={thClass}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {permissionTable.map((row) => (
                    <tr key={row.permission}>
                      <td className={tdClass}>
                        <strong>{row.permission}</strong>
                      </td>
                      <td className={tdClass}>{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              7. Data retention
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Local (device):</strong> retained until logout or
                uninstall, as described in §3.
              </li>
              <li>
                <strong>Backend:</strong> case data, conversations, and reports
                are retained by your FaultMaven backend according to that
                backend&apos;s retention policy. For FaultMaven Cloud, see the
                FaultMaven Cloud terms. For self-hosted, retention is
                controlled by your organization.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              8. Children
            </h2>
            <p>
              FaultMaven Copilot is a professional engineering tool and is not
              directed to children under 13.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              9. Changes to this policy
            </h2>
            <p>
              We may update this policy as the extension evolves. Material
              changes will be reflected by updating the effective date above
              and publishing the revised policy at this URL.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              10. Contact
            </h2>
            <p>
              Questions about this policy or your data:
              <br />
              <strong>Issues:</strong>{' '}
              <a href="https://github.com/FaultMaven/faultmaven-copilot/issues">
                github.com/FaultMaven/faultmaven-copilot/issues
              </a>
              <br />
              <strong>Discussions:</strong>{' '}
              <a href="https://github.com/FaultMaven/faultmaven/discussions">
                github.com/FaultMaven/faultmaven/discussions
              </a>
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:engineering@faultmaven.ai">engineering@faultmaven.ai</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
