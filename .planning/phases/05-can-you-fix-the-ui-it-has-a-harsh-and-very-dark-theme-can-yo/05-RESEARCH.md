# Phase 5: UI Theme Softening/Lightening - Research

**Researched:** 2026-04-09  
**Domain:** React + CSS theming and visual tone adjustment  
**Confidence:** HIGH

## Summary

The safest and fastest approach is a token-driven theme pass: keep current React component structure unchanged, centralize palette and surface tokens in the global stylesheet, and remove hardcoded dark/harsh colors from feature CSS so all UI elements inherit a softer visual system. [VERIFIED: codebase read of src/index.css, src/App.css, src/features/users-table/components/UsersTable.css]

Current UI intensity comes from two sources: (1) global dark mode tokens enabled by `color-scheme: light dark` and `@media (prefers-color-scheme: dark)` in the root, and (2) locally hardcoded high-contrast blue/navy accents and sharp shadows in component CSS. [VERIFIED: codebase read of src/index.css, src/App.css, src/features/users-table/components/UsersTable.css]

**Primary recommendation:** Implement a light-first, softened token set and refactor `App.css` + `UsersTable.css` to consume semantic CSS variables instead of fixed color literals. [VERIFIED: codebase read]

## Goal and Success Criteria Proposal for Roadmap

**Proposed Goal:** Users experience a visibly lighter, calmer, and still readable UI theme across page header, controls, and data table without changing app behavior.

**Proposed Success Criteria:**

1. Visual contrast remains accessible for text and status indicators while reducing harsh dark tones and heavy shadows. [CITED: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html]
2. Theme styling is centralized via CSS tokens so page-level and table-level elements look consistent. [VERIFIED: codebase read]
3. Search input, refresh button, table header, row hover, and status pills all follow the softened palette. [VERIFIED: codebase read]
4. Existing data flow and table behavior remain unchanged (no functional regressions). [VERIFIED: codebase read of App.jsx + UsersTable.jsx]

## Project Constraints (from copilot-instructions.md)

- Keep implementation inside existing React + Vite stack. [VERIFIED: copilot-instructions.md]
- Continue using `https://jsonplaceholder.typicode.com/users` as API source. [VERIFIED: copilot-instructions.md]
- Preserve assignment-required table columns and personal-row-first behavior. [VERIFIED: copilot-instructions.md]
- Maintain delivery context (GitHub publish + Word submission) as out-of-phase constraints for this UI phase. [VERIFIED: copilot-instructions.md]

## Standard Stack

### Core

