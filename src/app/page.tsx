import HeroCoreclean from "@/components/hero/HeroCoreclean";
import TrustBar from "@/components/trust/TrustBar";
import AboutUs from "@/components/about/AboutUs";
import ServicesTabsIcons from "@/components/services/ServicesTabsIcons";
import WhyChooseUs from "@/components/why/WhyChooseUs";
import WhyChooseUsAlt from "@/components/why/WhyChooseUsAlt";
import CtaSection from "@/components/cta/CtaSection";
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
import ProcessSectionFour from "@/components/process/ProcessSectionFour";
import AreasSection from "@/components/areas/AreasSection";
import FaqSection from "@/components/faq/FaqSection";

export default function HomePage() {
  return (
    <main>
      <HeroCoreclean />
      <TrustBar />
      <AboutUs />
      <ServicesTabsIcons />
      <CtaSection />
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
      <ProcessSectionFour />
      <AreasSection />
      <FaqSection />
    </main>
  );
}
