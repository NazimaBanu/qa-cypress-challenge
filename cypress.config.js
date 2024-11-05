const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
 // env: {
    
 // },
  e2e: {
    setupNodeEvents(on, config) { 
    },
    specPattern: 'cypress/integration/examples/*.js',
    baseUrl : 'http://localhost:3000',
    
    
  },
});