| Library     | Version | Purpose         | Why Standard                                                            |
| ----------- | ------- | --------------- | ----------------------------------------------------------------------- |
| react       | 19.2.4  | UI rendering    | Existing app framework; no migration needed. [VERIFIED: package.json]   |
| react-dom   | 19.2.4  | DOM mount       | Existing runtime baseline. [VERIFIED: package.json]                     |
| CSS (plain) | n/a     | Theming/styling | Already established styling mechanism in project. [VERIFIED: src/*.css] |

### Supporting

| Library | Version | Purpose               | When to Use                                                                             |
| ------- | ------- | --------------------- | --------------------------------------------------------------------------------------- |
| vite    | 8.0.4   | Dev/build pipeline    | Verify visual edits quickly via dev server + production build. [VERIFIED: package.json] |
| eslint  | 9.39.4  | Static quality checks | Ensure no JS regressions during UI-only changes. [VERIFIED: package.json]               |

**Installation:**

```bash
npm install
```

## Recommended Approach and Why

1. Define semantic design tokens in `:root` for surfaces, text, borders, interactive states, status colors, and shadows (lightened values). [VERIFIED: existing token pattern in src/index.css]
2. Convert hardcoded literals in `App.css` and `UsersTable.css` to those tokens so one palette controls the full screen. [VERIFIED: current hardcoded colors in both files]
3. Keep `prefers-color-scheme` support but soften dark-theme values and avoid forcing deep near-black backgrounds. [CITED: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme]
4. Declare/retain `color-scheme` intentionally so native controls match intended theme behavior. [CITED: https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme]
5. Do not modify component logic in `App.jsx`, `UsersTable.jsx`, or data/model modules. This phase should be presentation-only. [VERIFIED: current concerns are visual]

Why this is best:

- Minimal risk: mostly CSS edits, no data-path changes. [VERIFIED: codebase architecture]
- Maintainability: one token layer prevents future color drift. [VERIFIED: current drift between global and feature CSS]
- Accessibility guardrails: contrast targets can be validated against WCAG AA thresholds ($4.5:1$ normal text, $3:1$ large text). [CITED: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html]

## Required Files Likely to Change

- `src/index.css` (primary token system softening; dark-mode token rebalance)
- `src/App.css` (header/search/control/status visual softening; replace hardcoded colors)
- `src/features/users-table/components/UsersTable.css` (table container/header/row/pills/shadow softening)
- `src/main.jsx` (optional only if global class toggles are added; likely no change)
- `index.html` (optional only if adding `<meta name="color-scheme">` to reduce load flash) [CITED: https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme]

## Architecture Patterns

### Pattern: Semantic Token Layer

**What:** Use semantic variables (e.g., `--surface-1`, `--text-primary`, `--accent-strong`, `--state-error-bg`) instead of direct hex values in component CSS. [VERIFIED: compatible with existing root variable setup]
**When to use:** Always for new visual styles in this phase.

### Pattern: Presentation-Only Refactor

**What:** Keep JSX/logic intact; change only CSS and optional metadata.
**When to use:** This phase scope is visual softening, not behavior change.

### Anti-Patterns to Avoid

- Hardcoding new hex values in multiple CSS files (recreates inconsistency problem). [VERIFIED: existing inconsistency]
- Dropping contrast too far while softening (readability regressions). [CITED: WCAG contrast minimum]
- Changing row model or API hook for style-only goals (scope creep). [VERIFIED: phase objective]

## Don't Hand-Roll

| Problem                         | Don't Build                          | Use Instead                                     | Why                                                                     |
| ------------------------------- | ------------------------------------ | ----------------------------------------------- | ----------------------------------------------------------------------- |
| Theme consistency               | Ad-hoc per-component color overrides | Global semantic CSS variables                   | Lower maintenance and fewer regressions. [VERIFIED: codebase structure] |
| Accessibility contrast checking | Manual visual guessing               | Browser devtools/a11y checker + WCAG thresholds | Objective pass/fail criteria. [CITED: WCAG contrast minimum]            |

## Runtime State Inventory

Omitted: This is not a rename/refactor/migration phase with runtime state mutation risk. [VERIFIED: phase scope]

## Risks/Pitfalls and Mitigations

1. **Pitfall:** Theme appears softer on desktop but unreadable in dark preference mode.
   **Mitigation:** Validate both default and `prefers-color-scheme: dark` outputs; keep minimum contrast thresholds. [CITED: MDN + WCAG]
2. **Pitfall:** Styling drift between app shell and users table after edits.
   **Mitigation:** Route all shared colors through root tokens and forbid direct literals in feature CSS.
3. **Pitfall:** Hover/active/focus states become too subtle.
   **Mitigation:** Explicitly test keyboard focus ring, button hover, and table row hover states in both schemes.
4. **Pitfall:** Unintended functionality regressions during CSS changes.
   **Mitigation:** Run existing lint/tests/build and smoke test search + refresh behavior.

## Test/Verification Commands

```bash
npm install
npm run lint
npm run test:rows
npm run test:phase2-api
npm run test:phase3-filter
npm run build
npm run dev
```

Manual verification checklist (phase gate):

- Open app in normal/light mode and confirm softer visuals for header, controls, table, and pills.
- Toggle OS/browser dark mode and confirm no harsh/deep-black visual jump and readable contrast.
- Confirm search filtering still works and row count updates.
- Confirm refresh still triggers loading state and error state remains legible.

## Suggested Requirement IDs (new UI-\* IDs)

| ID    | Requirement                                                                                                       |
| ----- | ----------------------------------------------------------------------------------------------------------------- |
| UI-01 | User sees a lighter/softer visual theme across page shell, controls, and table surfaces.                          |
| UI-02 | User sees consistent color tokens applied across App and UsersTable styles (no conflicting palettes).             |
| UI-03 | User can read all body and status text with at least WCAG AA minimum contrast.                                    |
| UI-04 | User sees distinct but softened interactive states for button hover/focus and table row hover.                    |
| UI-05 | User experience remains visually coherent in both default and dark-preference environments.                       |
| UI-06 | Functional table behavior (load, refresh, filter, empty state, error state) remains unchanged after theme update. |

## Phase Requirements

| ID    | Description             | Research Support                                                                              |
| ----- | ----------------------- | --------------------------------------------------------------------------------------------- |
| UI-01 | Softer/lighter theme    | Token-based palette rebalance in `index.css` + replacements in `App.css` and `UsersTable.css` |
| UI-02 | Token consistency       | Semantic variable pattern + removal of ad-hoc literals                                        |
| UI-03 | Readability contrast    | WCAG AA threshold checks + dark/light validation                                              |
| UI-04 | Interactive clarity     | Explicit hover/focus token values and manual UI pass                                          |
| UI-05 | Cross-scheme coherence  | Controlled `color-scheme` + `prefers-color-scheme` token sets                                 |
| UI-06 | No behavior regressions | Existing test scripts + manual data-flow smoke checks                                         |

## Environment Availability

Step 2.6: SKIPPED (no external dependencies identified for a CSS-focused phase).

## Validation Architecture

### Test Framework

| Property           | Value                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| Framework          | Node built-in test runner (`node --test`)                                                                     |
| Config file        | none detected                                                                                                 |
| Quick run command  | `npm run test:phase3-filter`                                                                                  |
| Full suite command | `npm run test:rows && npm run test:phase2-api && npm run test:phase3-filter && npm run lint && npm run build` |

### Phase Requirements -> Test Map

| Req ID | Behavior                        | Test Type                  | Automated Command                                                            | File Exists? |
| ------ | ------------------------------- | -------------------------- | ---------------------------------------------------------------------------- | ------------ |
| UI-01  | Softer visual surfaces          | manual visual              | `npm run dev`                                                                | n/a          |
| UI-02  | Consistent tokens               | manual + lint              | `npm run lint`                                                               | n/a          |
| UI-03  | Contrast compliance             | manual accessibility check | `npm run dev`                                                                | n/a          |
| UI-04  | Interactive states visible      | manual interaction         | `npm run dev`                                                                | n/a          |
| UI-05  | Light/dark preference coherence | manual cross-mode          | `npm run dev`                                                                | n/a          |
| UI-06  | No functional regression        | automated + manual smoke   | `npm run test:rows && npm run test:phase2-api && npm run test:phase3-filter` | yes          |

### Wave 0 Gaps

- No automated visual regression tests exist for UI theme checks. [VERIFIED: package.json + test files]
- Recommendation: keep manual visual checklist in PLAN verification steps. [ASSUMED]

## Security Domain

### Applicable ASVS Categories

| ASVS Category         | Applies                             | Standard Control                                                                    |
| --------------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| V2 Authentication     | no                                  | n/a                                                                                 |
| V3 Session Management | no                                  | n/a                                                                                 |
| V4 Access Control     | no                                  | n/a                                                                                 |
| V5 Input Validation   | yes (existing search input remains) | Existing UI input handling; no new input surface in this phase. [VERIFIED: App.jsx] |
| V6 Cryptography       | no                                  | n/a                                                                                 |

### Known Threat Patterns for this stack

| Pattern                                                | STRIDE                       | Standard Mitigation                                                                              |
| ------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| UI state confusion from low contrast status/error text | Spoofing/Repudiation UX risk | Keep high-clarity status tokens and WCAG minimum contrast checks. [CITED: WCAG contrast minimum] |

## Sources

### Primary (HIGH confidence)

- Local codebase files (`src/index.css`, `src/App.css`, `src/App.jsx`, `src/features/users-table/components/UsersTable.css`, `src/features/users-table/components/UsersTable.jsx`, `package.json`) - current architecture, styling, scripts. [VERIFIED]
- MDN `color-scheme` docs - intended property behavior and meta usage guidance. [CITED: https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme]
- MDN `prefers-color-scheme` docs - user-preference media-query behavior. [CITED: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme]
- W3C WCAG 2.1 contrast minimum - AA thresholds for text contrast. [CITED: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html]

### Secondary (MEDIUM confidence)

- none

### Tertiary (LOW confidence)

- none

## Assumptions Log

| #   | Claim                                                                                                        | Section                 | Risk if Wrong                                   |
| --- | ------------------------------------------------------------------------------------------------------------ | ----------------------- | ----------------------------------------------- |
| A1  | Manual visual checklist is sufficient for this classroom-scale UI phase without adding screenshot automation | Validation Architecture | Medium: subtle visual regressions may be missed |

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - fully verified in repository and package metadata.
- Architecture: HIGH - phase is presentation-only and existing code boundaries are clear.
- Pitfalls: HIGH - supported by direct code inspection and WCAG/MDN references.

**Research date:** 2026-04-09
**Valid until:** 2026-05-09
