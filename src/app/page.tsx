import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import ApproachSection from "@/components/sections/ApproachSection";
import TieredKnowledgeEngineSection from "@/components/sections/TieredKnowledgeEngineSection";
import RetrievalPipelineSection from "@/components/sections/RetrievalPipelineSection";
import SurfacesSection from "@/components/sections/SurfacesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import DeploymentOptionsSection from "@/components/sections/DeploymentOptionsSection";
import OpenSourceTrustSection from "@/components/sections/OpenSourceTrustSection";
import VisionSnippet from "@/components/sections/VisionSnippet";

// Only what differs from the root layout: the layout's title template applies
// to child segments, never to the page in its own segment, so the home page is
// the one page that carries the layout's `title.default`, description and
// social card as they are.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// Dynamically import FAQSnippet for code splitting
const FAQSnippet = dynamic(() => import("@/components/sections/FAQSnippet"), {
  loading: () => (
    <div className="py-16 bg-slate-50 dark:bg-slate-800/50 animate-pulse">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-8"></div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map(i => (
            <div key={i} className="h-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
});

const FinalCTASection = dynamic(() => import('@/components/sections/FinalCTASection'), {
  loading: () => (
    <div className="py-20 bg-blue-50 dark:bg-blue-900/20 animate-pulse">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-12 bg-blue-200 dark:bg-blue-700 rounded w-1/2 mb-8"></div>
        <div className="h-8 bg-blue-200 dark:bg-blue-700 rounded w-1/3"></div>
      </div>
    </div>
  )
});

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ApproachSection />
      <TieredKnowledgeEngineSection />
      <RetrievalPipelineSection />
      <SurfacesSection />
      <ComparisonSection />
      <DeploymentOptionsSection />
      <OpenSourceTrustSection />
      <VisionSnippet />
      <FAQSnippet />
      <FinalCTASection />
    </main>
  );
}
