# STACK

## Languages and Runtime

- JavaScript (ES Modules) across app and build tooling.
- Runtime target is browser; tooling runtime is Node.js via Vite CLI.
- JSX is used in React components.

## Frontend Framework

- React 19 via `react` and `react-dom`.
- App bootstraps from `src/main.jsx` with `createRoot` and `StrictMode`.
- Primary UI entry component is `src/App.jsx`.

## Build and Dev Tooling

- Vite 8 as dev server and production bundler.
- React integration through `@vitejs/plugin-react` configured in `vite.config.js`.
- Scripts in `package.json`:
  - `dev` -> `vite`
  - `build` -> `vite build`
  - `preview` -> `vite preview`
  - `lint` -> `eslint .`

## Linting and Code Quality Tooling

- ESLint 9 flat config in `eslint.config.js`.
- Uses `@eslint/js` recommended base.
- Uses `eslint-plugin-react-hooks` recommended rules.
- Uses `eslint-plugin-react-refresh` Vite rules.
- Browser globals provided by `globals` package.

## Styling Stack

- Plain CSS files: `src/index.css` and `src/App.css`.
- Modern nested CSS syntax appears in `src/App.css`.
- CSS custom properties define theme tokens in `src/index.css`.
- Supports both light and dark color schemes.

## Assets and Static Files

- App assets in `src/assets/` (`hero.png`, `react.svg`, `vite.svg`).
- Public static assets in `public/` (`favicon.svg`, `icons.svg`).
- SVG sprite icons referenced through `/icons.svg#symbol-id`.

## Notes

- Repository is a Vite React starter evolved with custom UI styling.
- No backend service or server framework is present in this codebase.
