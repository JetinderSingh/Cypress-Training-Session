describe('Session Example', function () {
    it('Test Email Field', function () {
        cy.visit(' https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html');
        cy.get('[name=email]').type('email@seera.com'); 
    });
});