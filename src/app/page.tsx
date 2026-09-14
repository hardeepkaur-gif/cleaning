import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroLeadFormSecond from "@/components/hero/HeroLeadFormSecond";
import AboutUs from "@/components/about/AboutUs";
import CtaSectionThree from "@/components/cta/CtaSectionThree";
import WhatMakesDifferent from "@/components/different/WhatMakesDifferent";
import ProfessionalClean from "@/components/included/ProfessionalClean";
import CtaSectionFour from "@/components/cta/CtaSectionFour";
import AreasSection from "@/components/areas/AreasSection";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/organizationSchema";
import { homePageSchema } from "@/lib/pageSchemas";

const ServicesTabsIcons = dynamic(
  () => import("@/components/services/ServicesTabsIcons"),
);
const ProcessSectionFour = dynamic(
  () => import("@/components/process/ProcessSectionFour"),
);
const FaqSection = dynamic(() => import("@/components/faq/FaqSection"));

export const metadata: Metadata = {
  title: "Cleaning Services London for Homes Landlords and Businesses",
  description:
    "Professional cleaning services in London for homes and businesses. DBS-checked, insured cleaners with fixed pricing and completion photo reports.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={homePageSchema} />
      <main>
        <HeroLeadFormSecond />
        <AboutUs />
        <ServicesTabsIcons />
        <CtaSectionThree />
        <WhatMakesDifferent />
        <ProfessionalClean />
        <CtaSectionFour />
        <ProcessSectionFour />
        <AreasSection />
        <FaqSection />
      </main>
    </>
  );
}
