import Link from '@/components/ui/Link';
import { Card, CardTitle, IconTile } from '@/components/ui/card';
import { PageHeader, Section, SectionHeader, subsectionTitleClass } from '@/components/ui/Section';
import { Mail, Handshake, TrendingUp, Users, Info, HeartHandshake } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Connect with FaultMaven',
  description:
    "We're building FaultMaven to solve real operational problems, and the best way to do that is to talk with the engineers who live them.",
  path: '/contact',
});

const subjectLines = [
  {
    icon: <Handshake aria-hidden="true" />,
    title: 'Product Feedback & Cloud Beta',
    desc: 'For engineers running FaultMaven (deploy Standalone free) or interested in the Cloud beta — share troubleshooting challenges, bugs, or what you’d like to see next.'
  },
  {
    icon: <TrendingUp aria-hidden="true" />, 
    title: 'Investor Inquiry',
    desc: 'For discussions regarding strategic investment opportunities or to request our Vision Deck.'
  },
  {
    icon: <Users aria-hidden="true" />, 
    title: 'Talent & Collaboration Inquiry',
    desc: "If you're passionate about our mission and interested in exploring future roles or contributing your expertise."
  },
  {
    icon: <Info aria-hidden="true" />, 
    title: 'General Question / Other',
    desc: 'For any other questions, comments, or information requests about FaultMaven.'
  },
];

const navCards = [
  {
    icon: <TrendingUp aria-hidden="true" />, 
    title: 'Explore Our Vision',
    desc: 'See our long-term plans and product evolution.',
    href: '/roadmap',
  },
  {
    icon: <Users aria-hidden="true" />,
    title: 'Get Support',
    desc: 'Report a bug, or find out what to include when you do.',
    href: '/support',
  },
  {
    icon: <Info aria-hidden="true" />, 
    title: 'Read the FAQ',
    desc: 'Find answers to common questions.',
    href: '/faq',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Connect with FaultMaven"
        lead={
          <p>
            We&apos;re building FaultMaven to solve real operational problems, and the best way to do that is to talk with the engineers who live them. Whether you have a question, want to share your expertise, explore a collaboration, or simply learn more, we&apos;re ready to listen.<br />
            Your insights, feedback, and inquiries directly shape where FaultMaven goes next.
          </p>
        }
      />

      <Section width="narrow">
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {/* Left: Email */}
          <Card highlight className="flex flex-col items-center justify-center text-center">
            <IconTile>
              <Mail aria-hidden="true" />
            </IconTile>
            <a href="mailto:support@faultmaven.ai" className="mb-2 text-2xl font-bold text-blue-700 hover:underline dark:text-blue-400">
              support@faultmaven.ai
            </a>
            <p className="text-lg text-slate-700 dark:text-slate-300">We&apos;d love to hear from you!</p>
          </Card>
          {/* Right: Subject Lines */}
          <Card>
            <h2 className={`${subsectionTitleClass} mb-2`}>How to Reach Us</h2>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
              When emailing us, please use one of the following subject lines to help us respond quickly:
            </p>
            <ul className="space-y-5">
              {subjectLines.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-0.5 text-blue-600 dark:text-blue-400 [&>svg]:h-5 [&>svg]:w-5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-200">{item.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Other ways to engage */}
      <Section tone="muted" width="narrow">
        <SectionHeader title="More Ways to Connect" />
        <div className="grid gap-8 md:grid-cols-3">
          {navCards.map((card, idx) => (
            <Link key={idx} href={card.href} className="group block rounded-xl hover:no-underline">
              <Card className="h-full transition group-hover:border-blue-300 group-hover:shadow-md">
                <IconTile>{card.icon}</IconTile>
                <CardTitle className="mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400">{card.title}</CardTitle>
                <p className="text-slate-600 dark:text-slate-400">{card.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Commitment */}
      <Section size="compact" width="narrow">
        <div className="flex flex-col items-center rounded-xl border border-blue-200 bg-blue-50 p-8 text-center dark:border-blue-900 dark:bg-blue-950/40">
          <HeartHandshake aria-hidden="true" className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h2 className={`${subsectionTitleClass} mb-3`}>Our Commitment</h2>
          <p className="mx-auto mb-2 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            We value your interest and aim to respond to all inquiries as promptly as possible. As we are a focused team in a dynamic development phase, please allow for a reasonable response time.
          </p>
          <p className="mx-auto max-w-2xl text-lg text-slate-700 dark:text-slate-300">We look forward to connecting with you!</p>
        </div>
      </Section>
    </>
  );
}
