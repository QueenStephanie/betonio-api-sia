# Betonio API Demo

This project demonstrates API consumption and data merging using React + Vite.

## What It Shows

- Fetch users from JSONPlaceholder
- Normalize `name` into first and last name fields
- Merge a personal row as the first row
- Render a unified users table with search/filter
- Preserve behavior across softened UI theme updates

## Run Locally

```bash
npm install
npm run dev
```

## Quality Gates

```bash
npm run test:rows
npm run test:phase2-api
npm run test:phase3-filter
npm run lint
npm run build
```

## Publish to GitHub Pages

This repository is configured to deploy automatically with GitHub Actions.

1. Push to `main`.
2. In GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Wait for the **Deploy React app to GitHub Pages** workflow to finish.

Published site URL format:

`https://<github-username>.github.io/<repository-name>/`

## Submission Repository URL

Canonical repository URL:

https://github.com/MikeSordilla-lab/betonio-api-demo
