import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Enable visual bundle report via `ANALYZE=true next build`
const withAnalyze = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@carbon/icons-react"],
    inlineCss: true,
    reactCompiler: true
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  }
};

// Cloudflare dev helper
initOpenNextCloudflareForDev();
export default withAnalyze(nextConfig);
