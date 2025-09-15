# WRI Internal Communications Playbook

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A comprehensive internal communications playbook for the World Resources Institute (WRI), built with Astro Starlight and featuring custom WRI branding.

## 🎯 Project Overview

This documentation site serves as the central resource for WRI's internal communications team, providing guidelines, templates, and best practices for employee engagement and organizational communication.

## 🏗️ Architecture

### Framework Stack:
- **[Astro v5.13.1](https://astro.build)**: Modern static site generator with server-side rendering
- **[Starlight v0.35.2](https://starlight.astro.build)**: Documentation framework with navigation and search
- **[Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans)**: Official WRI typography
- **Custom CSS Architecture**: Modular theme system for maintainability

### Project structure

```
.
├── public/                      # static assets copied to site root
│   └── favicon.svg
├── src/
│   ├── assets/                  # images and media used in content
│   ├── content/                 # site content (markdown / mdx)
│   │   └── docs/
│   │       └── ...
│   ├── content.config.ts        # Astro content collections
│   └── wri-theme/               # styling and theme CSS
│       ├── wri-theme.css
│       ├── theme.css
│       ├── components.css
│       └── overrides.css
├── astro.config.mjs             # Astro configuration (base, site, integrations)
├── package.json
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites:
- Node.js 18+ 
- npm or yarn package manager

### Installation:
```bash
# Clone the repository
git clone [repository-url]
cd wri-comms-proj

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 WRI Theme System

### Design Tokens:
- **Primary Gold**: `#F0AB00` (Official WRI brand color)
- **Primary Green**: `#007A4D` (Used for links and CTAs)
- **Typography**: Noto Sans (300, 500, 700 weights)
- **Accessibility**: WCAG 2.1 AA compliant contrast ratios

### CSS Architecture:
The theme is organized into modular layers for maintainability:

1. **`theme.css`**: Color variables and design tokens
2. **`components.css`**: UI component styling and layouts  
3. **`overrides.css`**: Starlight framework customizations

For detailed theme documentation, see [`src/wri-theme/README.md`](src/wri-theme/README.md).


## 🚀 Deployment

### GitHub Pages

This project is set up to deploy to GitHub Pages using the official GitHub Actions Pages flow. The workflow at `.github/workflows/pages.yml` builds the site and deploys the `dist/` output using GitHub's Pages actions.

Steps to deploy:

1. Ensure the repository is hosted on GitHub and that pushes to `main` trigger Actions (the workflow runs on `main`).
2. The workflow `.github/workflows/pages.yml` runs `npm ci` and `npm run build`, uploads the `dist/` artifact, and deploys it with the official Pages actions.
3. Verify `base` in `astro.config.mjs` is correct:
   - For a site served at the root (for example a custom domain), use `base: '/'`.
   - For a GitHub project page (https://<username>.github.io/<repo>/) set `base: '/<repo>/'`.
4. For the custom domain `https://wri.brandkit.host`, a `public/CNAME` file is included; GitHub Pages will pick this up when the site is deployed.

Manual build (optional):

```bash
# build locally
npm ci
npm run build

# To publish the built files manually to a gh-pages branch (alternative):
# create a commit of the dist/ contents and push to the gh-pages branch
git worktree add /tmp/dist dist
cd /tmp/dist
git add --all
git commit -m "Publish site"
git push origin HEAD:gh-pages --force
```

Notes:
- GitHub Pages does not support Netlify-style custom response headers; use a CDN (Cloudflare) or proxy if you need to add headers.
- The workflow uses Node 18 to match the project's runtime.

Custom domain notes (for `https://wri.brandkit.host`):

- I added `public/CNAME` with `wri.brandkit.host`. When the `gh-pages` branch is published, GitHub Pages will use this CNAME and provision HTTPS automatically (may take a few minutes).
- Ensure your DNS for `wri.brandkit.host` points to GitHub Pages. For subdomains use a `CNAME` record to `username.github.io` or the repo's Pages target; for apex domains, follow GitHub's IP-based `A` records instructions.


## 📚 Content Management

### Adding New Documentation:
1. Create `.md` or `.mdx` files in `src/content/docs/`
2. Follow the existing folder structure by topic area
3. Update `astro.config.mjs` sidebar configuration if needed
4. Use WRI voice and tone guidelines for consistency

### Content Areas:
- **Foundation**: Organizational identity and values
- **Strategy & Planning**: Communication frameworks and planning
- **Voice & Tone**: Brand voice guidelines and messaging
- **Employee Journey**: Lifecycle communication touchpoints
- **Channels**: Platform-specific communication guides
- **Templates**: Reusable communication templates
- **Measurement**: Analytics and feedback collection

## 🤝 Contributing

### Development Workflow:
1. Create feature branch from `main`
2. Make changes following WRI brand guidelines
3. Test across devices and themes (light/dark)
4. Ensure accessibility compliance
5. Submit pull request for review

### Code Standards:
- Follow existing CSS architecture patterns
- Maintain WCAG 2.1 AA accessibility compliance
- Use WRI brand colors and typography consistently
- Test responsive design across breakpoints

## 📞 Support

For technical issues or content questions:
- **Internal Team**: Contact WRI Communications Team
- **Technical Support**: [Repository Issues](repository-issues-url)
- **WRI Brand Guidelines**: [Internal Brand Portal](brand-portal-url)

## 📄 License

This project is proprietary to the World Resources Institute and is intended for internal use only.

---