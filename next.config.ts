// @ts-nocheck
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "standalone",
  compress: true,
};

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react",
    development: false,
  },
});

export default withMDX(nextConfig);

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();