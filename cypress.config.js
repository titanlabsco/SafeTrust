import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // supportFile: 'cypress/support/e2e.ts'
    supportFile: false
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
});