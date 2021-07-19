import {Given} from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", () => {
  return false;
});

Given(/^User on cs_go_roll application$/, () => {
  cy.visit("https://www.csgoroll.com/en/dice");
});
