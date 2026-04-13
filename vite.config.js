import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repoName = globalThis.process?.env?.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  base: globalThis.process?.env?.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/',
})
