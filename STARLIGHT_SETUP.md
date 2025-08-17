Starlight setup notes for this repo

This project already includes Starlight integration via `@astrojs/starlight`.

What I added

- A new docs section at `src/content/docs/internal-comms` with pages:
  - `index.mdx` — overview
  - `who-we-are.mdx` — people & structure
  - `what-we-do.mdx` — activities & tools
  - `developing-comms-strategy.mdx` — strategy notes
  - `templates.mdx` — reusable templates
  - `related-resources.mdx` — links to WRI-wide and comms resources

What to do next

1. Update `astro.config.mjs` sidebar labels, title and social links to match your org (I added an `Internal comms` autogenerate entry).
2. Add or link real documents and attachments (PDFs, images) into the `public/` or `src/content/assets` folder and reference them from the MDX pages.
3. If deploying to Netlify or GitHub Pages, follow the standard Astro deployment guides. For Netlify, add a build command `npm run build` and publish the `dist/` directory; for GitHub Pages, build and push `dist/` to the `gh-pages` branch or use GitHub Actions.
4. Consider adding frontmatter fields like `sidebarOrder` or custom `category` values if you want explicit ordering.

Notes

- I did not change the project dependencies. `@astrojs/starlight` is already in `package.json`.
- After adding real content, run `npm run dev` to preview locally.
