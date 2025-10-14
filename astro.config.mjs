// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://c0reme.github.io",
  base: "/scalar-astro",
  experimental: {
    csp: {
      styleDirective: {
        hashes: ["sha256-7efUq5R3+Li6oE/jTAFS39w/CDIi5kQY2yW0wDTNc+8="],
      },
      scriptDirective: {
        hashes: ["sha256-7efUq5R3+Li6oE/jTAFS39w/CDIi5kQY2yW0wDTNc+8="],
      },
    },
  },
  redirects: {
    "/": "/scalar-astro/api/docs",
  },
});
