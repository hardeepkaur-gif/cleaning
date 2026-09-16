import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_HREF, socialProfiles } from "@/lib/site";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Domestic Cleaning Services",
        href: "/domestic-cleaning-services",
      },
      {
        label: "End of Tenancy Cleaning",
        href: "/end-of-tenancy-cleaning",
      },
      {
        label: "Carpet Cleaning",
        href: "/carpet-cleaning-london",
      },
      {
        label: "Gutter Cleaning",
        href: "/gutter-cleaning-london",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      {
        label: "Mould Removal",
        href: "/case-studies/mould-removal-deep-clean-canning-town",
      },
      {
        label: "Bathroom Deep Clean",
        href: "/case-studies/bathroom-deep-clean-canning-town",
      },
      {
        label: "Garden Fence-Line Clearance",
        href: "/case-studies/garden-fence-line-clearance-canning-town",
      },
      {
        label: "Garden Clean-up & Clothesline",
        href: "/case-studies/garden-cleanup-clothesline-ashford-road",
      },
      {
        label: "Bathroom Mould Treatment",
        href: "/case-studies/bathroom-mould-treatment-blackwall",
      },
      {
        label: "24-Hr Deep Clean to Re-Let",
        href: "/case-studies/24-hr-deep-clean-to-re-let-flat",
      },
      {
        label: "EOT Clean – Barking Road",
        href: "/case-studies/full-flat-end-of-tenancy-clean-barking-road",
      },
      {
        label: "Deposit Recovery – Claremont Close",
        href: "/case-studies/full-deposit-recovery-claremont-close",
      },
    ],
  },
];

/** Same service list as header Services dropdown */
export const navServiceLinks =
  navItems.find((item) => item.label === "Services")?.children ?? [];

export const contactInfo = {
  email: SITE_EMAIL,
  phone: SITE_PHONE,
  phoneHref: SITE_PHONE_HREF,
  address: "68 Granleigh Road, London E11 4RQ",
};

export const socialLinks = socialProfiles;

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerLegalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];
