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
            { label: 'Overview', slug: 'who-we-are/roles' },
            { label: 'Structure', slug: 'who-we-are/structure' },
          ],
        },
        {
          label: 'What We Do',
          items: [
            { label: 'Transitions & Changes', slug: 'what-we-do/tools' },
            { label: 'Crisis Communications', slug: 'what-we-do/crisis' },
          ],
        },
        {
          label: 'Voice & Tone Guidelines',
          items: [
            { label: 'Guidelines', slug: 'voice-tone/guidelines' },
          ],
        },
        {
          label: 'Creating Strategy',
          items: [
            { label: 'Creating a plan', slug: 'strategy/framework' },
            { label: 'Audiences', slug: 'strategy/change' },
            { label: 'Messaging', slug: 'strategy/cascading' },
            { label: 'Channel & Tactics', slug: 'strategy/cascading' },
            { label: 'Cascading', slug: 'strategy/cascading' },
          ],
        },
        {
          label: 'Templates',
          items: [
            { label: 'See Annex of Handbook v2', slug: 'templates/resources' },
            { label: 'Templates & Resources', slug: 'templates/resources' },
            { label: 'Crisis Communications', slug: 'what-we-do/crisis' },
          ],
        },
        {
          label: 'Measurement',
          items: [
            { label: 'What to measure', slug: 'measurement/evaluation' },
            { label: 'How to ask questions', slug: 'measurement/evaluation' },
            { label: 'After Action Reviews', slug: 'measurement/evaluation' },
            { label: 'MELA', slug: 'measurement/evaluation' },
          ],
        },
        {
          label: 'Related Resources',
          items: [
            { label: 'Toolkits', slug: 'related-resources/toolkits' },
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