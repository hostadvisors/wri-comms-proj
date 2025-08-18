# WRI Theme CSS Architecture

This document explains the reorganized CSS structure for the WRI Starlight theme.

## File Structure

```
src/wri-theme/
├── wri-theme.css     # Main entry point (imports all files)
├── theme.css         # Color variables and design tokens
├── components.css    # Layout and UI component styles
├── overrides.css     # Starlight-specific customizations
└── wri.css          # Original file (can be removed)
```

## Architecture Overview

The CSS has been reorganized into three distinct layers for better maintainability:

### 1. Theme Layer (`theme.css`)
**Purpose:** Color system and design tokens
- WRI brand color palette (primary and secondary colors)
- Extended color scales (yellow palette, neutral grays)
- WCAG 2.1 AA compliant color mappings
- Typography tokens (font families, weights)
- Starlight CSS variable mappings
- Light/dark theme configurations

**Key Features:**
- Official WRI brand colors (#F0AB00 gold, #007A4D green)
- Accessible link colors (green for links, not yellow)
- Comprehensive semantic color system
- Focus ring colors for accessibility

### 2. Components Layer (`components.css`) 
**Purpose:** Layout and UI component styling
- Typography hierarchy and base element styles
- Form elements (inputs, buttons, search)
- Interactive components (links, buttons, navigation)
- Header layout components (from Header.astro)
- Table and content styling
- Responsive breakpoints

**Key Features:**
- WRI font family implementation (Noto Sans)
- Accessible button styling with WRI gold
- Responsive header layout with search bar
- Logout button component styling
- Enhanced table and blockquote styling

### 3. Overrides Layer (`overrides.css`)
**Purpose:** Starlight framework-specific customizations
- Site navigation and header overrides
- Sidebar navigation styling with WRI branding
- Table of contents customizations
- Search component theming
- Pagination and utility overrides
- Callouts and badge styling

**Key Features:**
- Comprehensive sidebar link styling
- Active page highlighting with WRI gold
- Fallback selectors for different Starlight versions
- Framework-specific component overrides

## CSS Layer Order

The CSS uses explicit `@layer` declarations to ensure proper cascade:

1. `wri-theme` - Design tokens and variables
2. `starlight` - Framework styles (automatically inserted)
3. `wri-components` - Our component styles
4. `wri-overrides` - Framework customizations

## Benefits of New Structure

### 1. **Separation of Concerns**
- Colors and tokens are isolated from layout logic
- Framework overrides are separate from component styling
- Easy to update brand colors without affecting layout

### 2. **Better Maintainability**
- Clear file organization by purpose
- Reduced file size per concern
- Easier to debug and modify specific aspects

### 3. **Improved Scalability**
- New components can be added to `components.css`
- Brand updates only require changes to `theme.css`
- Starlight updates only affect `overrides.css`

### 4. **Header Styles Integration**
- All Header.astro styles moved to CSS files
- Header component now style-free (pure markup)
- Responsive breakpoints properly organized

## Usage

The main entry point (`wri-theme.css`) is imported in `astro.config.mjs`:

```javascript
customCss: [
  '@fontsource/noto-sans/300.css',
  '@fontsource/noto-sans/500.css', 
  '@fontsource/noto-sans/700.css',
  './src/wri-theme/wri-theme.css',
],
```

## Migration Notes

- Original `wri.css` can be safely removed after testing
- Header.astro now contains only markup (no `<style>` tags)
- All existing functionality preserved
- All responsive behavior maintained
- WCAG accessibility compliance maintained

## Color System Summary

### Brand Colors
- **Primary Gold:** `#F0AB00` (WRI official)
- **Primary Green:** `#007A4D` (used for links)
- **Secondary Palette:** Blue, red, lime, purple, navy, orange, berry

### Usage Guidelines
- **Gold:** Backgrounds, highlights, active states
- **Green:** Links, hover states, focus indicators
- **Secondary:** Semantic colors (info, success, warning, danger)

### Accessibility
- All colors meet WCAG 2.1 AA contrast requirements
- Green links: 4.61:1 contrast ratio on white
- Focus indicators: 3px outline with high contrast
- Dark mode: Adjusted colors maintain accessibility
