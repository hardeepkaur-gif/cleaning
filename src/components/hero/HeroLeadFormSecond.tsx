import { preload } from "react-dom";
import HeroLeadForm from "./HeroLeadForm";

const heroImage = "/images/hero/hero-lead-bg.webp";

export default function HeroLeadFormSecond() {
  preload(heroImage, { as: "image", fetchPriority: "high" });

  return (
    <HeroLeadForm
      id="hero-quote"
      titleId="hero-lead-second-title"
      transparentForm
      formBgImage="/images/hero/hero-supplies.webp"
      formPrefix="lead-second"
    />
  );
}
