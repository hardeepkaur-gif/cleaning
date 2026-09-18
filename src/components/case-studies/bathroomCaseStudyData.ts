import type { CaseStudyDesignAData } from "./caseStudyData";

export const bathroomCaseStudyPath =
  "/case-studies/bathroom-deep-clean-canning-town";

export const bathroomCaseStudyDesignA: CaseStudyDesignAData = {
  path: bathroomCaseStudyPath,
  meta: {
    title:
      "Bathroom Deep Clean Case Study | Mould Inspection, Canning Town",
    description:
      "Case study: mould inspection findings and bathroom deep clean in a Canning Town flat. Bathroom cleaned to standard with photographic proof within about 2 hours.",
  },
  hero: {
    badge: "Case Study – Domestic Cleaning London",
    titleLead: "Mould Inspection &",
    titleAccent: "Bathroom Deep Clean",
    titleTrail: "In Canning Town, East London",
    primaryCta: { label: "Get a Free Quote", href: "/contact-us" },
    phoneImage: "/images/case-studies/bathroom-deep-clean-hero.webp",
    phoneImageAlt:
      "Clean modern bathroom after deep clean case study in Canning Town, East London",
  },
  heroBanner: {
    badge: "100% Satisfaction",
    titleLead: "Mould Inspection &",
    titleAccent: "Bathroom Deep Clean",
    titleTrail: "In Canning Town, East London",
    subtitle: "Always Been So Professional In Handling Our Teams.",
    primaryCta: { label: "Get a Free Quote", href: "/contact-us" },
    backgroundImage: "/images/case-studies/bathroom-deep-clean-hero.webp",
    backgroundImageAlt:
      "Clean modern bathroom after deep clean case study in Canning Town, East London",
  },
  snapshot: {
    title: "Job Snapshot",
    items: [
      {
        label: "Location",
        value: "Canning Town, East London",
        icon: "location",
      },
      {
        label: "Property",
        value: "Flat, 3.0 × 3.5 m",
        icon: "property",
      },
      {
        label: "Services",
        value: "Domestic cleaning",
        icon: "services",
      },
      {
        label: "Team",
        value: "1 team member",
        icon: "team",
      },
      {
        label: "Duration",
        value: "Approximately 2 hours",
        icon: "duration",
      },
    ],
  },
  challenge: {
    title:
      "The Challenge: Mould & Bathroom Cleanliness Flagged During Routine Inspection",
    paragraphs: [
      "A mid-term inspection of a flat in Canning Town revealed mould on the front part of the bedroom walls, as well as dirtiness in the bathroom. The findings were passed to the tenants together with photographs and instructions for the necessary action.",
    ],
    image: {
      src: "/images/case-studies/bathroom-deep-clean-challenge.webp",
      alt: "Professional cleaners deep cleaning a bathroom during mould and cleanliness inspection follow-up",
    },
  },
  approach: {
    title: "How We Tackled It",
    intro:
      "Our maintenance team responded swiftly to the results of the inspection, ensuring that the list of requirements was prepared precisely, and following up until the requirements were met. The bathroom was sorted within the expected timeframe, while the bedroom mould was a separate issue.",
    steps: [
      "Reviewed the results of the inspection and highlighted the affected areas",
      "Informed the tenants to ventilate the property and clean the areas with the Dettol Antibacterial Surface Cleaner",
      "Requested photographic proof of the completed cleaning",
      "Reviewed all the submitted photos against our cleaning standard",
      "Signed off the bathroom part of the inspection",
    ],
    sealValue: "2h",
    sealLabel: "Done",
    sealAlt: "Bathroom deep clean completed within approximately 2 hours",
    image: {
      src: "/images/case-studies/bathroom-deep-clean-approach.webp",
      alt: "Maintenance inspection of bathroom deep clean with before photo and checklist sign-off",
    },
    imageSecondary: {
      src: "/images/case-studies/bathroom-deep-clean-challenge.webp",
      alt: "Professional cleaners deep cleaning a bathroom during inspection follow-up",
    },
  },
  beforeAfter: {
    title: "Before & After",
    subtitle: "Bathroom Before & After Images",
    before: {
      label: "Before",
      src: "/images/case-studies/bathroom-deep-clean-canning-town-before.webp",
      alt: "Dirty bathroom with mould and grime before deep clean in Canning Town",
    },
    after: {
      label: "After",
      src: "/images/case-studies/bathroom-deep-clean-canning-town-after.webp",
      alt: "Clean modern bathroom after deep clean and inspection sign-off in Canning Town",
    },
    details: [
      {
        title: "Vanity & Bathtub",
        caption: "Grime cleared from tub, vanity and wood feature wall",
        beforeSrc:
          "/images/case-studies/detail-bathroom-surfaces-before.webp",
        afterSrc: "/images/case-studies/detail-bathroom-surfaces-after.webp",
        beforeAlt: "Bathroom vanity and bathtub before deep clean in Canning Town",
        afterAlt: "Bathroom vanity and bathtub after deep clean in Canning Town",
      },
      {
        title: "Suite & Freestanding Bath",
        caption: "Toilet, bath and vanity sanitised to inspection standard",
        beforeSrc:
          "/images/case-studies/detail-bathroom-fixtures-before.webp",
        afterSrc: "/images/case-studies/detail-bathroom-fixtures-after.webp",
        beforeAlt: "Bathroom suite before deep clean in Canning Town",
        afterAlt: "Bathroom suite after deep clean in Canning Town",
      },
      {
        title: "Sink & Surfaces",
        caption: "Vessel sink and marble surfaces restored",
        beforeSrc:
          "/images/case-studies/detail-bathroom-signoff-before.webp",
        afterSrc: "/images/case-studies/detail-bathroom-signoff-after.webp",
        beforeAlt: "Bathroom sink area before deep clean in Canning Town",
        afterAlt: "Bathroom sink area after deep clean in Canning Town",
      },
    ],
  },
  result: {
    badge: "Case Study",
    title: "The Result",
    description:
      "Within the expected timeframe, both bathrooms were cleaned to standard as verified by photographic proof, which brought the bathroom aspect of the inspection to a conclusion. The bedroom mould problem was monitored independently from then on.",
    image: {
      src: "/images/case-studies/bathroom-deep-clean-result.webp",
      alt: "Clean modern bathroom after deep clean and inspection sign-off in Canning Town",
    },
    cta: { label: "Get a Free Quote", href: "/contact-us" },
    highlight: {
      value: "2h",
      label: "Completed on schedule",
    },
    satisfaction: {
      value: "100%",
      label: "Bathroom signed off to standard",
    },
    experience: {
      label: "Hours to complete the job",
      value: "2",
    },
    extras: [
      { value: "1", label: "Team member" },
      { value: "Photos", label: "Proof reviewed" },
      { value: "Flat", label: "Canning Town" },
      { value: "Signed off", label: "Bathroom inspection" },
    ],
  },
  quote: {
    title: "What The Client Said",
    text: "The bathroom looked brand new after the deep clean. Inspection-ready and exactly what we needed for the tenant handover.",
    author: "Usama",
    role: "Property Manager, Canning Town",
    image: {
      src: "/images/case-studies/bathroom-deep-clean-quote.webp",
      alt: "Luxury bathroom after deep clean verified for Canning Town inspection",
    },
  },
  cta: {
    title: "Need a Similar Clean?",
    button: "Get a Free Quote",
    href: "/contact-us",
    text: "Speak with our team for a free quotation if you need bathroom deep cleaning, domestic cleaning or inspection support in East London.",
  },
};
