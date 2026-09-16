import type { Metadata } from "next";
import AboutApproachSection from "@/components/about/AboutApproachSection";
import AboutFinalCtaSection from "@/components/about/AboutFinalCtaSection";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutPageHero from "@/components/about/AboutPageHero";
import AboutReviewsSection from "@/components/about/AboutReviewsSection";
import AboutServingSection from "@/components/about/AboutServingSection";
import AboutTrustSection from "@/components/about/AboutTrustSection";
import AboutWhyChooseSection from "@/components/about/AboutWhyChooseSection";
import JsonLd from "@/components/seo/JsonLd";
import { aboutPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "About Us | Cleaning Services London",
  description:
    "Cleaning Services London is a UK-based professional cleaning company providing dependable domestic, end-of-tenancy, carpet and gutter cleaning across London.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <main>
        <AboutPageHero />
        <AboutIntroSection />
        <AboutWhyChooseSection />
        <AboutApproachSection />
        <AboutTrustSection />
        <AboutFinalCtaSection />
        <AboutServingSection />
        <AboutReviewsSection />
      </main>
    </>
  );
}
