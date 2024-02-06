const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const TGDynamicTables = require("../../../pages/TGDynamicTables");
const { DataTable } = require("@cucumber/cucumber");
const tgDynamicTables = new TGDynamicTables()

Then(/^the user should see the “Inventory” heading$/, () => {
	tgDynamicTables.getHeading().should('have.text', 'Inventory')
});

Then(/^the user should see the table with the headers below$/, (inventoryTable) => {
	const arr = inventoryTable.rawTable[0]

    tgDynamicTables.getInventoryItems().each(($el, index) => {
        cy.wrap($el.text().trim()).should('eq', arr[index])
    })
});

Then(/^the user should see the table with the rows below$/, (inventoryValues) => {
	const arr = inventoryValues.rawTable.flat()

    tgDynamicTables.getInventoryValues().each(($el, index) => {
        cy.wrap($el.text().trim()).should('eq', arr[index])
    })
});

Then(/^the user should see the “ADD PRODUCT” button is enabled$/, () => {
	tgDynamicTables.getAddproductbtn().should('be.enabled')
});

Then(/^the user should see the “Total = \$2,300” text displayed$/, () => {
	tgDynamicTables.getTotalAmount().should('have.text', 'Total = $2,300')
});

Then(/^the user should see the “Add New Product” modal with its heading$/, () => {
	tgDynamicTables.getAddProductButtonHeading().should('have.text', 'Add New Product')
});

Then(/^the user should see the “X” button is enabled$/, () => {
	tgDynamicTables.getXButton().should('be.enabled')
});

Then(/^the user should see the “Please select the quantity” label$/, () => {
	tgDynamicTables.getPSQquantityLabel().should('be.visible')
});

Then(/^the user should see the “Please enter the name of the product” label$/, () => {
	tgDynamicTables.getPENameLabel().should('be.visible')
});

Then(/^the user should see the “Please enter the price of the product” label$/, () => {
	tgDynamicTables.getPEPriceLabel().should('be.visible')
});


Then(/^the user should see the “Quantity” input box is enabled$/, () => {
	tgDynamicTables.getQuantityInputBox().should('be.enabled')
});


Then(/^the user should see the “Product” input box is enabled$/, () => {
	tgDynamicTables.getProductInputBox().should('be.enabled')
});


Then(/^the user should see the “Price” input box is enabled$/, () => {
	tgDynamicTables.getPriceInputBox().should('be.enabled')
});


Then(/^the user should see the “SUBMIT” button is enabled$/, () => {
	tgDynamicTables.getSubmitButton().should('be.enabled')
});


When(/^the user clicks on the “X” button$/, () => {
	tgDynamicTables.getXButton().click()
});

Then(/^the user should not see the “Add New Product” modal$/, () => {
	tgDynamicTables.getAddProductButtonHeading().should('not.exist')
});


Then(/^the user enters the quantity as “2”$/, () => {
	tgDynamicTables.getQuantityInputBox().type('2')
});


Then(/^the user enters the product as “Mouse”$/, () => {
	tgDynamicTables.getProductInputBox().type('Mouse')
});


Then(/^the user enters the price as “100”$/, () => {
	tgDynamicTables.getPriceInputBox().type('100')
});


Then(/^the user clicks on the “SUBMIT” button$/, () => {
	tgDynamicTables.getSubmitButton().click()
});


Then(/^the user should see the table with the new row below$/, (inventoryValues) => {
	const arr = getTBody()
	const expectedArr = inventoryValues.rawTable
	arr.should('include', expectedArr)
});


Then(/^the user should see the “Total = \$2,500” text displayed$/, () => {
	tgDynamicTables.getTotalAmount().should('have.text', 'Total = $2,500')
});



















