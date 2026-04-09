# ARCHITECTURE

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
  - `main.jsx`: app bootstrap.
  - `App.jsx`: presentation + interaction logic.
  - CSS files: global vs component-specific styles.
- Suitable for prototype stage; further growth will need feature modules.

## Architectural Strengths

- Simple startup path and low complexity.
- Clear single rendering path makes debugging straightforward.

## Architectural Constraints

- UI, state, content, and links are co-located in one component.
- No abstraction for API/data concerns yet.
