# CONCERNS

## Summary

- Codebase is clean and small, but currently prototype-level.
- Main risks are scalability, missing tests, and security hygiene on external links.

## Technical Debt

- `src/App.jsx` is a monolithic component combining layout, content, and behavior.
- No separation between presentational and reusable components.
- Template README is outdated for actual project intent.

## Testing and Reliability Risks

- No automated tests; regressions would be caught manually only.
- CSS behavior across breakpoints and color-scheme variants is untested.
- No error boundary or fallback UI patterns established.

## Security and Safety Concerns

- External links use `target="_blank"` without `rel` attributes.
- No Content Security Policy configuration in `index.html`.
- No dependency audit workflow documented.

## Performance and UX Concerns

- No explicit performance budgets or bundle analysis.
- `hero.png` exists without documented optimization strategy.
- Heavy CSS effects and nested rules may become harder to maintain as UI grows.

## Maintainability Concerns

- Lack of feature folder strategy may lead to rapid structural drift.
- No shared utility layer for future API/data formatting work.
- No codeowners/contribution guidance for scaling team collaboration.

## Priority Recommendations

1. Add `rel="noopener noreferrer"` to outbound anchors opening new tabs.
2. Introduce basic test stack (Vitest + RTL) and first smoke tests.
3. Split `App.jsx` into section components and adopt a feature-oriented directory layout.
4. Update README to describe actual app goals and development workflow.
