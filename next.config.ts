import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  /* Cloudflare Workers Builds runs the OpenNext adapter; static export is preview-only. */
};

export default nextConfig;

initOpenNextCloudflareForDev();
