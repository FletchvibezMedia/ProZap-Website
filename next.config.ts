import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  /* Cloudflare production is bundled by OpenNext; static export is preview-only. */
};

export default nextConfig;

initOpenNextCloudflareForDev();
