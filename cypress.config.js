const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://pre-logistics.recordgo.cloud',
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'json',
    reporterOptions: {
      outputFile: 'cypress/results.json'
    },
    experimentalRunAllSpecs: true,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "cypressdistribucion",
  retries: {
    runMode: 1,
    openMode: 0
  }
});