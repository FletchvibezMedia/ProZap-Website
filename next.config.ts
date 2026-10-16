import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;

initOpenNextCloudflareForDev();
