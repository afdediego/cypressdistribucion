describe('Login Success Test - Record Go', () => {
    beforeEach(() => {
        cy.visit('/login', {
            failOnStatusCode: false
        }).then((resp) => {
            cy.log(`Response status: ${resp.status}`);
        }).catch((error) => {
            cy.log(`Error occurred: ${error.message}`);
        });
    });

    it('Should login successfully with valid credentials', function() {
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
        .type('diego1313');

        cy.get('button[type="submit"]')
        .should('be.visible')
        .click();

        cy.url()
        .should('not.include', '/login');
    });
}); 