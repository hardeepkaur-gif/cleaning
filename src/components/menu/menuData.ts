export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "House Cleaning", href: "#services" },
      { label: "Office Cleaning", href: "#services" },
      { label: "Deep Cleaning", href: "#services" },
      { label: "Window Cleaning", href: "#services" },
    ],
  },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const contactInfo = {
  email: "info@cleanpro.com",
  phone: "+1 555-9990-153",
  phoneHref: "tel:+15559990153",
  address: "88 Brooklyn Street, New York",
};

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Twitter", href: "#", icon: "twitter" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];
