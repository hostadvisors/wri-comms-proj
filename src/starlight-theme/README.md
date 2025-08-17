Starlight theme scaffold

Files added:

- `styles.css` — CSS variables and base styles for light/dark themes.
- `theme-toggle.js` — small module to init and toggle theme, uses localStorage.
- `ThemeLayout.astro` — example layout that imports the stylesheet and provides a theme toggle button.

How to use

1. Import `ThemeLayout.astro` in your Starlight pages or set it as the site layout for content. For example, in a page or wrapper:

   ---
   import ThemeLayout from '../../layouts/ThemeLayout.astro';
   ---

   <ThemeLayout>
     <YourContent />
   </ThemeLayout>

2. Tweak CSS variables in `styles.css` for brand colors, typography and spacing.
3. Replace the button in `ThemeLayout.astro` with a component that integrates with the Starlight header if you prefer.

Notes

- The example `ThemeLayout.astro` is intentionally minimal. If you use frameworks (React/Solid/Vue) inside Astro, adapt event handlers accordingly (e.g. use `onclick` instead of `on:click` in plain SSR HTML).
- The `theme-toggle.js` module uses localStorage and the `prefers-color-scheme` media query to pick an initial theme.
