describe('Login Success Test - Record Go', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.wait(2000);
    });

    it('Should login successfully with valid credentials', () => {
        cy.get('#countryId')
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