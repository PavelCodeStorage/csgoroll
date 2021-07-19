class HomePage {
  static betAmountField = `#mat-input-4`;

  static betRateValue = `button[class='mat-focus-indicator mat-flat-button mat-button-base mat-dark ng-star-inserted']>span`;

  static timeField = `input[id='mat-input-0']`;

  static multiplayerMode = `input[id='mat-input-1']`;

  static winChangeField = `input[id='mat-input-2']`;

  static profitValue = `div[class='profit-box text-success'] span[class='currency-value ng-star-inserted']`;

  static clearButton = `button[class='mat-focus-indicator mat-button mat-button-base mat-dark ng-star-inserted']>span:nth-of-type(1)`;

  static betAmountError = `mat-error[aria-live="polite"]>cw-form-errors>div:nth-of-type(1)`;

  static sprayElement = `section[fxlayoutalign="center center"]>button:nth-of-type(1) cw-toggle-switch[class='ml-2 animated']`;

  static rollElement = `input[id="mat-input-3"]`;

  // static async clickNotificationIcon() {
  //   return cy.get(HomePage.bellIcon, {timeout: 10000}).first().click();
  // }
  //
  // static navigateProfileSettings() {
  //   cy.get(HomePage.profileIcon, {timeout: 10000}).first().click();
  //   cy.get(HomePage.ProfileAndPreferencesLink, {timeout: 10000}).first().click();
  //   cy.get(HomePage.ProfileLink, {timeout: 10000}).first().click();
  //   return this;
  // }
  //
  // static navigateNotificationSettings() {
  //   cy.get(HomePage.profileIcon, {timeout: 10000}).first().click();
  //   cy.get(HomePage.ProfileAndPreferencesLink, {timeout: 10000}).first().click();
  //   cy.get(HomePage.NotificationLink, {timeout: 10000}).first().click();
  //   return this;
  // }

  static selectGameOptions(betAmount, betRate, time, multiplayerMode, WinChange) {
    cy.get(HomePage.betAmountField).clear({force: true}).type(betAmount, {force: true});
    cy.get(HomePage.betRateValue).contains(betRate).click({force: true});
    cy.get(HomePage.timeField).clear({force: true}).type(time, {force: true});
    cy.get(HomePage.multiplayerMode).clear({force: true}).type(multiplayerMode, {force: true});
    cy.get(HomePage.winChangeField).clear({force: true}).type(WinChange, {force: true});
    return this;
  }

  static clickSprayElement() {
    return cy.get(HomePage.sprayElement).click({force: true});
  }

  static checkWinToProfit(value) {
    return cy.get(HomePage.profitValue, {timeout: 10000}).contains(value);
  }

  static clickClearButton() {
    return cy.get(HomePage.clearButton, {timeout: 10000}).click({force: true});
  }

  static checkBetAmountError() {
    return cy.get(HomePage.betAmountError, {timeout: 10000}).should("be.visible");
  }

  static checkSprayElement() {
    return cy.get(HomePage.rollElement, {timeout: 10000}).should("be.visible");
  }

}
export default HomePage;
