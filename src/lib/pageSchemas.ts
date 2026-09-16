import { carpetFaqs } from "@/components/carpet/carpetFaqData";
import { domesticFaqs } from "@/components/domestic/domesticFaqData";
import { homeFaqs } from "@/components/faq/homeFaqData";
import { gutterFaqs } from "@/components/gutter/gutterFaqData";
import { tenancyFaqs } from "@/components/tenancy/tenancyFaqData";
import {
  aggregateOfferNode,
  breadcrumbNode,
  faqPageNode,
  itemListNode,
  schemaGraph,
  serviceNode,
  webPageNode,
} from "./schema";

const homeCrumb = { name: "Home", path: "/" };
const servicesCrumb = { name: "Services", path: "/services" };

export const homePageSchema = schemaGraph([
  breadcrumbNode("/", [homeCrumb]),
  faqPageNode("/", homeFaqs),
]);

export const servicesPageSchema = schemaGraph([
  breadcrumbNode("/services", [
    homeCrumb,
    servicesCrumb,
  ]),
  webPageNode({
    path: "/services",
    name: "Services | Cleaning Services London",
    description:
      "Services from Cleaning Services London — domestic cleaning, carpet cleaning, end of tenancy cleaning and gutter cleaning across London.",
    type: "CollectionPage",
  }),
  itemListNode("/services", "Cleaning Services in London", [
    {
      name: "Domestic Cleaning Services London",
      path: "/domestic-cleaning-services",
    },
    {
      name: "Carpet Cleaning London",
      path: "/carpet-cleaning-london",
    },
    {
      name: "End of Tenancy Cleaning London",
      path: "/end-of-tenancy-cleaning",
    },
    {
      name: "Gutter Cleaning London",
      path: "/gutter-cleaning-london",
    },
  ]),
]);

export const contactPageSchema = schemaGraph([
  breadcrumbNode("/contact-us", [
    homeCrumb,
    { name: "Contact Us", path: "/contact-us" },
  ]),
  webPageNode({
    path: "/contact-us",
    name: "Contact Us | Cleaning Services London — Free Quote",
    description:
      "Contact Us for a free, no-obligation cleaning quote in London. Call, email, WhatsApp or fill in our quick form — most enquiries answered same day.",
    type: "ContactPage",
  }),
]);

export const aboutPageSchema = schemaGraph([
  breadcrumbNode("/about-us", [
    homeCrumb,
    { name: "About Us", path: "/about-us" },
  ]),
  webPageNode({
    path: "/about-us",
    name: "About Us | Cleaning Services London",
    description:
      "Cleaning Services London is a UK-based professional cleaning company providing dependable domestic, end-of-tenancy, carpet and gutter cleaning across London.",
  }),
]);

export const privacyPageSchema = schemaGraph([
  breadcrumbNode("/privacy-policy", [
    homeCrumb,
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]),
  webPageNode({
    path: "/privacy-policy",
    name: "Privacy Policy | Cleaning Services London",
    description:
      "Read how Cleaning Services London collects, uses and protects your personal information when you enquire about or book cleaning services in London.",
  }),
]);

export const termsPageSchema = schemaGraph([
  breadcrumbNode("/terms-and-conditions", [
    homeCrumb,
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
  ]),
  webPageNode({
    path: "/terms-and-conditions",
    name: "Terms & Conditions | Cleaning Services London",
    description:
      "Terms that apply when you book or purchase cleaning services from CL Cleaning Services London.",
  }),
]);

export const disclaimerPageSchema = schemaGraph([
  breadcrumbNode("/disclaimer", [
    homeCrumb,
    { name: "Disclaimer", path: "/disclaimer" },
  ]),
  webPageNode({
    path: "/disclaimer",
    name: "Disclaimer | Cleaning Services London",
    description:
      "Disclaimer for clcleaningserviceslondon.co.uk and the cleaning services provided by CL Cleaning Services London.",
  }),
]);

export const cookiesPageSchema = schemaGraph([
  breadcrumbNode("/cookies-policy", [
    homeCrumb,
    { name: "Cookies Policy", path: "/cookies-policy" },
  ]),
  webPageNode({
    path: "/cookies-policy",
    name: "Cookies Policy | Cleaning Services London",
    description:
      "How CL Cleaning Services London uses cookies and similar technologies on clcleaningserviceslondon.co.uk.",
  }),
]);

export const domesticPageSchema = schemaGraph([
  breadcrumbNode("/domestic-cleaning-services", [
    homeCrumb,
    servicesCrumb,
    {
      name: "Domestic Cleaning Services",
      path: "/domestic-cleaning-services",
    },
  ]),
  webPageNode({
    path: "/domestic-cleaning-services",
    name: "Domestic Cleaning Services London DBS Checked Local Cleaners",
    description:
      "Book domestic cleaning services London with DBS-checked, insured cleaners. Weekly, fortnightly, and one-off home cleaning with fixed pricing across London.",
  }),
  serviceNode({
    path: "/domestic-cleaning-services",
    name: "Domestic Cleaning Services London",
    description:
      "Weekly, fortnightly and one-off domestic cleaning for homes and flats across London with DBS-checked, insured cleaners and fixed pricing.",
    offers: aggregateOfferNode("/domestic-cleaning-services", 15, 30),
  }),
  faqPageNode("/domestic-cleaning-services", domesticFaqs),
]);

