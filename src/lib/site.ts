export const SITE_URL = "https://clcleaningserviceslondon.co.uk";
export const SITE_EMAIL = "info@clcleaningserviceslondon.co.uk";
export const SITE_PHONE = "02034755539";
export const SITE_PHONE_HREF = "tel:+442034755539";
export const SITE_PHONE_INTL = "+44-20-3475-5539";

/** Flip to true when the site is live and ready for Google indexing. */
export const SITE_INDEXABLE = false;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;
export const LOGO_URL = `${SITE_URL}/images/logo.webp`;

export const socialProfiles = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CLcleaningserviceslondon",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/clcleaningserviceslondon/",
    icon: "instagram",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/CLcleaningserviceslondon/",
    icon: "pinterest",
  },
  {
    label: "X",
    href: "https://x.com/CLcleaningLDN",
    icon: "x",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cl-cleaning-services-london/",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CLCleaningServicesLondon",
    icon: "youtube",
  },
] as const;

export const socialProfileUrls = socialProfiles.map((profile) => profile.href);
