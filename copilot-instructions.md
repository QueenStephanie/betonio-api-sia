<!-- GSD:project-start source:PROJECT.md -->
## Project

**Exploring APIs Using Fake Data**

This is a React.js web activity project for students to practice fetching and combining API data with personal data. The app will display a table where the student's personal row appears first, followed by users from JSONPlaceholder. Final deliverable includes a published GitHub link submitted in a Word document.

**Core Value:** Student can clearly demonstrate API fetch + data merge skill by showing personal row first and API rows after in one table.

### Constraints

- **Tech stack**: React.js frontend in existing Vite project — keep implementation inside current stack
- **API source**: Must use `https://jsonplaceholder.typicode.com/users` — required by assignment brief
- **Data shape**: Must display exact columns (ID, First Name, Last Name, Username, Email, Zipcode) — required for grading
- **Ordering**: Personal information must appear first in table — explicit assignment requirement
- **Delivery**: Must publish to GitHub and submit link in Word document — explicit assignment process
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages and Runtime
- JavaScript (ES Modules) across app and build tooling.
- Runtime target is browser; tooling runtime is Node.js via Vite CLI.
- JSX is used in React components.
## Frontend Framework
- React 19 via `react` and `react-dom`.
- App bootstraps from `src/main.jsx` with `createRoot` and `StrictMode`.
- Primary UI entry component is `src/App.jsx`.
## Build and Dev Tooling
- Vite 8 as dev server and production bundler.
- React integration through `@vitejs/plugin-react` configured in `vite.config.js`.
- Scripts in `package.json`:
## Linting and Code Quality Tooling
- ESLint 9 flat config in `eslint.config.js`.
- Uses `@eslint/js` recommended base.
- Uses `eslint-plugin-react-hooks` recommended rules.
- Uses `eslint-plugin-react-refresh` Vite rules.
- Browser globals provided by `globals` package.
## Styling Stack
- Plain CSS files: `src/index.css` and `src/App.css`.
- Modern nested CSS syntax appears in `src/App.css`.
- CSS custom properties define theme tokens in `src/index.css`.
- Supports both light and dark color schemes.
## Assets and Static Files
- App assets in `src/assets/` (`hero.png`, `react.svg`, `vite.svg`).
- Public static assets in `public/` (`favicon.svg`, `icons.svg`).
- SVG sprite icons referenced through `/icons.svg#symbol-id`.
## Notes
- Repository is a Vite React starter evolved with custom UI styling.
- No backend service or server framework is present in this codebase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## JavaScript/React Style
- Uses ES module imports/exports consistently.
- Functional React component style is used (`function App() { ... }`).
- Hooks pattern follows React conventions (`useState`).
## Linting Rules
- ESLint flat config is authoritative (`eslint.config.js`).
- JS/JSX files matched by `**/*.{js,jsx}`.
- `no-unused-vars` is enforced with uppercase-prefix opt-out (`^[A-Z_]`).
- React hooks rules and React Refresh safety rules are enabled.
## Naming and File Patterns
- Component names use PascalCase (`App`).
- Variables/functions use camelCase (`setCount`, `heroImg`).
- IDs/classes in markup use kebab/lowercase patterns (`next-steps`, `button-icon`).
## CSS Conventions
- CSS custom properties define design tokens in `:root`.
- Nested rules are used heavily in `src/App.css`.
- Responsive behavior is handled with `@media (max-width: 1024px)` blocks.
- Theme adaptation uses `@media (prefers-color-scheme: dark)`.
## Accessibility Conventions (Current)
- Decorative icons are often marked with `aria-hidden="true"` and presentation roles.
- Alt text is provided selectively (some images intentionally empty for decoration).
- Focus styles are explicitly defined for interactive counter button.
## Error Handling and Resilience
- No async/network logic yet, so no error-handling conventions for API failures.
- No runtime validation utilities or error boundaries currently present.
## Documentation/Process Conventions
- Repository still contains template `README.md`.
- No explicit contribution guide, architecture decision records, or coding standards docs yet.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## High-Level Pattern
- Single-page frontend application using React + Vite.
- Component-driven architecture with one top-level component (`App`).
- No layered domain/service/repository architecture yet.
## Entry Points
- HTML shell: `index.html`.
- JS bootstrap: `src/main.jsx`.
- Root component: `src/App.jsx`.
## Rendering/Data Flow
- `src/main.jsx` mounts `<App />` into `#root`.
- `src/App.jsx` owns local `count` state via React hooks.
- UI updates are event-driven (`onClick` increments counter).
- No cross-component state, no global store, no context.
## Styling Architecture
- Global tokens and baseline typography/layout in `src/index.css`.
- Feature/section styling in `src/App.css`.
- Theme support uses `prefers-color-scheme` media query.
## Asset Flow
- Local module imports from `src/assets/*` for component-specific images.
- Public sprite sheet served from `public/icons.svg` and referenced by `<use>`.
## Build-Time Architecture
- `vite.config.js` configures only React plugin.
- No aliases, SSR, proxy, or environment-specific branches configured.
## Module Boundaries
- Current module boundaries are minimal:
- Suitable for prototype stage; further growth will need feature modules.
## Architectural Strengths
- Simple startup path and low complexity.
- Clear single rendering path makes debugging straightforward.
## Architectural Constraints
- UI, state, content, and links are co-located in one component.
- No abstraction for API/data concerns yet.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.github/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
