class WikiPage {

    /* Locators */
    getSearchBar() {
        return cy.get('#searchInput')
    }

    getFirstHeading() {
        return cy.get('#firstHeading')
    }

    getLanguages() {
        return cy.get('.central-featured strong')
    }

    /* Method */

    searchFor(searchInput) {
        this.getSearchBar().type(searchInput + '{enter}')
    }

}

module.exports = WikiPage