# Domain Pitfalls

**Domain:** Small React API-table student projects (Vite + JSONPlaceholder)
**Researched:** 2026-04-08

## Critical Pitfalls

### Pitfall 1: Effect-driven fetch loops and duplicate requests

**What goes wrong:** Data fetching in `useEffect` re-runs unexpectedly due to missing/unstable dependencies, or appears duplicated in development and gets "fixed" incorrectly.
**Why it happens:** Confusion about dependency arrays and React Strict Mode remount behavior.
**Consequences:** Infinite render loops, stale UI, or brittle "works-on-my-machine" fixes.
**Warning signs:**

- API calls fire on each keystroke/re-render.
- `eslint` warnings for `react-hooks/exhaustive-deps` are ignored/suppressed.
- Team adds ref guards only to stop duplicate development calls.
  **Prevention:**
- Keep `react-hooks/exhaustive-deps` enabled and treat warnings as blockers.
- Use stable dependencies only; move derived object/function creation inside the effect or memoize where needed.
- Implement cleanup (`AbortController` or ignore stale responses) instead of suppressing Strict Mode behavior.
  **Suggested phase mapping:**
- Phase: Core API integration
- Add acceptance checks: "No hook dependency warnings", "No render loop", "Cleanup present for async fetch"

### Pitfall 2: Race conditions overwrite newer data

**What goes wrong:** Slower earlier request resolves after a newer request and overwrites correct state.
**Why it happens:** Async fetch result is applied without cancellation/ignore guard.
**Consequences:** Table shows stale rows, hard-to-reproduce grading defects.
**Warning signs:**

- Fast refreshes or endpoint changes briefly show correct rows then revert.
- UI flips between old/new data during development.
  **Prevention:**
- Use `AbortController` in effect cleanup, or an `ignore` flag pattern.
- Gate state updates to only active request lifecycle.
- Keep explicit loading/error/success states.
  **Suggested phase mapping:**
- Phase: Data lifecycle hardening
- Add acceptance checks: "Changing trigger cannot show stale response", "Aborted request does not update state"

### Pitfall 3: Name parsing assumptions break row consistency

**What goes wrong:** Splitting `name` with a naive `split(' ')` fails for single-word/multi-part names.
**Why it happens:** Assignment asks first/last columns, but source API has a single free-form name.
**Consequences:** Empty last name, shifted data columns, inconsistent table output.
**Warning signs:**

- Blank last-name cells for some users.
- Manual row fixes in JSX for specific users.
  **Prevention:**
- Create one utility function for name normalization.
- Define deterministic rules (first token => first name, remaining tokens joined => last name; fallback for one-token names).
- Unit test parser with edge cases.
  **Suggested phase mapping:**
- Phase: Data transformation utilities
- Add acceptance checks: "All rows produce non-crashing first/last output", "Parser tests cover edge-name formats"

## Moderate Pitfalls

### Pitfall 4: Personal row shape diverges from API row shape

**What goes wrong:** Personal row object fields differ from transformed API fields.
**Prevention:**

- Create one canonical row schema and map both personal + API records through it.
- Validate required fields before render.
  **Warning signs:**
- Conditional rendering branches only for personal row.
- Column order differs between top row and fetched rows.
  **Suggested phase mapping:**
- Phase: Table model unification

### Pitfall 5: Missing fetch error and empty-state UX

**What goes wrong:** Failed fetch renders blank table or crashes.
**Prevention:**

- Check `response.ok`; throw on non-2xx.
- Render explicit loading, error, and empty states.
- Keep retry action minimal and visible.
  **Warning signs:**
- Network failure yields silent no-op.
- Console errors but no UI feedback.
  **Suggested phase mapping:**
- Phase: Resilience + UX states

### Pitfall 6: Over-growing monolithic `App.jsx`

**What goes wrong:** Fetching, parsing, table rendering, and layout all live in one component.
**Prevention:**

- Split into `features/users-table/` with view + hook + utils.
- Keep `App` as composition shell.
  **Warning signs:**
- `App.jsx` keeps expanding with mixed responsibilities.
- Reuse is impossible without copy/paste.
  **Suggested phase mapping:**
- Phase: Maintainability refactor

## Minor Pitfalls

### Pitfall 7: External-link safety and project hygiene ignored

**What goes wrong:** New-tab links omit `rel="noopener noreferrer"`; docs drift from actual behavior.
**Prevention:**

- Enforce outbound link pattern in review checklist.
- Update README with setup/run/lint/deploy steps tied to this assignment.
  **Warning signs:**
- Security lint/review notes repeat each phase.
- README still describes starter template, not API table app.
  **Suggested phase mapping:**
- Phase: Project hygiene pass

## Phase-Specific Warnings

| Phase Topic          | Likely Pitfall                               | Mitigation                                      |
| -------------------- | -------------------------------------------- | ----------------------------------------------- |
| Core API integration | Fetch loop from unstable effect dependencies | Enforce hook lint + dependency review checklist |
| Data transformation  | Fragile name split logic                     | Central parser utility + edge-case tests        |
| Table rendering      | Personal row schema mismatch                 | Canonical row model before render               |
| UX hardening         | Silent failure states                        | Explicit loading/error/empty UI contract        |
| Refactor             | Component sprawl in `App.jsx`                | Feature folder extraction with clear boundaries |

## Sources

- React docs: `useEffect` reference and troubleshooting (HIGH confidence)
- React docs: Synchronizing with Effects (HIGH confidence)
- MDN: Using the Fetch API, response checks, cancellation with `AbortController` (HIGH confidence)
- Local project context: `.planning/PROJECT.md` and `.planning/codebase/CONCERNS.md` (HIGH confidence)
