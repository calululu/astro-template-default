# Astro Starter Template

A minimal Astro starter with Tailwind CSS, shared layout components, SEO metadata helpers, and accessibility-minded defaults.

## Stack

- Astro
- Tailwind CSS
- TypeScript-enabled Astro components

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```txt
src/
  assets/css/main.css
  components/Button.astro
  layouts/Layout.astro
  layouts/components/Favicon.astro
  layouts/components/Footer.astro
  layouts/components/Header.astro
  layouts/components/MetadataSEO.astro
  pages/index.astro
  pages/contatti/index.astro
  types/types.ts
```

## First Edits

Update the production site URL in `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://websiteURLexample.it",
});
```

`site` is used by `src/layouts/components/MetadataSEO.astro` to generate absolute canonical, Open Graph, and Twitter image URLs.

Also update:

- `Website Name` placeholders in pages and layout components
- footer links in `src/layouts/components/Footer.astro`
- navigation links in `src/layouts/components/Header.astro`
- favicon paths in `src/layouts/components/Favicon.astro`

## Layout

Pages should use the shared layout:

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout
  title="Page title"
  description="Page-specific meta description."
  siteName="Website Name"
  titleTemplate="%s | Website Name"
>
  <h1>Page title</h1>
</Layout>
```

The layout includes:

- shared metadata
- header and footer
- a skip link for keyboard users
- a `<main id="main-content">` landmark
- global CSS

## SEO

Each page can pass SEO data directly to `Layout`, which forwards it to `MetadataSEO.astro`:

```astro
<Layout
  title="About us"
  description="Learn more about our company."
  canonical="/about"
  siteName="Website Name"
  titleTemplate="%s | Website Name"
  image="/images/social-card.jpg"
/>
```

Supported SEO props include:

- `title`
- `description`
- `canonical`
- `siteName`
- `titleTemplate`
- `image`
- `imageAlt`
- `type`
- `locale`
- `keywords`
- `robots`
- `noindex`
- `nofollow`
- `author`
- `publishedTime`
- `modifiedTime`
- `themeColor`
- `twitterCard`
- `alternateLocales`
- `structuredData`

Example with structured data:

```astro
<Layout
  title="Homepage"
  description="Welcome to my website."
  siteName="My Website"
  structuredData={{
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "My Company",
  }}
>
  <h1>Homepage</h1>
</Layout>
```

## Button Component

`src/components/Button.astro` renders:

- an `<a>` element when `href` or `to` is provided
- a native `<button>` element otherwise

Examples:

```astro
<Button href="/contact">Contact us</Button>
<Button variant="secondary" type="submit">Submit</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="link" href="/privacy">Privacy Policy</Button>
```

Supported props:

- `variant`: `"primary" | "secondary" | "ghost" | "link"`
- `size`: `"sm" | "md" | "lg"`
- `href`
- `to`
- `type`: `"button" | "submit" | "reset"`
- `disabled`
- `class`
- `ariaLabel`

Use `class` for layout-specific overrides:

```astro
<Button href="/contact" class="w-full sm:w-auto">Contact us</Button>
```

## Accessibility Defaults

This starter includes:

- semantic `header`, `nav`, `main`, and `footer` landmarks
- a skip link to jump directly to main content
- visible focus styles with `:focus-visible`
- `aria-current="page"` on the active navigation link
- reduced-motion handling for users who prefer less animation
- descriptive example link text

Keep these patterns when adding new components:

- use real links for navigation
- use real buttons for actions
- avoid `href="#"` placeholders in production
- add useful `alt` text to meaningful images
- use empty `alt=""` only for decorative images

## Styling

Global styles live in `src/assets/css/main.css`.

Tailwind is configured through the Vite plugin in `astro.config.mjs`:

```js
vite: {
  plugins: [tailwindcss()];
}
```

## Favicon

`src/layouts/components/Favicon.astro` contains commented favicon examples. Add your favicon files to `public/favicon/`, then uncomment and update the paths.

## Updates

Update Astro:

```bash
npx @astrojs/upgrade
```

Update Tailwind:

```bash
npx @tailwindcss/upgrade
```

## Optional Additions

Depending on the project, consider adding:

- `@astrojs/check` and `typescript` for `astro check`
- `@astrojs/sitemap` for sitemap generation
- `robots.txt`
- Prettier or another formatter
- real Privacy Policy and Cookie Settings pages
