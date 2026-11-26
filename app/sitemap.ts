import type { MetadataRoute } from "next";
import { serviceAreas } from "../lib/areas";
import { servicePages } from "../lib/services";
import { absoluteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceAreas.map((area) => ({
      url: absoluteUrl(`/areas/${area.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
