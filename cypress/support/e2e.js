// Import commands.js using ES2015 syntax:
import './commands'

// Ignorar errores específicos
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Ignorar todos los errores no capturados
});

// Configuración global
Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('pageLoadTimeout', 30000);
Cypress.config('responseTimeout', 30000);
Cypress.config('requestTimeout', 30000);

// Configuración de red
Cypress.config('retries', {
  runMode: 2,
  openMode: 0
});

// Antes de cada test
beforeEach(() => {
  // Limpiar cookies y localStorage
  cy.clearCookies();
  cy.clearLocalStorage();
  
  // Visitar la página de login con retry
  cy.visitWithRetry('/');
}); 