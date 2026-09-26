import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import ApproachSection from '@/components/sections/ApproachSection';
import TieredKnowledgeEngineSection from '@/components/sections/TieredKnowledgeEngineSection';
import RetrievalPipelineSection from '@/components/sections/RetrievalPipelineSection';
import SurfacesSection from '@/components/sections/SurfacesSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import OpenSourceTrustSection from '@/components/sections/OpenSourceTrustSection';
import VisionSnippet from '@/components/sections/VisionSnippet';
import FAQSnippet from '@/components/sections/FAQSnippet';
import FinalCTASection from '@/components/sections/FinalCTASection';

// Only what differs from the root layout: the layout's title template applies
// to child segments, never to the page in its own segment, so the home page is
// the one page that carries the layout's `title.default`, description and
// social card as they are.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// The layout already wraps every page in <main>. Sections alternate white and
// muted from the hero down; each section sets its own tone.
export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ApproachSection />
      <TieredKnowledgeEngineSection />
      <RetrievalPipelineSection />
      <SurfacesSection />
      <ComparisonSection />
      <OpenSourceTrustSection />
      <VisionSnippet />
      <FAQSnippet />
      <FinalCTASection />
    </>
  );
}
