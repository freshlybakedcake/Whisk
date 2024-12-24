// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.SITE_URL,
	integrations: [tailwind()]
});
