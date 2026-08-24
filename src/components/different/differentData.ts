const differentImgBase = "/images/different";

export const differentTagline = "Why Us";

export const differentTitle = "What Makes Cleaning Services London Different?";

export const differentIntro =
  "Clear procedures and accountability for our cleaning staff are our priority at Cleaning Services London. Quality control is also used to provide a consistent customer experience.";

export type DifferentItem = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export const differentList: DifferentItem[] = [
  {
    title: "DBS Checked Cleaners",
    text: "Each cleaner completes identity verification, right-to-work checks, and DBS screening before going on to a rented property, commercial or office premises, or home.",
    image: `${differentImgBase}/dbs-checked-cleaners.webp`,
    imageAlt:
      "DBS checked professional cleaner approved to work in London customer properties",
  },
  {
    title: "Fully Insured Cleaning Company in London",
    text: "Cleaning Services London is completely insured, offering a further level of reassurance for homeowners, tenants, landlords, and businesses before any cleaning work starts.",
    image: `${differentImgBase}/fully-insured-cleaning-company.webp`,
    imageAlt:
      "Fully insured London cleaning company team working safely inside a customer home",
  },
  {
    title: "Same Cleaner for Regular Visits",
    text: "For recurring bookings, we will try to book the same cleaner, as they are providing the same service; they will appear more familiar, consistent, and easier to manage.",
    image: `${differentImgBase}/same-cleaner-regular-visits.webp`,
    imageAlt:
      "Same trusted cleaner returning for regular domestic cleaning at a London home",
  },
  {
    title: "100+ Cleaning Jobs Completed",
    text: "Each of our team members has completed more than 100 cleaning jobs across homes, rental properties, offices, and commercial premises in London.",
    image: `${differentImgBase}/cleaning-jobs-completed.webp`,
    imageAlt:
      "Experienced cleaning professionals after completing 100 plus jobs across London",
  },
  {
    title: "Signed Cleaning SOPs",
    text: "All cleaners are carrying out signed cleaning procedures, giving a clear benchmark for the quality of the cleaning work rather than relying on assumptions.",
    image: `${differentImgBase}/signed-cleaning-sops.webp`,
    imageAlt:
      "Cleaner following signed standard operating procedures during a professional clean",
  },
  {
    title: "Before and After Photo Standards",
    text: "Completion photos provide clients with visible proof while minimising the back and forth after the work is finished, and providing the client with details of what has been cleaned.",
    image: `${differentImgBase}/before-after-photo-standards.webp`,
    imageAlt:
      "Before and after completion photos showing results of a professional London clean",
  },
  {
    title: "Fixed Pricing Structure",
    text: "We never leave you with unclear hourly estimates or hidden charges; our prices are agreed in advance before starting work.",
    image: `${differentImgBase}/fixed-pricing-structure.webp`,
    imageAlt:
      "Fixed price cleaning agreement confirmed before a London home cleaning booking",
  },
  {
    title: "Flexible Cleaning Support",
    text: "From one-off cleans to regular domestic cleans, carpet clean, end of tenancy clean, or gutter clean, our service is personalised around your property and schedule.",
    image: `${differentImgBase}/flexible-cleaning-support.webp`,
    imageAlt:
      "Flexible cleaning support for homes rentals offices and commercial premises in London",
  },
];
