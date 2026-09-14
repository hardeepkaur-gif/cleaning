import HeroLeadForm from "./HeroLeadForm";

const heroImage = "/images/hero/hero-lead-bg.webp";

export default function HeroLeadFormSecond() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={heroImage}
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      <HeroLeadForm
        id="hero-quote"
        titleId="hero-lead-second-title"
        transparentForm
        formBgImage="/images/hero/hero-supplies.webp"
        formPrefix="lead-second"
        bgImage={heroImage}
      />
    </>
  );
}
