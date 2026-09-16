import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const publicRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/domestic-cleaning-services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/carpet-cleaning-london", changeFrequency: "monthly", priority: 0.9 },
  { path: "/gutter-cleaning-london", changeFrequency: "monthly", priority: 0.9 },
  { path: "/end-of-tenancy-cleaning", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/case-studies/mould-removal-deep-clean-canning-town",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/case-studies/bathroom-deep-clean-canning-town",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/case-studies/garden-fence-line-clearance-canning-town",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/case-studies/garden-cleanup-clothesline-ashford-road",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/case-studies/bathroom-mould-treatment-blackwall",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/case-studies/24-hr-deep-clean-to-re-let-flat",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/case-studies/full-flat-end-of-tenancy-clean-barking-road",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/case-studies/full-deposit-recovery-claremont-close",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
