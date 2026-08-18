import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "./site";

export type SchemaFaq = {
  q: string;
  a: string;
};

export type SchemaCrumb = {
  name: string;
  path: string;
};

export function pageUrl(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function schemaGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function breadcrumbNode(path: string, crumbs: SchemaCrumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl(path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: pageUrl(crumb.path),
    })),
  };
}

export function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@type": type,
    "@id": `${pageUrl(path)}#webpage`,
    url: pageUrl(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en-GB",
    breadcrumb: { "@id": `${pageUrl(path)}#breadcrumb` },
  };
}

export function faqPageNode(path: string, faqs: SchemaFaq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function aggregateOfferNode(
  path: string,
  lowPrice: number,
  highPrice: number,
) {
  return {
    "@type": "AggregateOffer",
    "@id": `${pageUrl(path)}#offers`,
    url: pageUrl(path),
    priceCurrency: "GBP",
    lowPrice: String(lowPrice),
    highPrice: String(highPrice),
    availability: "https://schema.org/InStock",
  };
}

export function serviceNode({
  path,
  name,
  description,
  offers,
}: {
  path: string;
  name: string;
  description: string;
  offers?: Record<string, unknown>;
}) {
  return {
    "@type": "Service",
    "@id": `${pageUrl(path)}#service`,
    name,
    description,
    url: pageUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "AdministrativeArea", name: "Greater London" },
    ],
    serviceType: name,
    ...(offers ? { offers } : {}),
  };
}

export function itemListNode(
  path: string,
  name: string,
  items: { name: string; path: string }[],
) {
  return {
    "@type": "ItemList",
    "@id": `${pageUrl(path)}#itemlist`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: pageUrl(item.path),
    })),
  };
}
