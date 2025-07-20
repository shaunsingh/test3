import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Enable visual bundle report via `ANALYZE=true next build`
const withAnalyze = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // config options here
};

// Cloudflare dev helper
initOpenNextCloudflareForDev();

export default withAnalyze(nextConfig);
