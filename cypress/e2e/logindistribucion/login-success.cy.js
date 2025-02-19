describe('Login Success Test - Record Go', () => {
    beforeEach(() => {
        cy.visitWithRetry('/', {
            timeout: 30000
        });
    });

    it('Should login successfully with valid credentials', function() {
        cy.get('#countryId', { timeout: 10000 })
        .should('exist')
        .should('be.visible')
        .select('IC');

        cy.get('#username', { timeout: 10000 })
        .should('be.visible')
        .type('antonio.diego');

        cy.get('#password', { timeout: 10000 })
        .should('be.visible')
        .type('diego1313');

        cy.get('button[type="submit"]', { timeout: 10000 })
        .should('be.visible')
        .click();

        cy.url({ timeout: 30000 })
        .should('not.include', '/login');
    });
}); 