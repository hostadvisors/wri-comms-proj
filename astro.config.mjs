// astro.config.ts
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  // Only use Netlify adapter in production
  adapter: process.env.NODE_ENV === 'production' ? netlify() : undefined,

  integrations: [
    starlight({
      title: '',
      description:
        'Documentation themed for the World Resources Institute using Astro Starlight.',
      // Disable prerendering for all Starlight pages
      prerender: false,
	  logo: {
		light: './src/wri-theme/assets/logo-light.svg',
		dark: './src/wri-theme/assets/logo-dark.svg',
	  },
      // Bring in Fontsource fonts + our local theme css
      customCss: [
        '@fontsource/noto-sans/300.css',
        '@fontsource/noto-sans/500.css',
        '@fontsource/noto-sans/700.css',
        './src/wri-theme/wri-theme.css',
      ],

      components: {
        Header: './src/wri-theme/overrides/Header.astro',
      },

      sidebar: [
        {
          label: 'Who We Are',
          items: [
            { label: 'Network', slug: 'who-we-are/roles' },
            { label: 'Roles and responsibilities', slug: 'who-we-are/structure' },
            { label: 'Local teams', slug: 'who-we-are/network' },
          ],
        },
        {
          label: 'What We Do',
          items: [
            { label: 'Overview', slug: 'what-we-do/overview' },
            { label: 'Tools & Guidelines', slug: 'what-we-do/tools' },
            { label: 'Crisis Communications', slug: 'what-we-do/crisis' },
            { label: 'Toolkits & Resources', slug: 'what-we-do/toolkits' },
          ],
        },
        {
          label: 'Developing Communications Strategy',
          items: [
            { label: 'Strategy Framework', slug: 'strategy/framework' },
            { label: 'Change Management', slug: 'strategy/change' },
            { label: 'Cascading Communications', slug: 'strategy/cascading' },
          ],
        },
        {
          label: 'Voice & Tone Guidelines',
          items: [
            { label: 'Guidelines', slug: 'voice-tone/guidelines' },
          ],
        },
        {
          label: 'Templates',
          items: [
            { label: 'Templates & Resources', slug: 'templates/resources' },
          ],
        },
        {
          label: 'Measurement',
          items: [
            { label: 'Evaluation', slug: 'measurement/evaluation' },
          ],
        },
        {
          label: 'Related Resources',
          items: [
            { label: 'Comms Resources', slug: 'related-resources/comms' },
            { label: 'WRI-Wide Resources', slug: 'related-resources/wri-wide' },
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