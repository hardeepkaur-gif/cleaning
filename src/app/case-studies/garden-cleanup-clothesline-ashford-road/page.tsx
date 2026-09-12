import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { gardenCleanupCaseStudyDesignA } from "@/components/case-studies/gardenCleanupCaseStudyData";
import { gardenCleanupClotheslineCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: gardenCleanupCaseStudyDesignA.meta.title,
  description: gardenCleanupCaseStudyDesignA.meta.description,
  alternates: {
    canonical: gardenCleanupCaseStudyDesignA.path,
  },
};

export default function GardenCleanupClotheslineCaseStudyPage() {
  const data = gardenCleanupCaseStudyDesignA;

  return (
    <>
      <JsonLd data={gardenCleanupClotheslineCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
