# Project Research Summary

**Project:** Betonio - Exploring APIs Using Fake Data
**Domain:** Educational React API-integration assignment
**Researched:** 2026-04-08
**Confidence:** HIGH

## Executive Summary

This project is a small, client-side React + Vite learning app focused on one core outcome: consume the JSONPlaceholder users endpoint and render a normalized table that combines API data with a required personal row. Expert implementations for this assignment keep architecture intentionally small: one fetch boundary, one transformation boundary, one view boundary, and explicit loading/error handling.

The recommended approach is to keep the existing stack (React 19 + Vite + native fetch), establish a canonical row contract early, and centralize all data normalization (name splitting, zipcode fallback, source metadata) before rendering. This avoids duplicate logic in JSX and makes acceptance criteria straightforward to verify.

The biggest delivery risks are fetch lifecycle bugs (effect loops and stale-response races), brittle name parsing assumptions, and schema drift between personal and API rows. These are mitigated by strict hook lint compliance, request cancellation/ignore guards, pure mapper utilities, and a contract-first build sequence that locks required columns and row ordering from the start.

## Key Findings

### Recommended Stack

For this assignment scope, the best stack is the current baseline: React 19, React DOM 19, Vite (current repo on 8.x), and the official Vite React plugin. Native browser fetch plus AbortController is preferred over additional dependencies because it teaches core web API patterns without introducing avoidable complexity.

**Core technologies:**

- React 19.x: component rendering and state/effect model — current modern baseline and already in repo.
- Vite 6.x+ (repo on 8.x): fast dev/build pipeline — ideal for a small classroom project.
- Native Fetch API + AbortController: HTTP and request lifecycle control — zero dependency and enough for single-endpoint needs.
- ESLint 9 + react-hooks plugin: guardrails for hooks correctness — essential to prevent effect-related bugs.

### Expected Features

The assignment has clear table-stakes functionality with low-to-medium complexity and high grading impact.

**Must have (table stakes):**

- Fetch users from JSONPlaceholder `/users` endpoint.
- Render required columns in one table: ID, First Name, Last Name, Username, Email, Zipcode.
- Keep personal row first after data merge.
- Parse API `name` into first/last using deterministic rules.
- Provide loading and error states for reliable UX.
- Sanitize missing nested values (especially zipcode).

**Should have (differentiators):**

- Source indicator per row (`Personal`/`API`) to make merge provenance obvious.
- Manual refresh for easy demo and retry.
- Lightweight search over username/email if time remains.

**Defer (v2+):**

- CRUD behavior, authentication, persistence, heavy grid frameworks, advanced table mechanics.

### Architecture Approach

Use a thin feature-sliced structure: shell page, orchestration hook, API module, pure mapper/parser utilities, and presentational table components. Keep data flow one-directional and decide ordering once in the data hook (`[personalRow, ...apiRows]`). This keeps rendering simple and makes acceptance checks deterministic.

**Major components:**

1. `UsersTablePage` + `useUsersTableData`: lifecycle orchestration and state transitions.
2. `usersApi` + mappers/parsers: endpoint access and canonical row normalization.
3. `UsersTable`/`UsersTableRow`: pure presentation from already-normalized props.

### Critical Pitfalls

1. **Effect-driven fetch loops or mis-handled Strict Mode duplicates** — enforce hook linting and stable dependencies; avoid suppression hacks.
2. **Stale response race conditions** — use AbortController or ignore flags so old requests cannot overwrite new state.
3. **Fragile name splitting logic** — parse once in a utility with explicit edge-case rules.
4. **Personal/API schema mismatch** — map both into one canonical row contract before render.
5. **Silent failure UX** — require explicit loading, error, and empty-state contracts.

## Implications for Roadmap

Based on combined research, suggested phase structure:

### Phase 1: Data Contract and Transformation Core

**Rationale:** Column requirements and merge behavior are hard dependencies for all downstream UI work.
**Delivers:** Canonical row schema, personal row constant, name parser, API-to-row mapper, zipcode fallbacks.
**Addresses:** Required columns, name parsing, data sanitation, personal-row consistency.
**Avoids:** Name parsing failures and row-shape divergence.

### Phase 2: API Integration and State Lifecycle

**Rationale:** Fetch wiring should land after transformation utilities so live data flows through a stable model.
**Delivers:** `usersApi` + `useUsersTableData` with loading/error states, prepend logic, stale-request protection.
**Uses:** Native fetch, AbortController, hook lint guardrails.
**Implements:** Architecture boundary between transport, transform, and UI state.

### Phase 3: Table UI and Assignment Compliance

**Rationale:** Presentation is fastest and safest once data contract and lifecycle are stable.
**Delivers:** Semantic table, required column order, consistent row rendering, optional source badges.
**Addresses:** Table-stakes output required for grading.
**Avoids:** JSX-level logic duplication and top-row special-casing.

### Phase 4: Hardening and Submission Readiness

**Rationale:** Final pass should validate non-functional quality and prevent common review regressions.
**Delivers:** Retry/refresh behavior (optional), edge-case checks, lint-clean run, docs/readme alignment.
**Addresses:** Reliability and reproducibility expectations.
**Avoids:** Silent failures, hygiene drift, last-minute regressions.

### Phase Ordering Rationale

- Contract-first prevents API/UI mismatch and rework.
- Lifecycle integration before UI avoids entangling async logic in presentation components.
- UI phase then becomes mostly deterministic rendering against a stable row model.
- Final hardening phase specifically targets known pitfall classes from research.

### Research Flags

Phases likely needing deeper research during planning:

- **Phase 2 (API lifecycle hardening):** Useful to verify exact fetch cancellation patterns and strict-mode-safe effect design.
- **Phase 4 (hardening/documentation):** Useful if deployment or evaluation rubric introduces environment-specific constraints.

Phases with standard patterns (skip research-phase):

- **Phase 1 (data contract + mappers):** Well-bounded pure-function patterns.
- **Phase 3 (semantic table rendering):** Established React and HTML table conventions.

## Confidence Assessment

| Area         | Confidence | Notes                                                                                           |
| ------------ | ---------- | ----------------------------------------------------------------------------------------------- |
| Stack        | HIGH       | Recommendations align with existing repo baseline and assignment size constraints.              |
| Features     | HIGH       | Derived from explicit assignment requirements and required endpoint/columns.                    |
| Architecture | HIGH       | Pattern fit is straightforward for single-page, single-endpoint educational scope.              |
| Pitfalls     | HIGH       | Risks are well-documented in official React/MDN guidance and match known student failure modes. |

**Overall confidence:** HIGH

### Gaps to Address

- Production deployment behavior was not deeply researched and should be validated only if deployment is graded.
- Exact instructor rubric phrasing for optional extras (refresh/search/badges) should be confirmed before expanding scope.

## Sources

### Primary (HIGH confidence)

- React docs (`useEffect`, Effects guidance) — lifecycle, dependencies, strict-mode behavior.
- MDN Fetch API and AbortController guidance — response validation and cancellation patterns.
- JSONPlaceholder users endpoint — source payload shape and nested address fields.
- Local project artifacts (`.planning/PROJECT.md`, `.planning/codebase/CONCERNS.md`) — assignment scope and repository context.

### Secondary (MEDIUM confidence)

- Community consensus embedded in research outputs on assignment-scoped architecture patterns.

### Tertiary (LOW confidence)

- None identified.

---

_Research completed: 2026-04-08_
_Ready for roadmap: yes_
