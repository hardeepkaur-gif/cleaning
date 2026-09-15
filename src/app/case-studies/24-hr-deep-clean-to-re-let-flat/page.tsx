import type { Metadata } from "next";
import CaseStudyHeroBanner from "@/components/case-studies/CaseStudyHeroBanner";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import JsonLd from "@/components/seo/JsonLd";
import { reletDeepCleanCaseStudyDesignA } from "@/components/case-studies/reletDeepCleanCaseStudyData";
import { reletDeepCleanCaseStudySchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: reletDeepCleanCaseStudyDesignA.meta.title,
  description: reletDeepCleanCaseStudyDesignA.meta.description,
  alternates: {
    canonical: reletDeepCleanCaseStudyDesignA.path,
  },
};

export default function ReletDeepCleanCaseStudyPage() {
  const data = reletDeepCleanCaseStudyDesignA;

  return (
    <>
      <JsonLd data={reletDeepCleanCaseStudySchema} />
      <main>
        <CaseStudyHeroBanner data={data.heroBanner} />
        <CaseStudyContent data={data} />
      </main>
    </>
  );
}
