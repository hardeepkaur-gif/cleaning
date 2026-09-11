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
      "Read Cleaning Services London case studies from East London — including urgent mould removal and deep cleaning in Canning Town.",
    type: "CollectionPage",
  }),
  itemListNode("/case-studies", "Cleaning Case Studies", [
    {
      name: "Mould Removal & Deep Clean In Canning Town, East London (Design A)",
      path: "/case-studies/mould-removal-deep-clean-canning-town",
    },
    {
      name: "Mould Removal & Deep Clean In Canning Town, East London (Design B)",
      path: "/case-studies/mould-removal-deep-clean-canning-town-v2",
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

export const mouldRemovalCaseStudyV2Schema = schemaGraph([
  breadcrumbNode("/case-studies/mould-removal-deep-clean-canning-town-v2", [
    homeCrumb,
    { name: "Case Studies", path: "/case-studies" },
    {
      name: "Mould Removal Canning Town Design B",
      path: "/case-studies/mould-removal-deep-clean-canning-town-v2",
    },
  ]),
  webPageNode({
    path: "/case-studies/mould-removal-deep-clean-canning-town-v2",
    name: "Mould Removal & Deep Clean Case Study (Design B) | Canning Town",
    description:
      "Alternate design: urgent mould removal and deep clean case study in a Canning Town HMO bedroom.",
  }),
]);
