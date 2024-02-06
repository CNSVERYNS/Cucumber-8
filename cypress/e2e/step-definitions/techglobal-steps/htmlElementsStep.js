const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const TGHtmlElementsPage = require("../../../pages/TGHtmlElementsPage");

const tgHtmlElementsPage = new TGHtmlElementsPage()


Then(/^the URL should contain "([^"]*)"$/, (url) => {
	cy.url().should('include', url)
});

Then('the text under it should be {string}', (message) => {
	tgHtmlElementsPage.getButtonMessage().should('have.text', message)
});

When(/^user selects "([^"]*)" from the first dropdown menu$/, (option) => {
    tgHtmlElementsPage.getFirstDropdown().select(option)
});

When(/^user selects "([^"]*)" from the second dropdown menu$/, (option) => {
    tgHtmlElementsPage.getSecondDropdown().select(option)
});

Then(/^"([^"]*)" should be the selected option in the first dropdown$/, (value) => {
    tgHtmlElementsPage.getFirstDropdown().should('have.value', value)
});

Then(/^"([^"]*)" should be the selected option in the second dropdown$/, (value) => {
    tgHtmlElementsPage.getSecondDropdown().should('have.value', value)
});

When(/^user enters "([^"]*)" into the first text input field$/, (input) => {
	tgHtmlElementsPage.getTextInputOne().type(input)
})

When(/^user enters "([^"]*)" into the second text input field$/, (input) => {
	tgHtmlElementsPage.getTextInputTwo().type(input)
})

Then(/^the first text input field should contain "([^"]*)"$/, (value) => {
	tgHtmlElementsPage.getTextInputOne().should('have.value', value)
})

Then(/^the second text input field should contain "([^"]*)"$/, (value) => {
	tgHtmlElementsPage.getTextInputTwo().should('not.have.value', value)
})

When(/^user selects the "([^"]*)" checkbox$/, (label) => {
	tgHtmlElementsPage.getCheckboxByLabel(label).check()
});


Then(/^user deselects the "([^"]*)" checkbox$/, (label) => {
	tgHtmlElementsPage.getCheckboxByLabel(label).uncheck()
});


Then(/^the "([^"]*)" checkbox should not be checked$/, (label) => {
	tgHtmlElementsPage.getCheckboxByLabel(label).should('not.be.checked')
});


When(/^user selects the "([^"]*)" and "([^"]*)" checkboxes$/, (label1, label2) => {
	tgHtmlElementsPage.getCheckboxByLabel(label1).check()
	tgHtmlElementsPage.getCheckboxByLabel(label2).check()
});


Then(/^both "([^"]*)" and "([^"]*)" checkboxes should be checked$/, (label1, label2) => {
	tgHtmlElementsPage.getCheckboxByLabel(label1).should('not.be.checked')
	tgHtmlElementsPage.getCheckboxByLabel(label2).should('be.checked')
});



Then(/^the "([^"]*)" checkbox remains unchecked$/, (label) => {
	tgHtmlElementsPage.getCheckboxByLabel(label).should('not.be.checked')
});





