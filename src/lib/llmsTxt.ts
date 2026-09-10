import { SITE_EMAIL, SITE_PHONE_INTL, SITE_URL } from "./site";

export function getLlmsTxt(): string {
  return `# CL Cleaning Services London

> Professional cleaning company in London offering domestic cleaning, carpet cleaning, end of tenancy cleaning, and gutter cleaning. DBS-checked, insured cleaners with fixed pricing across Greater London.

CL Cleaning Services London is based at 68 Granleigh Road, London E11 4RQ. Phone: ${SITE_PHONE_INTL}. Email: ${SITE_EMAIL}. Service area: Greater London including East, North, South and West London.

## Services

- [Domestic Cleaning Services London](${SITE_URL}/domestic-cleaning-services): Weekly, fortnightly and one-off home cleaning with DBS-checked, insured cleaners and fixed pricing.
- [Carpet Cleaning London](${SITE_URL}/carpet-cleaning-london): Steam carpet cleaning, stain removal and professional carpet care from £30 across London.
- [End of Tenancy Cleaning London](${SITE_URL}/end-of-tenancy-cleaning): Move-out cleaning with oven cleaning included and a 14-day re-clean guarantee.
- [Gutter Cleaning London](${SITE_URL}/gutter-cleaning-london): Clear blocked gutters, remove leaves and debris, and check downpipes to prevent damp.

## Pages

- [Home](${SITE_URL}/): Overview of professional cleaning services for homes, landlords and businesses in London.
- [Services](${SITE_URL}/services): Summary of all four core cleaning services offered across London.
- [Contact Us](${SITE_URL}/contact-us): Free, no-obligation quotes by phone, email, WhatsApp or online form.
- [Case Studies](${SITE_URL}/case-studies): Real cleaning jobs across East London, including mould removal and deep cleaning.

## Optional

- [Mould Removal Case Study](${SITE_URL}/case-studies/mould-removal-deep-clean-canning-town): Urgent mould removal and deep clean in a Canning Town HMO bedroom.
- [Privacy Policy](${SITE_URL}/privacy-policy): How personal information is collected, used and protected.
- [Sitemap](${SITE_URL}/sitemap.xml): Machine-readable list of indexable pages on this website.
- [Robots](${SITE_URL}/robots.txt): Crawler rules for search engines and bots.
`;
}
