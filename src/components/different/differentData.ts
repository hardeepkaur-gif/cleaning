const imgBase = "/images/services/cleanon";

export const differentTagline = "Why Us";

export const differentTitle = "What Makes Cleaning Services London Different?";

export const differentIntro =
  "Many cleaning companies promise reliability, but few explain the systems they use to maintain it. Clear procedures and accountability for our cleaning staff are our priority at Cleaning Services London. Quality control is also used to provide a consistent customer experience.";

export type DifferentItem = {
  title: string;
  text: string;
  image: string;
};

export const differentList: DifferentItem[] = [
  {
    title: "DBS Checked Cleaners",
    text: "Each cleaner completes identity verification, right to work checks and DBS screening prior to going on to a rented property, commercial or office premises or home.",
    image: `${imgBase}/services-2-1.jpg`,
  },
  {
    title: "Fully Insured Cleaning Company in London",
    text: "Cleaning Services London is completely insured, offering a further level of reassurance for homeowners, tenants, landlords and businesses before any cleaning work starts.",
    image: `${imgBase}/services-2-2.jpg`,
  },
  {
    title: "Same Cleaner for Regular Visits",
    text: "For recurring bookings, we will try to book the same cleaner as they are of the same service, they will appear more familiar, consistent, and easier to manage.",
    image: `${imgBase}/services-2-3.jpg`,
  },
  {
    title: "100+ Cleaning Jobs Completed",
    text: "Each of our team members has completed more than 100 cleaning jobs across homes, rental properties, offices, and commercial premises in London.",
    image: `${imgBase}/services-2-4.jpg`,
  },
  {
    title: "Signed Cleaning SOPs",
    text: "All cleaners are carrying out signed cleaning procedures, giving a clear benchmark for the quality of the cleaning work rather than relying on assumptions.",
    image: `${imgBase}/services-2-1.jpg`,
  },
  {
    title: "Before and After Photo Standards",
    text: "Completion photos provide clients with visible proof while minimizing the back and forth after the work is finished and providing the client with details of what has been cleaned.",
    image: `${imgBase}/services-2-2.jpg`,
  },
  {
    title: "Fixed Pricing Structure",
    text: "We never leave you with unclear hourly estimates or hidden charges, our prices are agreed in advance before starting work.",
    image: `${imgBase}/services-2-3.jpg`,
  },
  {
    title: "Flexible Cleaning Support",
    text: "From one off clean, to regular domestic clean, carpet clean, end of tenancy clean or gutter clean our service is personalised around your property and schedule.",
    image: `${imgBase}/services-2-4.jpg`,
  },
  {
    title: "Satisfaction Guarantee",
    text: "If something is of concern after cleaning, we discuss the concern and strive towards a fair resolution.",
    image: `${imgBase}/services-2-1.jpg`,
  },
];
