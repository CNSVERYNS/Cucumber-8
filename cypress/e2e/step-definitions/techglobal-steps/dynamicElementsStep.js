const { Then } = require("@badeball/cypress-cucumber-preprocessor");
const TGDynamicTablesPage = require("../../../pages/TGDynamicTablesPage");


const tgDynamicTablesPage = new TGDynamicTablesPage()

Then(/^user should see Add New Product pop-up$/, () => {
	tgDynamicTablesPage.getModalCard().should('be.visible')
});


Then(/^user should not see Add New Product pop-up$/, () => {
	tgDynamicTablesPage.getModalCard().should('not.exist')
});