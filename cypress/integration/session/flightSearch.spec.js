
import * as flightSearchdataCC from "../../fixtures/pageClasses/flightSearchdataCC";


describe('Sample flight Search', function () {
        it('Flight Search Page Test', function () {
 cy.visit('https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult');
        });
 
 it('selct direct flight ',function (){
 flightSearchdataCC.directFlight();
 });
 it('Show all flight',function (){
     flightSearchdataCC.showAll();
 });a
 it('select Saudia',function(){
     flightSearchdataCC.flightSaudia();
 });
 it('book flight',function (){
     flightSearchdataCC.bookFlight();

});
});


 //cy.get(':nth-child(2) > .sc-dYcyhn > :nth-child(1) > :nth-child(2) > .form-check-label').click();
 //cy.get('.sc-MKjYC').click();
 //cy.get(':nth-child(12) > .form-check-label').click();
 //cy.get('[data-testid="Group0__SelectFlightButton"]').click({force:true});