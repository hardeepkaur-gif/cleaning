import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { bathroomMouldCaseStudyDesignA } from "@/components/case-studies/bathroomMouldCaseStudyData";
import { bathroomMouldTreatmentCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: bathroomMouldCaseStudyDesignA.meta.title,
  description: bathroomMouldCaseStudyDesignA.meta.description,
  alternates: {
    canonical: bathroomMouldCaseStudyDesignA.path,
  },
};

export default function BathroomMouldTreatmentCaseStudyPage() {
  const data = bathroomMouldCaseStudyDesignA;

  return (
    <>
      <JsonLd data={bathroomMouldTreatmentCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
