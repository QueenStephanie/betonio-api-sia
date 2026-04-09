---
plan_id: 260409-ilg
mode: quick
objective: Set Kuwen's zipcode in the personal first-row seed data to 7200.
scope: Personal-row zipcode update only.
status: planned
---

## Objective

Update the personal seed row used by the users table so the first displayed row has zipcode `7200` for Kuwen.

Purpose: Apply the requested zipcode correction while preserving all existing fetch, merge, and rendering behavior.

## Tasks

### Task 1: Update personal row zipcode seed

- Files:
  - src/features/users-table/hooks/useUsersTableData.js
- Action:
  - In the `personalRow` seed object passed to `createPersonalRow`, set `zipcode` to `"7200"`.
  - Keep all other fields and logic unchanged.
- Verify (automated):
  - `grep -n "zipcode: \"7200\"" src/features/users-table/hooks/useUsersTableData.js`
- Done when:
  - The personal row seed includes `zipcode: "7200"`.

### Task 2: Run quick regression checks

- Files:
  - src/features/users-table/hooks/useUsersTableData.js
- Action:
  - Run lint and row-model tests to confirm no regressions from the seed data change.
- Verify (automated):
  - `npm run lint -- src/features/users-table/hooks/useUsersTableData.js`
  - `npm run test:rows`
- Done when:
  - Lint and row-model tests pass.

## Success Criteria

- The first personal row now shows zipcode `7200`.
- No behavior changes outside this seed value.
- Quick verification commands complete successfully.
