const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
const TGHtmlElementsPage = require("../../pages/TGHtmlElementsPage");
const TGDynamicTablesPage = require("../../pages/TGDynamicTablesPage");
const WikiPage = require("../../pages/WikiPage");

const tgHtmlElementsPage = new TGHtmlElementsPage();
const tgDynamicTablesPage = new TGDynamicTablesPage();
const wikiPage = new WikiPage();

Given("user navigates to {string}", (url) => {
  cy.visit(url);
});

When(/^user clicks on the "([^"]*)" card$/, (cardName) => {
  cy.contains(cardName).click();
});

Then(/^user should see the "([^"]*)" page heading$/, (heading) => {
  tgHtmlElementsPage.getHeading().should("have.text", heading);
});

When(/^user clicks on the "([^"]*)" button$/, (button) => {
  switch (button) {
    case "Register":
    case "Sign in": {
      tgHtmlElementsPage.clickButtonByText(button);
      break;
    }

    case "ADD PRODUCT":
      tgDynamicTablesPage.clickAddProductButton();
      break;

    case "CLOSE":
      cy.wait(1000);
      tgDynamicTablesPage.clickCloseProductButton();
      break;

    default:
      throw new Error(`Case not found ${button}`);
  }
});

Then(/^user should see "([^"]*)" in the URL$/, (url) => {
  //   const replace = url.replaceAll(" ", "_");

  let name = "Barrack Obama"
  let arrName = name.split(' ')
  // ["Barrack", "Obama"]

  for (const u of url.split(" ")) {
    cy.url().should("include", u);
  }
});

Then(/^user should see "([^"]*)" in the title$/, (title) => {
  cy.title().should("include", title);
});


Given("the user is on {string}", (url) => {
  cy.visit(url);
});


When(/^the user clicks on the “ADD PRODUCT” button$/, () => {
	cy.get('#add_product_btn').click()
});






