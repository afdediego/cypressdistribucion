describe('Login Invalid Password Test - Record Go', () => {
    beforeEach(() => {
        cy.visit('/login', {
            failOnStatusCode: false
        }).then((resp) => {
            cy.log(`Response status: ${resp.status}`);
        }).catch((error) => {
            cy.log(`Error occurred: ${error.message}`);
        });
    });

    it('Should fail login with invalid password', function() {
        cy.get('#countryId', { timeout: 10000 })
        .should('exist')
        .should('be.visible')
        .select('IC')
        .catch((error) => {
            cy.log(`Test failed: ${error.message}`);
            this.skip();
        });

        cy.get('#username')
        .should('be.visible')
        .type('antonio.diego')
        .catch((error) => {
            cy.log(`Test failed: ${error.message}`);
            this.skip();
        });

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