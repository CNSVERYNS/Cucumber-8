const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When(/^user search for "([^"]*)"$/, (searchTerm) => {
  cy.get('[name="q"]').type(`${searchTerm}{enter}`);
});
