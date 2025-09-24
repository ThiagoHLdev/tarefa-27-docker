
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {
      // Configurações adicionais aqui se necessário
    },
  },
});
