# Architecture

## Component Structure

- **Layouts** — Base.astro (shell, SEO, nav, footer)
- **Sections** — Section, Container, Reveal (spacing, layout, animations)
- **Primitives** — Button, Card, Badge, Icon (reusable, typed, accessible)
- **Compositions** — ProjectCard, FeaturedProjects, ExperienceTimeline, ExpertiseGrid, ResearchHighlights, LatestArticles

## Content Collections

All content is stored in `src/content/` with Zod-validated schemas:

- `projects/` — MDX files with frontmatter (title, description, tags, techStack, mitre, github)
- `research/` — MDX files (title, summary, date, tags)
- `blog/` — MDX files (title, summary, date, category, tags)

## Data Flow

- Static content → Content Collections → `getCollection()` → pages
- Site configuration → `src/data/site.ts` → shared constants (experience, expertise)
- Search → build-time JSON index → client-side filter
- Pages → Content rendered with `<Content />` component

## Design Principles

- No duplicated code — all repeated UI is componentized
- TypeScript everywhere — types for props, content schemas, and data
- Mobile-first responsive design
- Accessible HTML with skip links, semantic elements, and ARIA labels
- Dark theme only with CSS custom properties for consistency
