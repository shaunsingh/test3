// @ts-nocheck
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "standalone",
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);

// Initialize OpenNext Cloudflare dev integration for bindings
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}
