import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [
    tailwind(),
    // 👇 Update these lines
    sanity({
      projectId: "MY-PROJECT-ID",
      dataset: "MY-DATASET-NAME",
      useCdn: false, // for static builds
    }),
  ],
});
