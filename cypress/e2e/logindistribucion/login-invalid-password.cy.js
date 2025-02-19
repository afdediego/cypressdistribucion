describe('Login Invalid Password Test - Record Go', () => {
    beforeEach(() => {
        cy.visitWithRetry('/', {
            timeout: 30000
        });
    });

    it('Should fail login with invalid password', function() {
        cy.get('#countryId', { timeout: 10000 })
        .should('exist')
        .should('be.visible')
        .select('IC');

        cy.get('#username', { timeout: 10000 })
        .should('be.visible')
        .type('antonio.diego');

        cy.get('#password', { timeout: 10000 })
        .should('be.visible')
        .type('password123incorrect');

        cy.get('button[type="submit"]', { timeout: 10000 })
        .should('be.visible')
        .click();

        cy.contains('div', 'Incorrect username or password', { timeout: 10000 });
        
        cy.url({ timeout: 10000 })
        .should('include', '/login');
    });
}); 