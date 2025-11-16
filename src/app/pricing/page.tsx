import Link from 'next/link';
import Button from '@/components/ui/Button';

const guidingPrinciples = [
  {
    title: 'Value First, Always:',
    text: 'Your success truly defines ours. When we introduce pricing, it will directly reflect the significant, measurable benefits you gain from your AI Copilot: substantially reduced MTTR, critical time saved for your engineering teams, enhanced problem-solving capabilities, and the power of easily accessible, collaborative knowledge. We aim for FaultMaven to be an investment that pays for itself many times over.'
  },
  {
    title: 'Fueling Sustainable Innovation:',
    text: 'Fair and thoughtful pricing ensures we can continuously invest in the cutting-edge research, development, and features that FaultMaven needs to evolve and consistently meet your most demanding operational challenges. This sustainability is key to our long-term partnership with you.'
  },
  {
    title: 'Transparency & Scalable Fairness:',
    text: 'Expect no convoluted schemes or hidden costs. Our future pricing will be clear, straightforward, and designed to scale intuitively with your needs—from empowering individual engineers with FaultMaven 1.0 to supporting the collaborative intelligence of entire teams with our 2.0 vision.'
  },
  {
    title: 'Partnership at Our Core:',
    text: 'Your insights, especially as an early partner, are invaluable. We are genuinely building FaultMaven with you, not just for you. This collaborative spirit means we listen intently and adapt, ensuring the product and its value grow in alignment with your real-world experiences.'
  },
  {
    title: 'Commitment to the Community:',
    text: 'We believe in the power of the engineering community and the strategic value of giving back. As FaultMaven grows, we are committed to supporting the AIOps and SRE ecosystems, actively exploring opportunities for open-source contributions and the sharing of knowledge and resources.'
  }
];

const earlyPartnerBenefits = [
  {
    title: 'Shape the Tool:',
    text: 'Directly influence the development of a solution designed to solve your toughest operational challenges.'
  },
  {
    title: 'Gain Early Expertise:',
    text: 'Become proficient with a groundbreaking AI Copilot and lead the way in AI-augmented troubleshooting.'
  },
  {
    title: 'Earn Founding Member Status:',
    text: 'Be recognized as an integral part of the pioneering FaultMaven community, with a voice in its evolution.'
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 text-center bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Transparent, Value-Driven Pricing
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            We&apos;re finalizing pricing with our design partners to ensure it reflects the value FaultMaven delivers.
          </p>
          <div className="inline-block bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-xl mx-auto">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Expected: $49-99/user/month
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Less than the cost of 1 hour of downtime • Team discounts available
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Pricing Model</h3>
              <p className="text-slate-700 dark:text-slate-300">Per-user subscription with team volume discounts. No hidden fees or complex tiers.</p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Free Tier</h3>
              <p className="text-slate-700 dark:text-slate-300">Generous free tier planned for individual engineers and open-source projects.</p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">ROI Promise</h3>
              <p className="text-slate-700 dark:text-slate-300">Pricing designed to deliver measurable ROI through reduced MTTR and saved engineering time.</p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Transparent & Fair</h3>
              <p className="text-slate-700 dark:text-slate-300">Clear pricing that scales with value. Grandfather pricing for early adopters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Partner Benefits Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 text-center md:text-left">
            Why Partner with FaultMaven Early?
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300 space-y-4 mb-8">
            <p>
              Joining us during these foundational stages offers a unique opportunity beyond just early access:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {earlyPartnerBenefits.map((benefit, index) => (
                <li key={index}><strong>{benefit.title}</strong> {benefit.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto text-center rounded-xl p-10 bg-white dark:bg-slate-900 shadow-md">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Stay Informed & Join the Journey:
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300 space-y-6 mx-auto">
            <p>
              We invite you to join us as we build. Be the first to receive updates on FaultMaven&apos;s development, early access programs, and our approach to pricing as it solidifies.
            </p>
            <Button asChild href="/waitlist" variant="primary" className="mt-4">
              Apply for Early Access
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
