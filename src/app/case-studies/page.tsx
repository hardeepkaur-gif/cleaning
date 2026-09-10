import type { Metadata } from "next";
import CaseStudiesIndexHero from "@/components/case-studies/CaseStudiesIndexHero";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import JsonLd from "@/components/seo/JsonLd";
import { caseStudiesIndexSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Case Studies | Cleaning Services London",
  description:
    "Read Cleaning Services London case studies from East London — including urgent mould removal and deep cleaning in Canning Town.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={caseStudiesIndexSchema} />
      <main>
        <CaseStudiesIndexHero />
        <CaseStudiesList />
      </main>
    </>
  );
}