export const carpetPageSchema = schemaGraph([
  breadcrumbNode("/carpet-cleaning-london", [
    homeCrumb,
    servicesCrumb,
    { name: "Carpet Cleaning London", path: "/carpet-cleaning-london" },
  ]),
  webPageNode({
    path: "/carpet-cleaning-london",
    name: "Carpet Cleaning London From £30 | Professional Local Cleaners",
    description:
      "Book carpet cleaning London with DBS-checked, insured cleaners. Steam carpet cleaning, stain removal, fixed pricing and London wide coverage.",
  }),
  serviceNode({
    path: "/carpet-cleaning-london",
    name: "Carpet Cleaning London",
    description:
      "Professional carpet cleaning in London including steam cleaning, stain removal and deep fibre cleaning for homes, offices and rental properties.",
    offers: aggregateOfferNode("/carpet-cleaning-london", 15, 540),
  }),
  faqPageNode("/carpet-cleaning-london", carpetFaqs),
]);

export const tenancyPageSchema = schemaGraph([
  breadcrumbNode("/end-of-tenancy-cleaning", [
    homeCrumb,
    servicesCrumb,
    {
      name: "End of Tenancy Cleaning",
      path: "/end-of-tenancy-cleaning",
    },
  ]),
  webPageNode({
    path: "/end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning London With 14 Day Re-Clean Guarantee",
    description:
      "Book end of tenancy cleaning in London with fixed pricing, DBS-checked cleaners, oven cleaning included and a 14-day re-clean guarantee.",
  }),
  serviceNode({
    path: "/end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning London",
    description:
      "End of tenancy cleaning in London for tenants, landlords and letting agents, including a detailed checklist and 14-day re-clean guarantee.",
  }),
  faqPageNode("/end-of-tenancy-cleaning", tenancyFaqs),
]);

export const gutterPageSchema = schemaGraph([
  breadcrumbNode("/gutter-cleaning-london", [
    homeCrumb,
    servicesCrumb,
    { name: "Gutter Cleaning London", path: "/gutter-cleaning-london" },
  ]),
  webPageNode({
    path: "/gutter-cleaning-london",
    name: "Gutter Cleaning London | Trusted Local Gutter Cleaners",
    description:
      "Book gutter cleaning London with insured local cleaners. Clear blocked gutters, remove leaves and debris, check downpipes and protect your home from dampness.",
  }),
  serviceNode({
    path: "/gutter-cleaning-london",
    name: "Gutter Cleaning London",
    description:
      "Professional gutter cleaning in London for homes and businesses, including debris removal, downpipe clearing and safe high-reach cleaning.",
    offers: aggregateOfferNode("/gutter-cleaning-london", 60, 180),
  }),
  faqPageNode("/gutter-cleaning-london", gutterFaqs),
]);

export const caseStudiesIndexSchema = schemaGraph([
  breadcrumbNode("/case-studies", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
  ]),
  webPageNode({
    path: "/case-studies",
    name: "Case Studies | Cleaning Services London",
    description:
      "Read Cleaning Services London case studies from East London — including urgent mould removal, bathroom deep cleaning, garden clearance and inspection follow-ups in Canning Town.",
    type: "CollectionPage",
  }),
  itemListNode("/case-studies", "Cleaning Case Studies", [
    {
      name: "Mould Removal & Deep Clean In Canning Town, East London",
      path: "/case-studies/mould-removal-deep-clean-canning-town",
    },
    {
      name: "Mould Inspection & Bathroom Deep Clean In Canning Town, East London",
      path: "/case-studies/bathroom-deep-clean-canning-town",
    },
    {
      name: "Garden and Fence-Line Clearance In Canning Town, East London",
      path: "/case-studies/garden-fence-line-clearance-canning-town",
    },
    {
      name: "Garden Clean-up & Clothesline on Ashford Road, London",
      path: "/case-studies/garden-cleanup-clothesline-ashford-road",
    },
    {
      name: "Bathroom Mould Treatment in Blackwall, Canary Wharf, London",
      path: "/case-studies/bathroom-mould-treatment-blackwall",
    },
    {
      name: "24-Hour Deep Clean Turnaround That Got a Canning Town Flat Back on the Market",
      path: "/case-studies/24-hr-deep-clean-to-re-let-flat",
    },
    {
      name: "Full-Flat End-of-Tenancy Clean and Re-Let Programme, Barking Road, Canning Town",
      path: "/case-studies/full-flat-end-of-tenancy-clean-barking-road",
    },
    {
      name: "Full Deposit Recovery on Claremont Close, Canning Town Re-Let Turnaround",
      path: "/case-studies/full-deposit-recovery-claremont-close",
    },
  ]),
]);

