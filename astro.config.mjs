// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://c0reme.github.io",
  base: "/scalar-astro",
  redirects: {
    "/": "/api/docs",
  },
});
