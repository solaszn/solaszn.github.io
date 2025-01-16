// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';
import { siteConfig } from './site';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  devToolbar: {
    enabled: true
  },

  integrations: [tailwind(), icon(), react()]
});