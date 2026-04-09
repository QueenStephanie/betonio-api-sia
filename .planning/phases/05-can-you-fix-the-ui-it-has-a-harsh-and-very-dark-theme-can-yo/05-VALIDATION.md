# Phase 5 Validation

**Phase:** 05 - can-you-fix-the-ui-it-has-a-harsh-and-very-dark-theme-can-yo  
**Date:** 2026-04-09  
**Status:** Ready for execution

## Scope Validation

This phase is a presentation-only UI softening pass. Validation must prove:

1. Theme tone is visibly lighter and calmer across app shell and users table.
2. Styling is token-driven and consistent across global and feature CSS.
3. Readability and interaction cues remain clear in default and dark-preference modes.
4. Existing app behavior is unchanged.

## Requirement Validation Matrix

| Requirement | Validation Method                            | Evidence Source                                                                                               |
| ----------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| UI-01       | Manual visual check in dev server            | App shell, controls, table surfaces                                                                           |
| UI-02       | CSS inspection + lint/build                  | Token usage in `src/index.css`, `src/App.css`, `src/features/users-table/components/UsersTable.css`           |
| UI-03       | Manual contrast verification in both schemes | Body text and status indicators                                                                               |
| UI-04       | Manual hover/focus/row-state verification    | Search/button/row/status interactive states                                                                   |
| UI-05       | Manual cross-scheme consistency check        | Default + `prefers-color-scheme: dark` rendering                                                              |
| UI-06       | Automated regression suite                   | `npm run test:rows && npm run test:phase2-api && npm run test:phase3-filter && npm run lint && npm run build` |

## Automated Validation Commands

```bash
npm run test:rows
npm run test:phase2-api
npm run test:phase3-filter
npm run lint
npm run build
```

## Manual Validation Checklist

- Confirm softened visual tone for header, controls, table container, rows, and status pills.
- Confirm readable text/state contrast in default mode.
- Toggle OS/browser dark preference and confirm readable, non-harsh output.
- Confirm hover/focus affordances remain obvious on controls and rows.
- Confirm load/refresh/filter/no-results/error flows still behave exactly as before.

## Exit Criteria

Phase 5 is valid for completion when:

1. All automated commands pass.
2. Manual checklist items pass in both color-scheme contexts.
3. No JSX or model/api behavior changes were introduced during styling edits.
