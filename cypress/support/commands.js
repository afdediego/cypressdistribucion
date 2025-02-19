// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getInputByLabel', (label) => {
    cy.contains('label', label)
        .invoke('attr', 'for')
        .then((id) => {
            if (id) {
                cy.get(`#${id}`);
            } else {
                cy.contains('label', label)
                    .parent()
                    .find('input');
            }
        });
});

// Comando personalizado para manejar timeouts y reintentos
Cypress.Commands.add('visitWithRetry', (url, options = {}) => {
    const defaultOptions = {
        timeout: 120000,
        retryOnStatusCodeFailure: true,
        failOnStatusCode: true
    };
    
    return cy.visit(url, { ...defaultOptions, ...options })
        .then(() => {
            return new Cypress.Promise((resolve) => {
                setTimeout(resolve, 1000); // Pequeña pausa para estabilidad
            });
        });
}); 