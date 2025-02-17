describe('Login Invalid Username Test - Record Go', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.wait(2000);
    });

    it('Should fail login with invalid username', () => {
        cy.get('#countryId')
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