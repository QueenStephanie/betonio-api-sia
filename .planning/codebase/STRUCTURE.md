# STRUCTURE

## Root Layout

- `index.html`: Vite HTML template containing `#root` mount node.
- `package.json`: scripts and dependency manifest.
- `vite.config.js`: Vite configuration.
- `eslint.config.js`: flat ESLint configuration.
- `README.md`: template documentation from Vite.

## Public Directory

- `public/favicon.svg`: browser tab icon.
- `public/icons.svg`: reusable SVG symbol definitions used in UI.

## Source Directory

- `src/main.jsx`: React bootstrap/mount entry.
- `src/App.jsx`: single app component with all current markup.
- `src/index.css`: global CSS variables, typography, and root layout.
- `src/App.css`: component/section styles for main UI.
- `src/assets/hero.png`: hero image.
- `src/assets/react.svg`: React logo asset.
- `src/assets/vite.svg`: Vite logo asset.

## Naming Conventions Observed

- React component filename uses PascalCase (`App.jsx`).
- Entry/bootstrap files use lowercase (`main.jsx`).
- CSS files mirror component/global scope (`App.css`, `index.css`).
- Asset names are lowercase and descriptive.

## Generated/Dependency Artifacts

- `node_modules/` exists locally and is git-ignored.
- `dist/` is configured to be ignored in `.gitignore`.
- `package-lock.json` is committed and tracks exact npm dependency tree.

## Scaling Notes

- Structure is currently flat and starter-friendly.
- As features grow, consider adding folders like `src/components`, `src/features`, `src/lib`, `src/api`, and `src/hooks`.
