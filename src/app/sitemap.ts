import { MetadataRoute } from "next";
import { STATIC_TRAILERS, CATEGORIES } from "@/data/trailers";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://trailervault.vercel.app";
  const now = new Date();

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.filter(
    (c) => c.slug !== "all"
  ).map((c) => ({
    url: `${base}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "hourly",
    priority: 0.9,
  }));

  const trailerPages: MetadataRoute.Sitemap = STATIC_TRAILERS.map((t) => ({
    url: `${base}/trailers/${t.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: `${base}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    ...categoryPages,
    ...trailerPages,
  ];
}
