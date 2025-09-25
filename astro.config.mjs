// astro.config.ts
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // For a custom domain (root site) set base to '/' so assets resolve at the
  // site root. If you instead host as a GitHub project page (https://<user>.github.io/<repo>/)
  // change base to '/<repo>/' accordingly.
  base: '/',
  // Set the published site URL to your custom domain so generated absolute URLs
  // (sitemaps, RSS, etc.) use the proper hostname.
  site: 'https://wri.brandkit.host',
  integrations: [
    starlight({
      title: '',
      description:
        'Documentation for the World Resources Institute Internal Communications Team.',
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

      sidebar: [
        {
          label: 'About Internal Comms',
          items: [
            { label: 'Overview', slug: 'who-we-are/overview' },
          ],
        },
        {
          label: 'Comms Guidance & Strategy',
          items: [
            { label: 'Creating a Comms Plan', slug: 'strategy/framework' },
            { label: 'Developing Successful Messaging', slug: 'strategy/messaging' },
            { label: 'Tone and Voice Guidelines', slug: 'strategy/tone-voice' },
            { label: 'Cascading Framework', slug: 'strategy/cascading' },
          ],
        },
        {
          label: 'Channels & Methods',
          items: [
            { label: 'Channels', slug: 'channels/channels' },
            { label: 'Banyan', slug: 'channels/banyan' },
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
          label: 'Resources',
          items: [
            { label: 'Templates', slug: 'resources/templates' },
            { label: 'Toolkits', slug: 'resources/toolkits' },
            { label: 'Additional Resources', slug: 'resources/resources' },
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
