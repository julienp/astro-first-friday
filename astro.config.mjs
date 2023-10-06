import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  output: "hybrid",
  adapter: netlify({
    edgeMiddleware: true,
    builders: false,
  }),
  redirects: {
    "/test": {
      status: 302,
      destination: "/json",
    },
  },
});
