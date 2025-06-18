// @ts-nocheck
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  packager: "bun",
  buildCommand: "bun run build",
}); 