export const mouldRemovalCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/mould-removal-deep-clean-canning-town", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "Mould Removal Canning Town",
      path: "/case-studies/mould-removal-deep-clean-canning-town",
    },
  ]),
  webPageNode({
    path: "/case-studies/mould-removal-deep-clean-canning-town",
    name: "Mould Removal & Deep Clean Case Study | Canning Town, East London",
    description:
      "Case study: urgent mould removal and deep clean in a Canning Town HMO bedroom. Contaminated storage unit removed, wall treated and room restored within hours.",
  }),
]);

export const bathroomDeepCleanCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/bathroom-deep-clean-canning-town", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "Bathroom Deep Clean Canning Town",
      path: "/case-studies/bathroom-deep-clean-canning-town",
    },
  ]),
  webPageNode({
    path: "/case-studies/bathroom-deep-clean-canning-town",
    name: "Bathroom Deep Clean Case Study | Mould Inspection, Canning Town",
    description:
      "Case study: mould inspection findings and bathroom deep clean in a Canning Town flat. Bathroom cleaned to standard with photographic proof within about 2 hours.",
  }),
]);

export const gardenFenceClearanceCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/garden-fence-line-clearance-canning-town", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "Garden Fence-Line Clearance Canning Town",
      path: "/case-studies/garden-fence-line-clearance-canning-town",
    },
  ]),
  webPageNode({
    path: "/case-studies/garden-fence-line-clearance-canning-town",
    name: "Garden and Fence-Line Clearance Case Study | Canning Town, East London",
    description:
      "Case study: same-day garden and fence-line clearance in Canning Town. Overgrown brambles cleared from the fence line, bike shed roof and bin store to restore safe access.",
  }),
]);

export const gardenCleanupClotheslineCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/garden-cleanup-clothesline-ashford-road", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "Garden Clean-up Ashford Road",
      path: "/case-studies/garden-cleanup-clothesline-ashford-road",
    },
  ]),
  webPageNode({
    path: "/case-studies/garden-cleanup-clothesline-ashford-road",
    name: "Garden Clean-up & Clothesline Case Study | Ashford Road, London",
    description:
      "Case study: front and back garden clean-up on Ashford Road, London, with rubbish cleared and a new PVC-coated steel clothes-drying line installed before re-letting.",
  }),
]);

export const bathroomMouldTreatmentCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/bathroom-mould-treatment-blackwall", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "Bathroom Mould Treatment Blackwall",
      path: "/case-studies/bathroom-mould-treatment-blackwall",
    },
  ]),
  webPageNode({
    path: "/case-studies/bathroom-mould-treatment-blackwall",
    name: "Bathroom Mould Treatment Case Study | Blackwall, Canary Wharf, London",
    description:
      "Case study: black mould treatment in a Blackwall bathroom near Canary Wharf. Same-day mould cleaning, tenant guidance, and a noted faulty extractor fan for follow-up.",
  }),
]);

export const reletDeepCleanCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/24-hr-deep-clean-to-re-let-flat", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "24-Hour Deep Clean to Re-Let Flat",
      path: "/case-studies/24-hr-deep-clean-to-re-let-flat",
    },
  ]),
  webPageNode({
    path: "/case-studies/24-hr-deep-clean-to-re-let-flat",
    name: "24-Hour Deep Clean to Re-Let Flat | Canning Town Case Study",
    description:
      "Case study: post-works deep clean in a Canning Town multi-occupancy flat. Quote approved 25 August, cleaned 26 August, completion confirmed 29 August — ready to re-let.",
  }),
]);

export const eotBarkingRoadCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/full-flat-end-of-tenancy-clean-barking-road", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "End-of-Tenancy Clean Barking Road",
      path: "/case-studies/full-flat-end-of-tenancy-clean-barking-road",
    },
  ]),
  webPageNode({
    path: "/case-studies/full-flat-end-of-tenancy-clean-barking-road",
    name: "Full-Flat End-of-Tenancy Clean & Re-Let | Barking Road, Canning Town",
    description:
      "Case study: full-flat end-of-tenancy clean and re-let programme on Barking Road, Canning Town. Cleaning, flooring, damp repairs and deposit-claim evidence completed in 3 weeks.",
  }),
]);

export const eotClaremontCaseStudySchema = schemaGraph([
  breadcrumbNode("/case-studies/full-deposit-recovery-claremont-close", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "Full Deposit Recovery Claremont Close",
      path: "/case-studies/full-deposit-recovery-claremont-close",
    },
  ]),
  webPageNode({
    path: "/case-studies/full-deposit-recovery-claremont-close",
    name: "Full Deposit Recovery | Claremont Close, Canning Town Re-Let Turnaround",
    description:
      "Case study: full deposit recovery on Claremont Close, Canning Town. End-of-tenancy clean, clearance and re-let works with £1,160 recovered from outgoing tenants.",
  }),
]);
