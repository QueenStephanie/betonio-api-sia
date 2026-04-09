# TESTING

## Current Testing State

- No automated test framework is configured.
- No test files are present (`*.test.*`, `*.spec.*`, or dedicated test directories).
- `package.json` has no `test` script.

## Existing Quality Gates

- Linting is the only explicit quality gate today via `npm run lint`.
- Build validation available through `npm run build`.

## Missing Layers

- No unit tests for component behavior (counter increment, rendering, accessibility markers).
- No integration tests for user flows.
- No end-to-end tests for browser behavior.
- No visual regression tests despite custom CSS-heavy UI.

## Suggested Initial Stack

- Unit/component: Vitest + React Testing Library.
- E2E: Playwright.
- Optional snapshot/visual: Playwright screenshots or dedicated visual tooling.

## Suggested First Tests

- Render `App` and assert main heading is visible.
- Verify clicking counter increments number from 0 to 1.
- Assert documentation/social sections render expected link labels.
- Verify critical accessibility attributes for icon-only SVGs.

## CI Readiness

- No CI pipeline files are present in this repository.
- A minimal CI should run:
  - `npm ci`
  - `npm run lint`
  - `npm run build`
  - tests once added

## Coverage Baseline

- Effective automated coverage is currently 0%.
