import {And} from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../pageobjects/home.page";

Cypress.on("uncaught:exception", () => {
  return false;
});

And(/^User clear fields$/, () => {
  HomePage.clickClearButton();
});

And(/^BetAmount error is displayed$/, () => {
  HomePage.checkBetAmountError();
});

And(/^Spray ripple element is displayed$/, () => {
  HomePage.checkSprayElement();
});
