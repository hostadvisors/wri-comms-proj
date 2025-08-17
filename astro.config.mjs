// astro.config.ts
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://wri.brandkit.host',

  integrations: [
    starlight({
      title: '',
      description:
        'Documentation themed for the World Resources Institute using Astro Starlight.',
	  logo: {
		light: './src/wri-theme/assets/logo-light.svg',
		dark: './src/wri-theme/assets/logo-dark.svg',
	  },
      // Bring in Fontsource fonts + our local theme css
      customCss: [
        '@fontsource/noto-sans/300.css',
        '@fontsource/noto-sans/500.css',
        '@fontsource/noto-sans/700.css',
        './src/wri-theme/wri.css',
      ],

      components: {
      },

      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Internal Communications',
          autogenerate: { directory: 'internal-comms' },
        },
        {
          label: 'Testing',
          items: [
            { label: 'Accessibility Test', slug: 'accessibility-test' },
            { label: 'Starlight Components', slug: 'starlight-component-test' },
          ],
        },
      ],
    }),
  ],

  vite: {
    resolve: {
      alias: {
        '@theme': '/src/wri-theme',
        '@assets': '/src/assets',
        '@content': '/src/content',
      },
    },
  },
});