/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // WRI Brand Colors
        wri: {
          // Primary brand colors
          yellow: '#F0AB00',
          gray: '#9B9B9B',
          
          // Secondary palette
          blue: '#0099CC',
          red: '#C51F24',
          lime: '#97BD3D',
          purple: '#7D0063',
          green: '#007A4D',
          navy: '#003F6A',
          orange: '#E98300',
          berry: '#ED1A37',
          bright: '#FCD900',
          
          // Gold palette (canonical)
          gold: {
            50: '#FFFBF0',
            100: '#FFF4D6',
            200: '#FFE6A3',
            300: '#FFD670',
            400: '#FFC13D',
            500: '#F0AB00', // Default gold
            600: '#D99900',
            700: '#B88000',
            800: '#996700',
            900: '#664400',
            950: '#332200',
          },
          
          // Slate system
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
            950: '#020617',
          },
          
          // Semantic link colors
          link: {
            light: '#007A4D',
            'light-hover': '#005A39',
            dark: '#4ADE80',
            'dark-hover': '#22C55E',
          }
        }
      },
      fontFamily: {
        sans: [
          'Noto Sans',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'Arial',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ],
      },
      fontWeight: {
        light: '300',
        medium: '500',
        bold: '700',
      },
      lineHeight: {
        body: '1.6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
