# Technology Stack (2025 Baseline)

**Project:** Betonio - Exploring APIs Using Fake Data  
**Scope:** Small educational React app that fetches a REST endpoint and renders a table  
**Researched:** 2026-04-08

## Recommended Stack For This Project Size

### Core Framework and Build

| Technology           | Version Recommendation                  | Purpose                          | Why This Fits                                                     |
| -------------------- | --------------------------------------- | -------------------------------- | ----------------------------------------------------------------- |
| React                | 19.x                                    | UI rendering and component model | Standard modern React baseline in 2025; matches existing project. |
| React DOM            | 19.x                                    | Browser rendering runtime        | Required pair with React 19.                                      |
| Vite                 | 6.x+ (current repo: 8.x)                | Dev server and production build  | Fast dev loop, minimal config, ideal for small teaching apps.     |
| @vitejs/plugin-react | Matching Vite major (current repo: 6.x) | Fast Refresh + JSX transform     | Official Vite React integration.                                  |

### Data Fetching

| Technology        | Version Recommendation | Purpose                                 | Why This Fits                                                           |
| ----------------- | ---------------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| Browser Fetch API | Native                 | Call JSONPlaceholder REST endpoint      | Zero dependency, easy to teach, enough for one endpoint/table use case. |
| AbortController   | Native                 | Cancel stale requests on unmount/reload | Prevents beginner-level race/leak issues with minimal complexity.       |

### Quality and Guardrails

| Technology                | Version Recommendation | Purpose                     | Why This Fits                                   |
| ------------------------- | ---------------------- | --------------------------- | ----------------------------------------------- |
| ESLint                    | 9.x                    | Lint JS/JSX and hooks usage | Already in repo; catches common React mistakes. |
| eslint-plugin-react-hooks | 7.x                    | Enforce hooks rules         | Important for useEffect/useState correctness.   |

## Optional (Only If Scope Expands)

Use these only if requirements grow beyond one simple table fetch.

| Library                         | Version Recommendation    | Add When                                              | Why Optional, Not Default                                             |
| ------------------------------- | ------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| @tanstack/react-query           | 5.x                       | Multiple endpoints, caching/retry/invalidation needed | Excellent library, but overkill for a single educational fetch.       |
| zod                             | 3.x                       | You must validate uncertain API payloads at runtime   | Helpful for safety, unnecessary for this assignment's fixed endpoint. |
| vitest + @testing-library/react | Vitest 1.x/2.x, RTL 15.x+ | You add automated grading or regression checks        | Useful for scale/CI, not required for activity completion.            |

## What Not To Use (For This Assignment)

| Avoid                           | Why Not For This Project                                                   |
| ------------------------------- | -------------------------------------------------------------------------- |
| Redux / Redux Toolkit           | Global state complexity is unnecessary for one table screen.               |
| RTK Query                       | Powerful, but too heavy for one endpoint in a learning exercise.           |
| Axios                           | Adds dependency without clear benefit over native fetch here.              |
| AG Grid / enterprise data grids | Too much API surface and styling complexity for a basic table requirement. |
| Next.js / full-stack frameworks | Assignment is a client-side Vite activity, no SSR/backend need.            |

## Practical Recommendation For This Repo

Keep the existing React + Vite stack, implement data loading with native fetch in a single table-focused component, and avoid adding dependencies unless requirements expand.

## Install Notes

No new package installs are required for the current milestone goal.
