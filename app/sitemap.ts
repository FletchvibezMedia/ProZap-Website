import type {MetadataRoute} from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://prozapev.com";

  return [
    {url: base, lastModified: new Date("2026-10-17"), changeFrequency: "weekly" as const, priority: 1},
    {url: `${base}/mobile-ev-charging-orlando`, lastModified: new Date("2026-10-16"), changeFrequency: "monthly" as const, priority: 0.9},
    {url: `${base}/pricing`, lastModified: new Date("2026-09-15"), changeFrequency: "monthly" as const, priority: 0.9},
    {url: `${base}/faq`, lastModified: new Date("2026-09-15"), changeFrequency: "monthly" as const, priority: 0.8},
    {url: `${base}/instagram`, lastModified: new Date("2026-09-07"), changeFrequency: "weekly" as const, priority: 0.6},
    {url: `${base}/expansion`, lastModified: new Date("2026-10-06"), changeFrequency: "monthly" as const, priority: 0.7},
  ];
}
