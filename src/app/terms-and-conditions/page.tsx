import type { Metadata } from "next";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";
import JsonLd from "@/components/seo/JsonLd";
import { termsPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cleaning Services London",
  description:
    "Read the Terms & Conditions that apply when you book or purchase cleaning services from CL Cleaning Services London.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd data={termsPageSchema} />
      <main>
        <TermsHero />
        <TermsContent />
      </main>
    </>
  );
}
