# Exploring APIs Using Fake Data

## What This Is

This is a React.js web activity project for students to practice fetching and combining API data with personal data. The app will display a table where the student's personal row appears first, followed by users from JSONPlaceholder. Final deliverable includes a published GitHub link submitted in a Word document.

## Core Value

Student can clearly demonstrate API fetch + data merge skill by showing personal row first and API rows after in one table.

## Requirements

### Validated

- ✓ React + Vite app boots and renders in browser — existing codebase
- ✓ Static UI structure and styling pipeline are working — existing codebase
- ✓ ESLint workflow exists for JS/JSX quality checks — existing codebase

### Active

- [ ] Fetch user records from `https://jsonplaceholder.typicode.com/users`
- [ ] Display data in a table with columns: ID, First Name, Last Name, Username, Email, Zipcode
- [ ] Insert personal information row at top of table before API rows
- [ ] Parse API name into First Name and Last Name fields for display consistency
- [ ] Publish completed project to GitHub and capture repository link for submission

### Out of Scope

- User authentication or account system — not required for activity goals
- Backend/server database integration — activity is frontend API practice
- Advanced table features (sorting, pagination, filtering) — not required by instructions

## Context

Project starts from an existing brownfield React + Vite starter codebase already mapped in `.planning/codebase/`. Current app is template UI with local state counter and no API integration yet. The activity requires converting this into a learning-focused API table exercise using JSONPlaceholder users endpoint.

## Constraints

- **Tech stack**: React.js frontend in existing Vite project — keep implementation inside current stack
- **API source**: Must use `https://jsonplaceholder.typicode.com/users` — required by assignment brief
- **Data shape**: Must display exact columns (ID, First Name, Last Name, Username, Email, Zipcode) — required for grading
- **Ordering**: Personal information must appear first in table — explicit assignment requirement
- **Delivery**: Must publish to GitHub and submit link in Word document — explicit assignment process

## Key Decisions

| Decision                                        | Rationale                                                  | Outcome   |
| ----------------------------------------------- | ---------------------------------------------------------- | --------- |
| Build inside existing React + Vite repo         | Starter app already exists and reduces setup overhead      | — Pending |
| Use single table view for personal + API data   | Assignment explicitly asks to combine and display together | — Pending |
| Parse `name` into first/last fields client-side | API returns full name; assignment needs split fields       | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):

1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):

1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---

_Last updated: 2026-04-08 after initialization_
