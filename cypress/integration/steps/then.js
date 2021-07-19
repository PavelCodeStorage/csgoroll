import {Then} from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../pageobjects/home.page";

Cypress.on("uncaught:exception", () => {
  return false;
});

Then(/^The PROFIT ON WIN is equal to "([^"]*)"$/, (profitValue) => {
  HomePage.checkWinToProfit(profitValue);
});

Then(/^Spray ripple element is displayed"$/, () => {
  HomePage.checkSprayElement();
});
