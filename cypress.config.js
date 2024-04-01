const { defineConfig } = require("cypress");
const cypressMochawesomeReporter = require('cypress-mochawesome-reporter/plugin');
module.exports = defineConfig({
 
   e2e: {
    setupNodeEvents(on, config) {
    
      cypressMochawesomeReporter(on, config);
      return config;
    },
  },
});
