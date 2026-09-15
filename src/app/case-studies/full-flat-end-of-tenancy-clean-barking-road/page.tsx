import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { eotBarkingRoadCaseStudyDesignA } from "@/components/case-studies/eotBarkingRoadCaseStudyData";
import { eotBarkingRoadCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: eotBarkingRoadCaseStudyDesignA.meta.title,
  description: eotBarkingRoadCaseStudyDesignA.meta.description,
  alternates: {
    canonical: eotBarkingRoadCaseStudyDesignA.path,
  },
};

export default function EotBarkingRoadCaseStudyPage() {
  const data = eotBarkingRoadCaseStudyDesignA;

  return (
    <>
      <JsonLd data={eotBarkingRoadCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
