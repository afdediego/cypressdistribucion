const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://pre-logistics.recordgo.cloud/login',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    reporter: 'json',
    reporterOptions: {
      outputFile: 'cypress/results/results.json'
    },
    experimentalRunAllSpecs: true,
    testIsolation: false,
    env: {
      NODE_TLS_REJECT_UNAUTHORIZED: '0'
    },
    retries: {
      runMode: 2,
      openMode: 0
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    numTestsKeptInMemory: 0,
    watchForFileChanges: false,
    experimentalMemoryManagement: true,
    blockHosts: ['*google-analytics.com', '*hotjar.com', '*doubleclick.net'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "cypressdistribucion",
});