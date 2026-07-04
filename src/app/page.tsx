import HeroCoreclean from "@/components/hero/HeroCoreclean";
import AboutUs from "@/components/about/AboutUs";
import ServicesSection from "@/components/services/ServicesSection";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServicesTabsIcons from "@/components/services/ServicesTabsIcons";
import WhyChooseUs from "@/components/why/WhyChooseUs";
import WhyChooseUsAlt from "@/components/why/WhyChooseUsAlt";
import CtaSection from "@/components/cta/CtaSection";
import CtaSectionAlt from "@/components/cta/CtaSectionAlt";
import CtaSectionThree from "@/components/cta/CtaSectionThree";
import WhatMakesDifferent from "@/components/different/WhatMakesDifferent";
import ProfessionalClean from "@/components/included/ProfessionalClean";
import CtaSectionFour from "@/components/cta/CtaSectionFour";
import PricingSection from "@/components/pricing/PricingSection";
import TenancySection from "@/components/tenancy/TenancySection";
import VettedSection from "@/components/vetted/VettedSection";
import ProcessSection from "@/components/process/ProcessSection";
import ProcessSectionAlt from "@/components/process/ProcessSectionAlt";
import ProcessSectionCircle from "@/components/process/ProcessSectionCircle";
import AreasSection from "@/components/areas/AreasSection";
import FaqSection from "@/components/faq/FaqSection";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <HeroCoreclean />
      <AboutUs />
      <ServicesSection />
      <ServicesShowcase />
      <ServicesTabs />
      <ServicesTabsIcons />
      <CtaSection />
      <CtaSectionAlt />
      <CtaSectionThree />
      <WhyChooseUs />
      <WhyChooseUsAlt />
      <WhatMakesDifferent />
      <ProfessionalClean />
      <CtaSectionFour />
      <PricingSection />
      <TenancySection />
      <VettedSection />
      <ProcessSection />
      <ProcessSectionAlt />
      <ProcessSectionCircle />
      <AreasSection />
      <FaqSection />
    </main>
  );
}
