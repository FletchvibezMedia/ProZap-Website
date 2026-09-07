import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://prozapev.com";return ["","/pricing","/faq","/instagram"].map((path,priority)=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path==="/instagram"?"weekly":"monthly" as const,priority:priority===0?1:path==="/pricing"?.9:.7}))}
