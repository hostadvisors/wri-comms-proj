// astro.config.ts
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),

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
          label: 'Foundation',
          items: [
            { label: 'Getting Started', slug: 'foundation/overview' },
            { label: 'Who We Are', slug: 'foundation/who-we-are' },
            { label: 'Mission & Values', slug: 'foundation/mission-values' },
          ],
        },
        {
          label: 'Strategy & Planning',
          items: [
            { label: 'Strategy Framework', slug: 'strategy/framework' },
            { label: 'Audience Analysis', slug: 'strategy/audience-analysis' },
            { label: 'Message Development', slug: 'strategy/message-development' },
            { label: 'Channel Planning', slug: 'strategy/channel-planning' },
          ],
        },
        {
          label: 'Brand Voice & Tone',
          items: [
            { label: 'Voice Guidelines', slug: 'voice-tone/guidelines' },
            { label: 'Tone by Audience', slug: 'voice-tone/tone-adaptation' },
            { label: 'Writing Style Guide', slug: 'voice-tone/writing-style' },
            { label: 'Messaging Frameworks', slug: 'voice-tone/messaging-frameworks' },
          ],
        },
        {
          label: 'Employee Journey',
          items: [
            { label: 'Journey Overview', slug: 'employee-journey/overview' },
            { label: 'Pre-Boarding', slug: 'employee-journey/pre-boarding' },
            { label: 'Onboarding', slug: 'employee-journey/onboarding' },
            { label: 'Career Development', slug: 'employee-journey/development' },
            { label: 'Recognition & Milestones', slug: 'employee-journey/recognition' },
            { label: 'Transitions & Changes', slug: 'employee-journey/transitions' },
            { label: 'Offboarding', slug: 'employee-journey/offboarding' },
          ],
        },
        {
          label: 'Content & Channels',
          items: [
            { label: 'Email Communications', slug: 'channels/email' },
            { label: 'Internal Newsletters', slug: 'channels/newsletters' },
            { label: 'Town Halls & Meetings', slug: 'channels/meetings' },
            { label: 'Digital Workplace', slug: 'channels/digital-workplace' },
            { label: 'Crisis Communications', slug: 'channels/crisis' },
          ],
        },
        {
          label: 'Templates & Tools',
          items: [
            { label: 'Email Templates', slug: 'templates/email' },
            { label: 'Announcement Templates', slug: 'templates/announcements' },
            { label: 'Presentation Templates', slug: 'templates/presentations' },
            { label: 'Planning Tools', slug: 'templates/planning-tools' },
          ],
        },
        {
          label: 'Measurement & Analytics',
          items: [
            { label: 'Success Metrics', slug: 'measurement/metrics' },
            { label: 'Feedback Collection', slug: 'measurement/feedback' },
            { label: 'Continuous Improvement', slug: 'measurement/improvement' },
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