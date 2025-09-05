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
          label: 'About Internal Comms',
          items: [
            { label: 'Overview', slug: 'who-we-are/overview' },
            { label: 'Roles and Responsibilities ', slug: 'who-we-are/structure' },
          ],
        },
        {
          label: 'Comms Basics',
          items: [
            { label: 'Channels & Methods', slug: 'basics/channels' },
            { label: 'Tone and Voice Guidelines', slug: 'basics/tone-voice' },
            { label: 'Templates', slug: 'basics/templates' },
          ],
        },
        {
          label: 'Comms Guidance',
          items: [
            { label: 'Creating a Comms Plan', slug: 'strategy/framework' },
            { label: 'Developing Successful Messaging', slug: 'strategy/messaging' },
            { label: 'Cascading Framework', slug: 'strategy/cascading' },
            { label: 'Crisis Communications', slug: 'strategy/crisis' },
          ],
        },
        {
          label: 'Measuring Impact',
          items: [
            { label: 'What to Measure', slug: 'measurement/what-to-measure' },
            { label: 'Monitoring, Evaluation, Learning', slug: 'measurement/mela' },
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