// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  redirects: {
    "[...all]": "/api/docs",
  },
});
