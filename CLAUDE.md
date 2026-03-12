# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
```

Pre-commit hooks run ESLint automatically via Husky + lint-staged on all staged `*.{js,jsx,ts,tsx}` files.

## Architecture

**Next.js App Router** site with Chakra UI, Emotion (CSS-in-JS), and TypeScript strict mode. No backend, no CMS — all content is static TypeScript constants.

### Key principle

Most updates should only touch two places:
- `/public/` — images (team photos, project logos, company logos, etc.)
- `/src/utils/constants/` — all site content as typed TypeScript data

### Content data files (`/src/utils/constants/`)

| File | What it controls |
|------|-----------------|
| `Settings.ts` | `RECRUITMENT_OPEN` toggle, form URLs, impact stats, school year |
| `project-data.ts` | Current projects (CLCHC, GCF, ELDR) and historical projects |
| `team-data.ts` | Board member profiles; project-team members are in separate arrays |
| `alumni-testimonials.ts` | Alumni profiles, testimonials, featured companies |
| `company-logos.ts` | Company logos shown on Career page |
| `recruitment-events.ts` | Recruitment timeline events |
| `gallary-photos.ts` | Gallery photo references (note: intentional misspelling in filename) |

### Component organization (`/src/utils/components/`)

- `PageX/` directories contain page-specific components (e.g., `PageTeam/`, `PageLanding/`)
- Shared utilities: `AnimationUtils/`, `CardUtils/`, `GridUtils/`, `TextUtils/`
- Top-level: `Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, `ParallaxHero.tsx`
- Team display system is documented in `/src/utils/components/README.md` — read it before modifying team components

### Component conventions

- **Each page section is its own component.** When adding or editing a section of a page, extract it into a dedicated component file in the appropriate `PageX/` directory rather than inlining it in `page.tsx`.
- **Reusable first.** Before building a new component, check whether an existing one in `CardUtils/`, `GridUtils/`, `AnimationUtils/`, or `TextUtils/` can be reused or extended. If a component could reasonably appear in more than one place, create it as a shared component in one of those utility directories (or a new one if no existing category fits) rather than putting it inside a `PageX/` folder.

### Styling

- Chakra UI with a custom purple theme (`/src/theme/index.ts`) — no Tailwind
- Brand primary color: `#6331D8` (purple)
- Custom breakpoints: `xs` (475px), `sm` (640px), `md` (768px), `mdlg` (900px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- Custom button variants: `"purple"` and `"purple.outline"`
- Emotion is compiled via `next.config.ts` (`compiler: { emotion: true }`)

### Path alias

`@/*` maps to `./src/*` — use this for all internal imports.

### ESLint rules to know

- Imports must be ordered: builtin → external → internal → parent → sibling → index
- Imports within each group must be alphabetized
- Unused imports are errors (auto-fixed by lint-staged on commit)
