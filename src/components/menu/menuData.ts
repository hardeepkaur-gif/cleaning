export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Domestic Cleaning Services",
        href: "/domestic-cleaning-services",
      },
      {
        label: "End of Tenancy Cleaning",
        href: "/end-of-tenancy-cleaning",
      },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export const contactInfo = {
  email: "info@cleaninglondon.co.uk",
  phone: "+44 12 3456 7890",
  phoneHref: "tel:+441234567890",
  address: "London, UK",
};

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Twitter", href: "#", icon: "twitter" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];

export const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Domestic Cleaning Services", href: "/domestic-cleaning-services" },
  { label: "End of Tenancy Cleaning", href: "/end-of-tenancy-cleaning" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerLegalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Support", href: "/contact-us" },
];
