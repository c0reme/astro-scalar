// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro-shield.kindspells.dev/guides/subresource-integrity/static-sites
import { shield } from "@kindspells/astro-shield";

export default defineConfig({
  output: "static",
  integrations: [shield({ sri: true })],
  redirects: { "/": "/api/docs" },
  adapter: netlify(),
});
