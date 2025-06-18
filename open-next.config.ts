// @ts-nocheck
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import { staticAssetsIncrementalCache } from "@opennextjs/cloudflare/incremental-cache";

export default defineCloudflareConfig({
  packager: "bun",
  buildCommand: "bun run build",
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true
}); 