# cyb3rval3nt1n3.github.io

Personal portfolio and research blog of cyb3rval3nt1n3 — Threat Hunter, Detection Engineer, and Security Researcher.

## Tech Stack

- **Astro 5** — static site generation with island architecture
- **TypeScript** — full type safety across components and content
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **MDX** — Markdown + JSX for rich content in blog, projects, and research
- **Astro Content Collections** — schema-validated content with Zod
- **GitHub Pages** — static hosting via GitHub Actions deploy

## Architecture

### Component Design

The UI is built around a composable component hierarchy:

- **Layouts** — `Base.astro` provides the HTML shell, SEO meta, navigation, and footer
- **Page Sections** — `Section`, `Container`, `Reveal` provide consistent spacing, layout, and scroll animations
- **UI Primitives** — `Button`, `Card`, `Badge`, `Icon` are reusable, typed, and accessible
- **Content Blocks** — `ProjectCard`, `FeaturedProjects`, `ExperienceTimeline`, `ExpertiseGrid` compose primitives into domain-specific displays

### Content Architecture

All content (projects, research, blog) lives in `src/content/` as Astro Content Collections. Each collection has a Zod schema in `src/content/config.ts` that validates frontmatter at build time. Pages consume collections via `getCollection()` and `getEntry()`, keeping data access patterns uniform across the site.

### Key Decisions

- **No runtime dependencies for content.** All content is pre-rendered at build time. The search index is a static JSON file generated during `astro build`.
- **Client-side search.** The search feature loads a pre-built JSON index and filters it in-browser. No server, no API calls.
- **Dark-mode only.** The design uses a single dark theme (#09090B background, #38BDF8 accent). No theme toggle — reduces complexity and ensures consistent rendering.
- **Self-hosted fonts.** Space Grotesk (headings), Inter (body), and JetBrains Mono (code) are served via @fontsource packages for performance and privacy.

## Development

```bash
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # static build to dist/
npm run check    # type checking via astro check
```

## Deployment

Push to `main` triggers a GitHub Actions workflow that builds the site and deploys to GitHub Pages. The workflow lives in `.github/workflows/deploy.yml`.

## License

All content and code are &copy; cyb3rval3nt1n3.
