import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_HREF, socialProfiles } from "@/lib/site";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
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
        label: "All Case Studies",
        href: "/case-studies",
      },
      {
        label: "Mould Removal – Design A",
        href: "/case-studies/mould-removal-deep-clean-canning-town",
      },
      {
        label: "Mould Removal – Design B",
        href: "/case-studies/mould-removal-deep-clean-canning-town-v2",
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
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
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
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerLegalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Support", href: "/contact-us" },
];
