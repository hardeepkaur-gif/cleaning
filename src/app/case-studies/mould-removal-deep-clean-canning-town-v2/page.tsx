import type { Metadata } from "next";
import CaseStudyV2 from "@/components/case-studies/CaseStudyV2";
import JsonLd from "@/components/seo/JsonLd";
import {
  caseStudyV2Meta,
  caseStudyV2Path,
} from "@/components/case-studies/caseStudyV2Data";
import { mouldRemovalCaseStudyV2Schema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: caseStudyV2Meta.title,
  description: caseStudyV2Meta.description,
  alternates: {
    canonical: caseStudyV2Path,
  },
};

export default function MouldRemovalCaseStudyV2Page() {
  return (
    <>
      <JsonLd data={mouldRemovalCaseStudyV2Schema} />
      <main>
        <CaseStudyV2 />
      </main>
    </>
  );
}
