// @ts-nocheck
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  packager: "bun",
  buildCommand: "bun run build",
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true
}); 