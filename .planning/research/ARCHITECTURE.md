# Architecture Patterns

**Domain:** React/Vite API table assignment (JSONPlaceholder users)
**Researched:** 2026-04-08

## Recommended Architecture

Use a small feature-sliced structure with one-directional data flow:

- `App` as page shell and feature composition root
- `UsersTablePage` as the screen-level container
- `useUsersTableData` hook as data orchestration boundary
- `usersApi` module as HTTP boundary
- `nameParser` and `userMappers` as pure transformation utilities
- `UsersTable` and `UsersTableRow` as pure presentation components

This keeps fetch, transform, and render responsibilities separate while staying simple enough for a student assignment.

Suggested folder layout:

```text
src/
  main.jsx
  App.jsx
  app/
    constants/
      personalUser.js
  features/
    users-table/
      UsersTablePage.jsx
      UsersTable.jsx
      UsersTableRow.jsx
      useUsersTableData.js
      usersTable.types.js
  services/
    usersApi.js
  utils/
    nameParser.js
    userMappers.js
  styles/
    table.css
```

## Component Boundaries

| Component/Module    | Responsibility                                                    | Communicates With                         |
| ------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| `App`               | App shell and route-less composition                              | `UsersTablePage`                          |
| `UsersTablePage`    | Handles loading/error/empty/success states for table page         | `useUsersTableData`, `UsersTable`         |
| `useUsersTableData` | Fetches users, maps data, prepends personal row, exposes UI state | `usersApi`, `userMappers`, `personalUser` |
| `usersApi`          | Performs HTTP GET to JSONPlaceholder endpoint                     | External API                              |
| `nameParser`        | Splits full name into first/last with safe fallback rules         | `userMappers`                             |
| `userMappers`       | Converts API payload into display row shape                       | `nameParser`                              |
| `UsersTable`        | Renders table header and list of rows                             | `UsersTableRow`                           |
| `UsersTableRow`     | Renders one row only from props                                   | none                                      |
| `personalUser`      | Static first-row source for student data                          | `useUsersTableData`                       |

Boundary rules:

- Presentation components do not fetch data.
- API module does not know about table rendering.
- Mapper/util modules are pure functions (no side effects).
- Row ordering is decided in one place only: `useUsersTableData`.

## Data Contract

Normalize to one row shape before rendering:

```js
{
  id: number | string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  zipcode: string,
  source: 'personal' | 'api'
}
```

Why this contract:

- UI layer receives one consistent shape.
- Assignment column requirements are enforced centrally.
- Personal and API rows can be rendered identically.

## Data Flow

1. `main.jsx` mounts `App`.
2. `App` renders `UsersTablePage`.
3. `UsersTablePage` calls `useUsersTableData`.
4. Hook calls `usersApi.getUsers()`.
5. Raw API users are transformed by `mapApiUserToRow()`.
6. Personal row is normalized to same shape.
7. Final array is composed as `[personalRow, ...apiRows]`.
8. Hook returns `{ rows, isLoading, error }`.
9. `UsersTablePage` conditionally renders status or `UsersTable`.
10. `UsersTable` maps rows to `UsersTableRow`.

Data-flow constraints for correctness:

- Never parse names inside JSX.
- Never mutate response arrays in place.
- Never build rows in multiple files.
- Keep personal-row prepend logic out of table components.

## State Model

State should remain local to the feature hook:

- `rows`: final ordered table rows
- `isLoading`: boolean during fetch
- `error`: readable message on failure

No global store is needed for this assignment.

## Error and Edge Case Handling

Handle common edge cases at the data layer:

- Empty API response: still render personal row.
- Missing last name in API `name`: last name fallback to empty string.
- Missing `address.zipcode`: fallback to `"N/A"`.
- Network failure: show page-level error state and optional retry.

## Build Order (Simple and Correct)

Build sequence to minimize rework:

1. Define the row contract and personal row constant.
2. Implement pure utilities: `nameParser` then `userMappers`.
3. Implement `usersApi.getUsers()` and verify endpoint shape.
4. Implement `useUsersTableData` with prepend logic.
5. Build static `UsersTable` and `UsersTableRow` from mocked rows.
6. Connect `UsersTablePage` to hook state (loading/error/success).
7. Mount page in `App` and remove starter counter/template code.
8. Add final CSS polish and accessibility checks (`th`, `scope`, captions if needed).
9. Manual verification against assignment acceptance columns/order.

Why this order works:

- Contract-first avoids mismatch between API and UI.
- Pure transform functions are testable before UI wiring.
- UI can be built with mock data before async complexity.
- Final integration becomes a thin wiring step.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Fetch inside table component

**What:** `UsersTable` performs network calls.
**Why bad:** Blurs view/data boundaries and complicates testing.
**Instead:** Fetch in `useUsersTableData`, pass rows as props.

### Anti-Pattern 2: Split logic duplicated in render loop

**What:** Name parsing inline during `rows.map(...)`.
**Why bad:** Recomputes per render and scatters rules.
**Instead:** Parse once in `userMappers`.

### Anti-Pattern 3: Personal row hardcoded in JSX

**What:** Table manually renders first row separately.
**Why bad:** Creates two rendering paths and drift risk.
**Instead:** Include personal row in normalized `rows` array.

## Scalability Considerations

| Concern          | At current assignment scope | If expanded later                                  |
| ---------------- | --------------------------- | -------------------------------------------------- |
| Data volume      | Single fetch is enough      | Add pagination and memoized row derivation         |
| Reuse            | One page feature            | Promote `users-table` into reusable feature module |
| API growth       | One endpoint                | Add service layer methods per endpoint             |
| State complexity | Local hook state            | Move to query library if multiple data sources     |

## Suggested Milestone Phase Mapping

- Phase A: Data contract + mappers + API client
- Phase B: Hook orchestration + state handling
- Phase C: Table UI + state screens + styling
- Phase D: Verification and submission readiness

This phase mapping aligns directly to dependency order and keeps each phase demonstrable.

## Confidence

- Overall: HIGH for this project scope.
- Reason: Architecture recommendation is constrained by explicit assignment requirements and the existing React/Vite baseline.
