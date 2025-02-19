describe('Login Invalid Username Test - Record Go', () => {
    beforeEach(() => {
        cy.visit('/login', {
            failOnStatusCode: false
        });
    });

    it('Should fail login with invalid username', function() {
        cy.get('#countryId', { timeout: 10000 })
        .should('exist')
        .should('be.visible')
        .select('IC');

        cy.get('#username')
        .should('be.visible')
        .type('usuario.incorrecto');

        cy.get('#password')
        .should('be.visible')
        .type('diego1313');

        cy.get('button[type="submit"]')
        .should('be.visible')
        .click();

        cy.contains('div', 'Incorrect username or password');
        
        cy.url()
        .should('include', '/login');
    });
}); 