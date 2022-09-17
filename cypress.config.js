const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://buger-eats-qa.vercel.app",
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});

