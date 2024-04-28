import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tegandbiscuits.github.io',
  base: 'nyc-mutual-aid',
  integrations: [tailwind()]
});
