import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const publicRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/domestic-cleaning-services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/carpet-cleaning-london", changeFrequency: "monthly", priority: 0.9 },
  { path: "/gutter-cleaning-london", changeFrequency: "monthly", priority: 0.9 },
  { path: "/end-of-tenancy-cleaning", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
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
