import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog3.loli.wang',
  outDir: "./docs",
  integrations: [tailwind()]
});