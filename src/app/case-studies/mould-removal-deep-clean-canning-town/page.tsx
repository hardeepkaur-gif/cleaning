import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import {
  caseStudyMeta,
  caseStudyPath,
} from "@/components/case-studies/caseStudyData";
import { mouldRemovalCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: caseStudyMeta.title,
  description: caseStudyMeta.description,
  alternates: {
    canonical: caseStudyPath,
  },
};

export default function MouldRemovalCaseStudyPage() {
  return (
    <>
      <JsonLd data={mouldRemovalCaseStudySchema} />
      <main>
        <CaseStudyHero />
        <CaseStudyHeroBanner />
        <CaseStudyContent />
      </main>
    </>
  );
}
