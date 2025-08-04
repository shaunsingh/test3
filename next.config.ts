import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Enable visual bundle report via `ANALYZE=true next build`
const withAnalyze = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },

  experimental: {
    optimizePackageImports: ["@carbon/icons-react"],
    inlineCss: true,
    reactCompiler: true
  },
};

// Cloudflare dev helper
initOpenNextCloudflareForDev();
export default withAnalyze(nextConfig);
