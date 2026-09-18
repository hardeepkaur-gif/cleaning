import HeroLeadForm from "./HeroLeadForm";

const heroImage = "/images/hero/hero-lead-bg.webp";

export default function HeroLeadFormSecond() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={heroImage}
        fetchPriority="high"
      />
      <HeroLeadForm
        id="hero-quote"
        titleId="hero-lead-second-title"
        title="Professional Cleaning Services in London"
        transparentForm
        formBgImage="/images/hero/hero-supplies.webp"
        formPrefix="lead-second"
        bgImage={heroImage}
      />
    </>
  );
}
