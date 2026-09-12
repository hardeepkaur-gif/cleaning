import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { bathroomCaseStudyDesignA } from "@/components/case-studies/bathroomCaseStudyData";
import { bathroomDeepCleanCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: bathroomCaseStudyDesignA.meta.title,
  description: bathroomCaseStudyDesignA.meta.description,
  alternates: {
    canonical: bathroomCaseStudyDesignA.path,
  },
};

export default function BathroomDeepCleanCaseStudyPage() {
  const data = bathroomCaseStudyDesignA;

  return (
    <>
      <JsonLd data={bathroomDeepCleanCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
