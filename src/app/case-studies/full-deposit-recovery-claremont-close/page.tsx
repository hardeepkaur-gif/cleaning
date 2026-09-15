import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { eotClaremontCaseStudyDesignA } from "@/components/case-studies/eotClaremontCaseStudyData";
import { eotClaremontCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: eotClaremontCaseStudyDesignA.meta.title,
  description: eotClaremontCaseStudyDesignA.meta.description,
  alternates: {
    canonical: eotClaremontCaseStudyDesignA.path,
  },
};

export default function EotClaremontCaseStudyPage() {
  const data = eotClaremontCaseStudyDesignA;

  return (
    <>
      <JsonLd data={eotClaremontCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
