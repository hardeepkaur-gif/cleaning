import { SITE_EMAIL } from "@/lib/site";

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
  { label: "Contact Us", href: "/contact-us" },
];

/** Same service list as header Services dropdown */
export const navServiceLinks =
  navItems.find((item) => item.label === "Services")?.children ?? [];

export const contactInfo = {
  email: SITE_EMAIL,
  phone: "+44 12 3456 7890",
  phoneHref: "tel:+441234567890",
  address: "68 Granleigh Road, London E11 4RQ",
};

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Twitter", href: "#", icon: "twitter" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerLegalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Support", href: "/contact-us" },
];
