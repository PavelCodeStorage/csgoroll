import {When} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageobjects/home.page";

import * as fieldsConstants from "../../constants/FieldsCredentials.constant";

Cypress.on("uncaught:exception", () => {
  return false;
});

When(/^User select following option for game$/, (generalNotificationValue) => {
  const data = generalNotificationValue.hashes();
  data.map((key) =>
    HomePage.selectGameOptions(
      key[fieldsConstants.betAmount],
      key[fieldsConstants.betRate],
      key[fieldsConstants.time],
      key[fieldsConstants.multiplayer],
      key[fieldsConstants.winChange],
    ),
  );
});

When(/^User click spray ripple element$/, () => {
  HomePage.clickSprayElement();
});
