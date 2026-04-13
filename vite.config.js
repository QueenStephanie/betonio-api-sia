import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repository = globalThis.process?.env?.GITHUB_REPOSITORY
const [repoOwner, repo] = repository ? repository.split('/', 2) : []
const repoName = repoOwner && repo ? repo : null
const isGitHubActions = globalThis.process?.env?.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubActions && repoName ? `/${repoName}/` : '/',
})
