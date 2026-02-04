import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js'
    ,
    reporters: [
      'default',
      ['vitest-html-reporter', { outputFile: 'reports/vitest-report.html', open: false }]
    ]
  }
})
