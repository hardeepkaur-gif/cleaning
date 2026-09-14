import {
  LOGO_ID,
  LOGO_URL,
  ORGANIZATION_ID,
  SITE_EMAIL,
  SITE_PHONE_INTL,
  SITE_URL,
  WEBSITE_ID,
  socialProfileUrls,
} from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "CleaningService", "LocalBusiness"],
      "@id": ORGANIZATION_ID,
      name: "CL Cleaning Services London",
      alternateName: "CL Cleaning London",
      legalName: "CL Cleaning Services London",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": LOGO_ID,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        width: 512,
        height: 512,
        caption: "CL Cleaning Services London",
      },
      image: { "@id": LOGO_ID },
      description:
        "CL Cleaning Services London is a professional cleaning company based in Leytonstone, East London, offering gutter cleaning, carpet cleaning, end of tenancy cleaning and domestic cleaning services across London.",
      telephone: SITE_PHONE_INTL,
      email: SITE_EMAIL,
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "68 Granleigh Road",
        addressLocality: "London",
        addressRegion: "Greater London",
        postalCode: "E11 4RQ",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5651,
        longitude: 0.0093,
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=68+Granleigh+Road+London+E11+4RQ",
      areaServed: [
        { "@type": "City", name: "London" },
        { "@type": "AdministrativeArea", name: "Greater London" },
        { "@type": "AdministrativeArea", name: "East London" },
        { "@type": "AdministrativeArea", name: "North London" },
        { "@type": "AdministrativeArea", name: "South London" },
        { "@type": "AdministrativeArea", name: "West London" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "10:00",
          closes: "16:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE_PHONE_INTL,
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [...socialProfileUrls],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services in London",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gutter Cleaning London",
              url: `${SITE_URL}/gutter-cleaning-london`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Carpet Cleaning Services London",
              url: `${SITE_URL}/carpet-cleaning-london`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "End of Tenancy Cleaning London",
              url: `${SITE_URL}/end-of-tenancy-cleaning`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Domestic Cleaning Services London",
              url: `${SITE_URL}/domestic-cleaning-services`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "CL Cleaning Services London",
      description: "Professional cleaning services across London",
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Cleaning Services London | CL Cleaning Services London",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      inLanguage: "en-GB",
    },
  ],
};
