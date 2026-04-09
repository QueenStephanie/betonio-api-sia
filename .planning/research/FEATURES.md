# Feature Landscape

**Domain:** Activity-style educational web app (API + personal data table)
**Researched:** 2026-04-08
**Scope confidence:** HIGH (derived from project requirements and assignment constraints)

## Table Stakes

Features users/instructors expect for this activity. Missing these means the submission is likely incomplete.

| Feature                                                                                           | Why Expected                                                | Complexity | Dependencies                                      | Notes                                               |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------- | ------------------------------------------------- | --------------------------------------------------- |
| Fetch users from JSONPlaceholder (`/users`)                                                       | Core learning objective is API consumption                  | Low        | Browser `fetch`, endpoint availability            | Must use required endpoint from assignment          |
| Display unified table with required columns (ID, First Name, Last Name, Username, Email, Zipcode) | Explicit grading requirement                                | Low        | Normalized row model, table rendering in React    | Column names and order should match instructions    |
| Personal row appears first                                                                        | Explicit assignment rule about ordering                     | Low        | Personal row data object, merge logic             | Personal row should stay first even after API load  |
| Parse API `name` into first/last name fields                                                      | API returns full name while output requires split names     | Medium     | Name parsing utility, fallback handling           | Handle single-word or multi-part names gracefully   |
| Stable loading + error state for fetch                                                            | Minimum UX reliability for classroom/demo use               | Low        | Async state management (`loading`, `error`)       | Prevent blank screen during network delays/failures |
| Data sanitation for required fields                                                               | Avoid broken table cells from missing nested API properties | Low        | Safe access for `address.zipcode`, default values | Keep rows renderable even with partial data         |

## Differentiators

Features that improve clarity, grading confidence, and demo quality beyond strict minimum.

| Feature                                                       | Value Proposition                                                     | Complexity | Dependencies                                         | Notes                                                         |
| ------------------------------------------------------------- | --------------------------------------------------------------------- | ---------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| Source badge per row (`Personal` vs `API`)                    | Makes merge logic visibly obvious to reviewer                         | Low        | Extra derived column or cell tag                     | Strong evidence that student understands data provenance      |
| Manual refresh button                                         | Demonstrates repeatable API interaction without reload                | Low        | Refetch function, transient loading state            | Useful for presentation and retry after failure               |
| Inline data quality indicators (missing email/zipcode marker) | Shows defensive UI thinking with external data                        | Medium     | Field validation helpers, conditional cell rendering | Keep indicator subtle so table remains readable               |
| Lightweight client-side search over username/email            | Improves usability for larger datasets and shows data handling skills | Medium     | Controlled input state, memoized filter              | Keep scoped to avoid drifting into advanced table feature set |
| Deterministic demo seed for personal row config               | Makes grading reproducible across environments                        | Low        | Local config object/constants                        | Reduces accidental edits in component body                    |

## Anti-Features

Features to avoid for this milestone because they add complexity without helping the learning goal.

| Anti-Feature                                                  | Why Avoid                                                        | What to Do Instead                            |
| ------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------- |
| Full CRUD (create/edit/delete users)                          | Not in scope; shifts focus from fetch+merge objective            | Keep dataset read-only and focused on display |
| Authentication/accounts                                       | Unrelated to assignment and introduces backend/security overhead | Use static personal row data in frontend      |
| Server/database persistence                                   | Violates no-backend constraint for this activity                 | Perform all transforms client-side            |
| Heavy data-grid framework integration                         | Overkill for small dataset; hides core learning mechanics        | Use simple semantic HTML table in React       |
| Advanced table suite (pagination, multi-sort, column pinning) | Explicitly out of scope and can consume milestone time           | Keep straightforward single-view table        |

## Feature Dependencies

```text
Fetch API users
  -> Normalize API rows (safe zipcode + split names)
    -> Merge personal row at index 0
      -> Render required table columns

Loading/error state
  -> Reliable UX during fetch/refresh

(Optional) Search/filter
  -> Requires normalized in-memory row list

(Optional) Source badges/quality indicators
  -> Requires merged row model with metadata
```

## MVP Recommendation

Prioritize:

1. Fetch users from required endpoint
2. Normalize data to required columns (including first/last parsing and zipcode extraction)
3. Inject personal row first and render one clean table
4. Add minimal loading/error handling

Defer:

- Search/filter and row metadata badges unless core requirements are fully complete and validated.

## Sources

- Project constraints and active requirements: `.planning/PROJECT.md`
- Endpoint specification for sample data shape: https://jsonplaceholder.typicode.com/users
