import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { mouldCaseStudyDesignA } from "@/components/case-studies/caseStudyData";
import { mouldRemovalCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: mouldCaseStudyDesignA.meta.title,
  description: mouldCaseStudyDesignA.meta.description,
  alternates: {
    canonical: mouldCaseStudyDesignA.path,
  },
};

export default function MouldRemovalCaseStudyPage() {
  const data = mouldCaseStudyDesignA;

  return (
    <>
      <JsonLd data={mouldRemovalCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
