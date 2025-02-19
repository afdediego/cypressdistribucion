describe('Login Success Test - Record Go', () => {
    beforeEach(() => {
        cy.visit('/login', {
            failOnStatusCode: false
        });
    });

    it('Should login successfully with valid credentials', function() {
        cy.get('#countryId', { timeout: 10000 })
        .should('exist')
        .should('be.visible')
        .select('IC');

        cy.get('#username')
        .should('be.visible')
        .type('antonio.diego');

        cy.get('#password')
        .should('be.visible')
        .type('diego1313');

        cy.get('button[type="submit"]')
        .should('be.visible')
        .click();

        cy.url()
        .should('not.include', '/login');
    });
}); 