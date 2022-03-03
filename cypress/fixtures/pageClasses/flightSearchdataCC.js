
import flightSearch from "./flightSearchPO";

export function directFlight(){
cy.get(flightSearch.direct).click({ force: true });
}
export function showAll(){
cy.get(flightSearch.show).contains('Show all').click();
}

export function flightSaudia(){
cy.get(flightSearch.flight).click({ force: true });
}
export function bookFlight(){
cy.get(flightSearch.select).first().click({ force: true });
}


