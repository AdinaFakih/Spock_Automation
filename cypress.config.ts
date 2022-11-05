import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  env: {
    // Environment variables 
  },
  e2e: {
    baseUrl: 'https://unipilot-dev.surge.sh/',
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
    chromeWebSecurity: true,
    //supportFile: "cypress/support/e2e.js"
  }
})

//test commit