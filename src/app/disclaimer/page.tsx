import type { Metadata } from "next";
import DisclaimerHero from "@/components/disclaimer/DisclaimerHero";
import DisclaimerContent from "@/components/disclaimer/DisclaimerContent";
import JsonLd from "@/components/seo/JsonLd";
import { disclaimerPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Disclaimer | Cleaning Services London",
  description:
    "Read the Disclaimer for clcleaningserviceslondon.co.uk and the cleaning services provided by CL Cleaning Services London.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd data={disclaimerPageSchema} />
      <main>
        <DisclaimerHero />
        <DisclaimerContent />
      </main>
    </>
  );
}
