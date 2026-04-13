import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repository = globalThis.process?.env?.GITHUB_REPOSITORY
const repositoryName = repository?.match(/^[^/]+\/([^/]+)$/)?.[1] ?? null
const isGitHubActions = globalThis.process?.env?.GITHUB_ACTIONS === 'true'
const basePath = isGitHubActions
  ? repositoryName
    ? `/${repositoryName}/`
    : (() => {
        throw new Error('GITHUB_REPOSITORY must match "owner/repository" in GitHub Actions builds.')
      })()
  : '/'

export default defineConfig({
  plugins: [react()],
  base: basePath,
})
