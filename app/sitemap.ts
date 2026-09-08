import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://prozapev.com",updated=new Date("2026-09-08");return [
 {url:base,lastModified:updated,changeFrequency:"weekly" as const,priority:1},
 {url:`${base}/mobile-ev-charging-orlando`,lastModified:updated,changeFrequency:"monthly" as const,priority:.9},
 {url:`${base}/pricing`,lastModified:updated,changeFrequency:"monthly" as const,priority:.9},
 {url:`${base}/faq`,lastModified:updated,changeFrequency:"monthly" as const,priority:.8},
 {url:`${base}/instagram`,lastModified:updated,changeFrequency:"weekly" as const,priority:.6}
]}
