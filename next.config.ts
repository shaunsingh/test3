import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Enable visual bundle report via `ANALYZE=true next build`
const withAnalyze = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  modularizeImports: {
    "@carbon/icons-react": {
      transform: "@carbon/icons-react/lib/{{member}}",
    },
  },

  experimental: {
    optimizePackageImports: ["@carbon/icons-react"],
  },
};

// Cloudflare dev helper
initOpenNextCloudflareForDev();
export default withAnalyze(nextConfig);
