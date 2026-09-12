import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { gardenCaseStudyDesignA } from "@/components/case-studies/gardenCaseStudyData";
import { gardenFenceClearanceCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: gardenCaseStudyDesignA.meta.title,
  description: gardenCaseStudyDesignA.meta.description,
  alternates: {
    canonical: gardenCaseStudyDesignA.path,
  },
};

export default function GardenFenceClearanceCaseStudyPage() {
  const data = gardenCaseStudyDesignA;

  return (
    <>
      <JsonLd data={gardenFenceClearanceCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
