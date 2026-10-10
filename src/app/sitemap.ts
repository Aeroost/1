import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map((page) => ({
    url: `${siteUrl}${page.segment ? `/${page.segment}` : ""}`,
    lastModified: now,
    changeFrequency: page.key === "projects" ? ("weekly" as const) : ("monthly" as const),
    priority: page.key === "home" ? 0.9 : 0.7,
  }));
}
