import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

//EDIT site with website
export default defineConfig({
      site: "https://websiteURLexample.it",
      vite: {    plugins: [tailwindcss()],  },
});
