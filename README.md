# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# WRI Internal Communications Playbook

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A comprehensive internal communications playbook for the World Resources Institute (WRI), built with Astro Starlight and featuring custom WRI branding.

## 🎯 Project Overview

This documentation site serves as the central resource for WRI's internal communications team, providing guidelines, templates, and best practices for employee engagement and organizational communication.

### Key Features:
- **🎨 Custom WRI Branding**: Complete theme implementation with official WRI colors and typography
- **🔐 Password Protection**: Secure access for internal team members
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode Support**: Full light/dark theme compatibility
- **♿ WCAG Compliant**: Meets accessibility standards with proper contrast ratios
- **⚡ Fast Performance**: Built on Astro for optimal loading speeds

## 🏗️ Architecture

### Framework Stack:
- **[Astro v5.13.1](https://astro.build)**: Modern static site generator with server-side rendering
- **[Starlight v0.35.2](https://starlight.astro.build)**: Documentation framework with navigation and search
- **[Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans)**: Official WRI typography
- **Custom CSS Architecture**: Modular theme system for maintainability

### Project Structure:
```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── houston.webp
│   ├── content/
│   │   └── docs/                    # Documentation content
│   │       ├── index.mdx           # Homepage
│   │       ├── foundation/         # Who we are, mission, values
│   │       ├── strategy/           # Planning and frameworks  
│   │       ├── voice-tone/         # Brand voice guidelines
│   │       ├── employee-journey/   # Employee lifecycle comms
│   │       ├── channels/           # Communication channels
│   │       ├── templates/          # Reusable templates
│   │       └── measurement/        # Analytics and feedback
│   ├── pages/
│   │   ├── login.astro            # Authentication page
│   │   └── logout.astro           # Logout handler
│   ├── wri-theme/                 # Custom WRI theme
│   │   ├── wri-theme.css          # Main CSS entry point
│   │   ├── theme.css              # Color tokens and variables
│   │   ├── components.css         # UI component styles
│   │   ├── overrides.css          # Starlight customizations
│   │   ├── assets/                # WRI logos and graphics
│   │   └── overrides/
│   │       └── Header.astro       # Custom header with logout
│   ├── middleware.ts              # Authentication middleware
│   └── content.config.ts          # Content validation
├── astro.config.mjs               # Astro configuration
├── netlify.toml                   # Netlify deployment config
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

### Environment Setup:
Create a `.env` file with your authentication password:
```bash
WRI_AUTH_PASSWORD=your-secure-password
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

## 🔐 Authentication System

The site features middleware-based password protection to ensure secure access for internal team members:

- **Login Page**: Simple password authentication at `/login`
- **Session Management**: Cookie-based sessions for seamless navigation
- **Auto-redirect**: Unauthorized users redirected to login
- **Logout Functionality**: Accessible via header button (authenticated users only)

## 🚀 Deployment

### Netlify Configuration:
The site is configured for deployment on Netlify at `wri.brandkit.host`:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables:
Set the following in your Netlify dashboard:
- `WRI_AUTH_PASSWORD`: Password for site access

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

**Built with ❤️ for the WRI Communications Team**

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
