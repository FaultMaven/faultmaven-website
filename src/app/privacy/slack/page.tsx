import { Metadata } from 'next';
import Link from '@/components/ui/Link';

export const metadata: Metadata = {
  title: 'FaultMaven for Slack Privacy Policy',
  description:
    'What the FaultMaven Slack app accesses, when it accesses it, where that data goes, and what it does not do.',
  alternates: {
    canonical: '/privacy/slack',
  },
};

const accessTable = [
  {
    data: 'Workspace and installer identifiers, bot token',
    when: 'At install, via Slack OAuth',
    where: 'Stored by the FaultMaven Slack service',
    why: 'To authorize FaultMaven to post as the app in your workspace, and to keep each workspace isolated from every other',
  },
  {
    data: 'The message that summons FaultMaven',
    when: 'When you @mention it, run the "Ask" shortcut on a message, or send it a direct message',
    where: 'Forwarded to the FaultMaven backend',
    why: 'It is the problem statement the investigation starts from',
  },
  {
    data: 'Prior messages in the summoned thread',
    when: 'Once, on the first summons in a thread (capped in both message count and size)',
    where: 'Forwarded to the FaultMaven backend as catch-up context',
    why: 'So the investigation is not blind to the discussion that preceded the summons',
  },
  {
    data: 'Your replies in an active investigation thread',
    when: 'When you reply in a thread FaultMaven is already investigating',
    where: 'Forwarded to the FaultMaven backend',
    why: 'To continue the investigation without re-summoning',
  },
  {
    data: 'Files you share with it',
    when: 'When you attach a file to a message that summons or continues an investigation',
    where: 'Downloaded and forwarded to the FaultMaven backend',
    why: 'To analyze logs, traces, and configs as evidence',
  },
  {
    data: 'Thread-to-case mapping',
    when: 'When an investigation starts',
    where: 'Stored by the FaultMaven Slack service',
    why: 'To know which FaultMaven case a Slack thread belongs to. Stores identifiers, not message content',
  },
];

const scopeTable = [
  {
    scope: 'app_mentions:read',
    purpose: 'Receive @mentions so FaultMaven knows when it is summoned',
  },
  {
    scope: 'chat:write',
    purpose: 'Post its replies into the investigation thread',
  },
  {
    scope: 'assistant:write',
    purpose: 'Operate as a Slack AI assistant in the assistant and DM surfaces',
  },
  {
    scope: 'commands',
    purpose: 'Receive the "Ask" message shortcut you run on an alert or error',
  },
  {
    scope: 'reactions:write',
    purpose:
      'Mark a message with a reaction when FaultMaven had to drop it — a turn was already running in that thread — so you know to send it again',
  },
  {
    scope: 'files:read',
    purpose: 'Read the contents of files you share with an investigation',
  },
  {
    scope: 'im:history',
    purpose: 'Read direct messages you send to FaultMaven',
  },
  {
    scope: 'channels:history, groups:history',
    purpose:
      'Read the summoned thread for catch-up context, and recognize replies in threads FaultMaven is already investigating. See §3 for how everything else is discarded',
  },
];

const thClass =
  'text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-600 px-3 py-2';
const tdClass =
  'align-top border-b border-slate-200 dark:border-slate-700 px-3 py-2';

