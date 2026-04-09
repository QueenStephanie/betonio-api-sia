# CONVENTIONS

## JavaScript/React Style

- Uses ES module imports/exports consistently.
- Functional React component style is used (`function App() { ... }`).
- Hooks pattern follows React conventions (`useState`).

## Linting Rules

- ESLint flat config is authoritative (`eslint.config.js`).
- JS/JSX files matched by `**/*.{js,jsx}`.
- `no-unused-vars` is enforced with uppercase-prefix opt-out (`^[A-Z_]`).
- React hooks rules and React Refresh safety rules are enabled.

## Naming and File Patterns

- Component names use PascalCase (`App`).
- Variables/functions use camelCase (`setCount`, `heroImg`).
- IDs/classes in markup use kebab/lowercase patterns (`next-steps`, `button-icon`).

## CSS Conventions

- CSS custom properties define design tokens in `:root`.
- Nested rules are used heavily in `src/App.css`.
- Responsive behavior is handled with `@media (max-width: 1024px)` blocks.
- Theme adaptation uses `@media (prefers-color-scheme: dark)`.

## Accessibility Conventions (Current)

- Decorative icons are often marked with `aria-hidden="true"` and presentation roles.
- Alt text is provided selectively (some images intentionally empty for decoration).
- Focus styles are explicitly defined for interactive counter button.

## Error Handling and Resilience

- No async/network logic yet, so no error-handling conventions for API failures.
- No runtime validation utilities or error boundaries currently present.

## Documentation/Process Conventions

- Repository still contains template `README.md`.
- No explicit contribution guide, architecture decision records, or coding standards docs yet.
