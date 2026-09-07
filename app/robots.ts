import type {MetadataRoute} from "next";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/"},sitemap:"https://prozapev.com/sitemap.xml",host:"https://prozapev.com"}}
