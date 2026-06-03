import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guides/how-to-set-up-creator-room`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/best/${a.slug}`,
    lastModified: new Date(a.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...articlePages];
}