export default function SlackPrivacyPolicyPage() {
  return (
    <main>
      <section className="relative py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] dark:bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
            FaultMaven for Slack Privacy Policy
          </h1>
        </div>
      </section>

      <div className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <em>Effective Date: June 2, 2025</em>
              <br />
              <em>Last Updated: August 7, 2026</em>
              <br />
              <em>Applies to: the FaultMaven app for Slack</em>
            </p>
            <p>
              This policy explains what the FaultMaven Slack app
              (&quot;FaultMaven,&quot; &quot;the app&quot;) accesses in your
              workspace, when it accesses it, where that data goes, and what it
              does <strong>not</strong> do. For data collected by this website,
              see the{' '}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400">
                general FaultMaven privacy policy
              </Link>
              . For the browser extension, see the{' '}
              <Link
                href="/privacy/extension"
                className="text-blue-600 dark:text-blue-400"
              >
                FaultMaven Copilot extension privacy policy
              </Link>
              .
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-12 !mb-4">
              1. Who controls your data
            </h2>
            <p>
              The FaultMaven Slack app is a client. It forwards what you share
              to a FaultMaven backend, and which backend that is determines who
              controls the data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>FaultMaven Cloud</strong> — operated by the FaultMaven
                team. Investigation data you share in Slack is processed on
                FaultMaven Cloud to provide the troubleshooting service.
              </li>
              <li>
                <strong>FaultMaven Standalone</strong> — the self-hosted
                deployment, operated entirely by you or your organization on
                infrastructure you control. Investigation data goes to your
                server; retention and redaction are governed by your
                deployment&apos;s configuration.
              </li>
            </ul>
            <p>
              In both cases, the Slack app itself holds only what §2 lists: the
              workspace credentials it needs to reply, and a map from Slack
              threads to FaultMaven cases.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              2. What the app accesses and transmits
            </h2>
            <p>
              FaultMaven transmits data only as a result of an action you take —
              a summons, a reply in an investigation thread, or a file you
              share.
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

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              3. Summon-only: what happens to everything else
            </h2>
            <p>
              To recognize a summons and to follow a conversation it has been
              invited into, Slack delivers message events from channels
              FaultMaven is a member of. The app applies a strict gate to those
              events before anything is read, stored, or transmitted:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                A message that <strong>@mentions FaultMaven</strong> starts or
                re-engages an investigation in that thread.
              </li>
              <li>
                A reply <strong>inside a thread FaultMaven is already
                investigating</strong> continues that investigation.
              </li>
              <li>
                <strong>Every other channel message is discarded.</strong> The
                gate inspects only what it needs to make that decision — is
                this the app&apos;s own post, is it a reply in a thread, does it
                mention FaultMaven — and the message is then dropped in memory:
                not stored, not forwarded to the backend, not sent anywhere.
                Top-level channel messages never start an investigation, and
                FaultMaven never acts on threads it does not already own.
              </li>
            </ul>
            <p>
              The one exception to &quot;only what you send it&quot; is
              deliberate and bounded: on the <strong>first</strong> summons in a
              thread, FaultMaven reads that thread&apos;s recent prior replies
              once, as catch-up context, so it is not blind to the discussion
              that led you to call it. That read is limited to the summoned
              thread, excludes the app&apos;s own messages, is capped in both
              message count and size, and does not repeat on later turns.
            </p>
            <p>
              FaultMaven is not in any channel until someone invites it, and it
              posts its replies in-thread so the parent channel stays quiet.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              4. Permissions and why they are needed
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className={thClass}>Scope</th>
                    <th className={thClass}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {scopeTable.map((row) => (
                    <tr key={row.scope}>
                      <td className={tdClass}>
                        <strong>{row.scope}</strong>
                      </td>
                      <td className={tdClass}>{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              5. What the app does NOT do
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No ambient monitoring.</strong> FaultMaven does not
                follow along with channel conversations, build a record of who
                said what, or act on messages that neither summon it nor
                continue an investigation it owns.
              </li>
              <li>
                <strong>No third-party analytics or trackers.</strong> The app
                contains no advertising SDKs, session-replay, or behavioral
                telemetry.
              </li>
              <li>
                <strong>No data selling or sharing.</strong> Your data is not
                sold or shared with third parties. It is sent only to the
                FaultMaven backend serving your installation, and to the LLM
                provider that backend is configured to use.
              </li>
              <li>
                <strong>No access to your systems.</strong> FaultMaven has no
                credentials to your infrastructure and takes no action on it. It
                proposes; you approve and execute.
              </li>
              <li>
                <strong>No cross-workspace access.</strong> Installations are
                keyed by Slack workspace and are never cross-read between
                workspaces.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              6. Sensitive data and redaction
            </h2>
            <p>
              Troubleshooting data — logs, traces, configs — can contain
              sensitive values. Content forwarded to the FaultMaven backend is
              passed through a server-side PII redaction pipeline (Presidio)
              before it is stored and processed. Investigation content that
              reaches an upstream LLM provider is sent to enterprise
              zero-data-retention endpoints, so it is processed statelessly and
              is not retained for model training.
            </p>
            <p>
              When you use a Standalone FaultMaven backend, redaction,
              retention, and provider choice are governed by your own
              deployment&apos;s configuration. You remain responsible for the
              content you choose to share with FaultMaven; avoid sharing data
              you are not authorized to disclose.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              7. Data retention
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Slack app:</strong> removing FaultMaven from your
                workspace revokes its access immediately — the stored token
                stops working and no further data can be read. The installation
                record itself is not purged automatically; we delete it on
                request (see §8). The thread-to-case map holds identifiers
                only — workspace, channel, thread, and case IDs — never message
                content.
              </li>
              <li>
                <strong>Backend:</strong> cases, evidence, and reports are
                retained by the FaultMaven backend serving your installation,
                under that backend&apos;s retention policy. For Standalone
                deployments, retention is controlled by your organization.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              8. Your choices and rights
            </h2>
            <p>
              You can remove FaultMaven from your Slack workspace at any time
              from your workspace&apos;s app management settings; this revokes
              its access immediately. To request deletion of your installation
              record, of investigation data held on FaultMaven Cloud, or to
              exercise other rights you may have under your jurisdiction,
              contact us at{' '}
              <a href="mailto:support@faultmaven.ai">support@faultmaven.ai</a>.
              We will confirm when the deletion is complete.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              9. Children
            </h2>
            <p>
              FaultMaven is a professional engineering tool and is not directed
              to children under 13.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              10. Changes to this policy
            </h2>
            <p>
              We may update this policy as the app evolves. Material changes
              will be reflected by updating the &quot;Last Updated&quot; date
              above and publishing the revised policy at this URL.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 !mt-10 !mb-4">
              11. Contact
            </h2>
            <p>
              Questions about this policy or your data:
              <br />
              FaultMaven
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:support@faultmaven.ai">support@faultmaven.ai</a>
              <br />
              <strong>Support:</strong>{' '}
              <Link href="/support" className="text-blue-600 dark:text-blue-400">
                www.faultmaven.ai/support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
