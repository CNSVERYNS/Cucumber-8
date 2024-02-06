const { Then } = require("@badeball/cypress-cucumber-preprocessor");
const NorthwesternPage = require("../../../pages/NorthwesternPage");



/**
 * Validate navbar items
 */

const northwesternPage = new NorthwesternPage()

/* Then(/^user should see below navbar items$/, (dataTable) => {

    const arr = dataTable.rawTable.flat()

    northwesternPage.getNavbarItems().each(($el, index) => {
        cy.wrap($el.text().trim()).should('eq', arr[index])
    })

    arr.forEach((el) => {
        cy.log(el)
    })
	
}); */


Then(/^user should fill the Form$/, (dataTable) => {
	const inputs = dataTable.hashes()

    inputs.forEach(input => {
        cy.log(input.input)
    })
});


/* Then(/^user should fill the Form as key-value pairs$/, (dataTable) => {
	const keyValue = dataTable.rowsHash()

    for(const key in keyValue ) {
        // cy.log(key)
        cy.log(keyValue[key])
    }
}); */



Then(/^user should handle another type$/, (dataTable) => {
	const inputs = dataTable.hashes()

    inputs.forEach(input => {
        cy.log(input.label)
        cy.log(input.input)
        cy.log(input.section)
    })

    // Object Destructuring
    // const { label, input, section } = inputs

    // label
    // inputs.label

    // Array Destructuring
    // const arr = ['abc', 'def']

    // const [first, last] = arr

    // cy.log(first)
    // cy.log(last)

    inputs.forEach(({label, input, section}) => {
        cy.log(label)
        cy.log(input)
        cy.log(section)
    })
});