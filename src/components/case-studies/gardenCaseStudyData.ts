import type { CaseStudyDesignAData } from "./caseStudyData";

export const gardenCaseStudyPath =
  "/case-studies/garden-fence-line-clearance-canning-town";

export const gardenCaseStudyDesignA: CaseStudyDesignAData = {
  path: gardenCaseStudyPath,
  meta: {
    title:
      "Garden and Fence-Line Clearance Case Study | Canning Town, East London",
    description:
      "Case study: same-day garden and fence-line clearance in Canning Town. Overgrown brambles cleared from the fence line, bike shed roof and bin store to restore safe access.",
  },
  hero: {
    badge: "Case Study – Domestic Cleaning London",
    titleLead: "Garden and",
    titleAccent: "Fence-Line Clearance",
    titleTrail: "In Canning Town, East London",
    primaryCta: { label: "Get a Free Quote", href: "/contact-us" },
    phoneImage: "/images/case-studies/garden-fence-clearance-hero.webp",
    phoneImageAlt:
      "Cleared garden and fence line after clearance case study in Canning Town",
  },
  heroBanner: {
    badge: "100% Satisfaction",
    titleLead: "Garden and",
    titleAccent: "Fence-Line Clearance",
    titleTrail: "In Canning Town, East London",
    subtitle: "Always Been So Professional In Handling Our Teams.",
    primaryCta: { label: "Get a Free Quote", href: "/contact-us" },
    backgroundImage: "/images/case-studies/garden-fence-clearance-hero.webp",
    backgroundImageAlt:
      "Cleared garden and fence line after clearance case study in Canning Town",
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
        value: "Ground-floor flat with bike shed & bin store",
        icon: "property",
      },
      {
        label: "Services",
        value: "Domestic cleaning / garden clearance",
        icon: "services",
      },
      {
        label: "Duration",
        value: "Same day (Afternoon of report)",
        icon: "duration",
      },
    ],
  },
  challenge: {
    title:
      "The Challenge: Overgrown Brambles Blocking Bin Store and Bike Shed Access",
    paragraphs: [
      "A complaint was made by the managing agent from the adjoining property as a result of brambles growing from the next-door property, spreading over the fence line and over the roof of the bike shed, preventing access to the bin store. With the overgrowth creating an access and safety issue, the matter needed resolving straight away.",
    ],
    image: {
      src: "/images/case-studies/garden-fence-clearance-challenge.webp",
      alt: "Gardener clearing leaves along a backyard fence line during garden maintenance",
    },
  },
  approach: {
    title: "How We Tackled It",
    intro:
      "We arranged for the appropriate contractor to attend the site on the same day the complaint was made, treating it as an urgent same-day service to ensure safe access. We have also investigated the source of the growth so that the correct person can take responsibility for future maintenance.",
    steps: [
      "Arranged same-day attendance after the complaint",
      "Cleared the overgrowth on the fence line, bike shed roof, and bin storage area using a lawn mower and hand tools",
      'Documented "before" footage and photos of the clearance completed',
      "Discovered the source of the brambles at the neighboring site",
      "Informed the landlady that it is a goodwill clearance, with future maintenance to be discussed with the neighbor",
    ],
    sealValue: "1d",
    sealLabel: "Same day",
    sealAlt: "Garden and fence-line clearance completed the same day",
    image: {
      src: "/images/case-studies/garden-fence-clearance-approach-main.webp",
      alt: "Cleared garden with bike shed and bin store access restored after fence-line clearance",
    },
    imageSecondary: {
      src: "/images/case-studies/garden-fence-clearance-approach-secondary.webp",
      alt: "Overgrown brambles covering bike shed and bin store before garden clearance",
    },
  },
  beforeAfter: {
    title: "Before & After",
    subtitle: "Fence Line and Bike Shed Before & After Images",
    before: {
      label: "Before",
      src: "/images/case-studies/garden-fence-clearance-canning-town-before.webp",
      alt: "Overgrown garden blocking shed and bin access before clearance in Canning Town",
    },
    after: {
      label: "After",
      src: "/images/case-studies/garden-fence-clearance-canning-town-after.webp",
      alt: "Cleared garden with shed and bin access restored in Canning Town",
    },
    details: [
      {
        title: "Fence Line & Bike Shed",
        caption: "Overgrowth cleared from the fence, shed and bin area",
        beforeSrc: "/images/case-studies/detail-fence-bikeshed-before.webp",
        afterSrc: "/images/case-studies/detail-fence-bikeshed-after.webp",
        beforeAlt:
          "Fence line and shed blocked by overgrowth before clearance",
        afterAlt:
          "Fence line and shed with clear access after garden clearance",
      },
      {
        title: "Garden & Lawn",
        caption: "Lawn and borders restored after full clearance",
        beforeSrc: "/images/case-studies/detail-garden-lawn-before.webp",
        afterSrc: "/images/case-studies/detail-garden-lawn-after.webp",
        beforeAlt: "Neglected overgrown lawn and borders before clearance",
        afterAlt: "Tidy lawn and borders after garden clearance",
      },
      {
        title: "Bin Store Access",
        caption: "Safe access restored to the bin store",
        beforeSrc: "/images/case-studies/detail-binstore-before.webp",
        afterSrc: "/images/case-studies/detail-binstore-after.webp",
        beforeAlt: "Bin store access blocked by overgrowth before clearance",
        afterAlt: "Bin store access restored after garden clearance",
      },
    ],
  },
  result: {
    badge: "Case Study",
    title: "The Result",
    description:
      "The garden and the fence boundary were completely cleared on the very same day, thus ensuring safe passage to the bike shed and bin store. The lady of the house gave her approval for the same and said that she would take responsibility for the maintenance going forward.",
    image: {
      src: "/images/case-studies/garden-fence-clearance-result.webp",
      alt: "Cleared garden with shed, bins and bike access restored after fence-line clearance",
    },
    cta: { label: "Get a Free Quote", href: "/contact-us" },
    highlight: {
      value: "Same day",
      label: "Urgent clearance completed",
    },
    satisfaction: {
      value: "100%",
      label: "Access restored to shed & bins",
    },
    experience: {
      label: "Turnaround after complaint",
      value: "1",
    },
    extras: [
      { value: "Same day", label: "Urgent response" },
      { value: "Cleared", label: "Fence & shed roof" },
      { value: "Access", label: "Bin store usable" },
      { value: "Source", label: "Neighbor growth found" },
    ],
  },
  quote: {
    title: "What The Client Said",
    text: "Based on the before-and-after photos and videos, it is evident that the root originates from your side.",
    author: "Maggie Cai",
    role: "Property Manager",
    image: {
      src: "/images/case-studies/garden-fence-clearance-quote.webp",
      alt: "Cleared garden with shed and bin store after fence-line clearance in Canning Town",
    },
  },
  cta: {
    title: "Need a Similar Clean?",
    button: "Get a Free Quote",
    href: "/contact-us",
    text: "Speak with our team for a free quotation if you need garden clearance, fence-line clear-outs or urgent domestic cleaning support in East London.",
  },
};
