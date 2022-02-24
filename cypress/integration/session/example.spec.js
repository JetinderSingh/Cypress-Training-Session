describe('Session Example', function () {
    it('Test Email Field', function () {
        cy.visit(' https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html');
        cy.get('form > :nth-child(2) > input').type('Jetinder');
        cy.get('[name="street"]').type('Dubai');
        cy.get('select').select('USA').should('have.value', '5');
        cy.get('.city-item > input').type('12345678');
        cy.get('[name=email]').type('email@seera.com'); 
        //cy.get('[for="radio_1"]').check('Yes');
        //cy.get(':nth-child(1) > .check').check('Prpoposal');
        //cy.get(':nth-child(2) > .check').check('Abstract');
        cy.get('button').click();
    });
});