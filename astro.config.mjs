// @ts-check
import { defineConfig } from "astro/config";

// https://astro-shield.kindspells.dev/guides/subresource-integrity/static-sites
import { shield } from "@kindspells/astro-shield";

export default defineConfig({
  output: "static",
  site: "https://c0reme.github.io",
  base: "/scalar-astro",
  integrations: [shield({ sri: true })],
  redirects: {
    "/": "/scalar-astro/api/docs",
  },
});
