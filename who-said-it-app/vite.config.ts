/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // allows using describe/it/test without imports
        environment: 'jsdom',   // simulates browser environment for React components
        coverage: {
          reporter: ['text', 'json', 'html'], // coverage reports
        },
    },
})
