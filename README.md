# Personal Portfolio

A fast, responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The visual direction is deliberately minimal: restrained color, strong typography, subtle motion, and clear information hierarchy.

Repository: https://github.com/ccsalman545/muhammed-salman-portfolio

Live site: https://muhammedsalmancc.netlify.app

## Features

- Dark-first responsive interface
- Hero, About, Skills, Experience, Education, Projects, and Contact sections
- Typed content model for quick personalization
- Accessible navigation, focus states, semantic markup, and reduced-motion support
- Lightweight CSS animations with no animation runtime
- SEO metadata, Open Graph image, canonical URL, and semantic headings
- Netlify build, SPA redirects, caching, and security headers
- Lucide React icon set

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Personalize

Most content lives in `src/data/portfolio.ts`. Update the name, email, location, biography, experience, education, projects, and social links there.

Also update the following before publishing:

1. Metadata in `index.html` if the production domain changes.
2. Initials in `src/components/Header.tsx`.
3. Social preview content in `public/og-image.svg`.
4. Project and social URLs in `src/data/portfolio.ts` after publishing the repository.

## Project structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── SectionHeading.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Commands

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run lint     # Run Oxlint
npm run test:a11y # Run the automated axe accessibility audit
npm run preview  # Preview the production build locally
```

## Deploy to Netlify

Push this repository to a Git provider and import it in Netlify. The included `netlify.toml` configures the build command and publish directory automatically.

Alternatively, use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --build
netlify deploy --build --prod
```

## Accessibility

The project includes a skip link, keyboard-visible focus styling, semantic landmarks, Escape-key mobile navigation, descriptive labels, high-contrast tokens, forced-colors support, and a `prefers-reduced-motion` fallback. `npm run test:a11y` checks the rendered application with axe-core. Because jsdom cannot calculate rendered color contrast, also validate major visual changes in a browser with Lighthouse and a keyboard pass.
