# Requirements: Exploring APIs Using Fake Data

**Defined:** 2026-04-08
**Core Value:** Student can clearly demonstrate API fetch + data merge skill by showing personal row first and API rows after in one table.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Data Integration

- [ ] **DATA-01**: User can fetch user records from `https://jsonplaceholder.typicode.com/users`
- [ ] **DATA-02**: User can view a unified table with columns: ID, First Name, Last Name, Username, Email, Zipcode
- [ ] **DATA-03**: User sees personal information row as first row before API rows
- [ ] **DATA-04**: User sees API full `name` transformed into First Name and Last Name fields
- [ ] **DATA-05**: User sees loading state while API request is in progress
- [ ] **DATA-06**: User sees error state when API request fails

### UX Enhancements

- [ ] **UX-01**: User can identify row source (Personal or API)
- [ ] **UX-02**: User can manually refresh/reload user data
- [ ] **UX-03**: User can search/filter rows by username or email
- [ ] **UX-04**: User can see indicator when key data fields are missing

### Delivery

- [ ] **DLV-01**: Student can publish project to GitHub and retrieve repository link
- [ ] **DLV-02**: Student can submit repository link in required Word document workflow

### UI Theme Refresh

- [x] **UI-01**: User sees a softened, light-first visual tone across page shell, controls, and table surfaces
- [x] **UI-02**: User sees consistent semantic color tokens used across global, app, and table styles
- [x] **UI-03**: User can read body text and state indicators with accessible contrast in default and dark-preference modes
- [x] **UI-04**: User can still perceive distinct hover/focus/interaction states after visual softening
- [x] **UI-05**: Theme remains coherent in default and dark-preference rendering
- [x] **UI-06**: Functional table behavior remains unchanged after all Phase 5 styling updates

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Data/Grid Expansion

- **GRID-01**: User can sort table by any column
- **GRID-02**: User can paginate large datasets
- **GRID-03**: User can apply multi-criteria filters

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature                          | Reason                                                           |
| -------------------------------- | ---------------------------------------------------------------- |
| Authentication and user accounts | Not part of assignment objective                                 |
| Backend persistence/database     | Assignment focuses on frontend API consumption                   |
| CRUD editing of API users        | Endpoint is used as read-only fake data source for this activity |
| Enterprise data-grid framework   | Adds complexity beyond classroom scope                           |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase   | Status    |
| ----------- | ------- | --------- |
| DATA-01     | Phase 2 | Pending   |
| DATA-02     | Phase 3 | Pending   |
| DATA-03     | Phase 1 | Pending   |
| DATA-04     | Phase 1 | Pending   |
| DATA-05     | Phase 2 | Pending   |
| DATA-06     | Phase 2 | Pending   |
| UX-01       | Phase 1 | Pending   |
| UX-02       | Phase 2 | Pending   |
| UX-03       | Phase 3 | Pending   |
| UX-04       | Phase 1 | Pending   |
| DLV-01      | Phase 4 | Pending   |
| DLV-02      | Phase 4 | Pending   |
| UI-01       | Phase 5 | Completed |
| UI-02       | Phase 5 | Completed |
| UI-03       | Phase 5 | Complete  |
| UI-04       | Phase 5 | Complete  |
| UI-05       | Phase 5 | Completed |
| UI-06       | Phase 5 | Complete  |

**Coverage:**

- v1 requirements: 12 total
- Mapped to phases: 12
- Unmapped: 0 ✓

---

_Requirements defined: 2026-04-08_
_Last updated: 2026-04-08 after roadmap traceability mapping_
