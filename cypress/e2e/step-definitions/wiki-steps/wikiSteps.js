const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const WikiPage = require("../../../pages/WikiPage");

const wikiPage = new WikiPage();




/* When(/^user search for "([^"]*)" on Wikipedia$/, (args1) => {
	wikiPage.getWikiSearchButton().type(`${args1}{enter}`)
}); */


Then(/^user should see "([^"]*)" in the first heading$/, (args1) => {
	wikiPage.getWikiHeading().should('have.text', args1)
});


Then(/^user should see below languages around the logo$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

    wikiPage.getLanguages().each(($el, index) => {
        cy.wrap($el.text().trim()).should('eq', arr[index])
    })

    arr.forEach((el) => {
        cy.log(el)
    })
});



