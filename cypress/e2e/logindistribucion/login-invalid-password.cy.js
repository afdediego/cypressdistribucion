describe('Login Invalid Password Test - Record Go', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.wait(2000);
    });

    it('Should fail login with invalid password', () => {
        cy.get('#countryId')
        .should('exist')
        .should('be.visible')
        .select('IC');

        cy.get('#username')
        .should('be.visible')
        .type('antonio.diego');

        cy.get('#password')
        .should('be.visible')
        .type('password123incorrect');

        cy.get('button[type="submit"]')
        .should('be.visible')
        .click();

        cy.contains('div', 'Incorrect username or password');
        
        cy.url()
        .should('include', '/login');
    });
}); 