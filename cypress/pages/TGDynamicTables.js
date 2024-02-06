class TGDynamicTables {
    getHeading(){
        return cy.get('.is-size-3')
    }

    getInventoryItems(){
        return cy.get('.DynamicTables_tableHeaders__k53h5 > th')
    }

    getInventoryValues(){
        return cy.get('tbody > tr > td')
    }

    getTotalAmount(){
        return cy.get('#total_amount')
    }

    getAddproductbtn(){
        return cy.get('#add_product_btn')
    }

    clickAddProductButton() {
        this.getAddproductbtn().click();
    }

    getAddProductButtonHeading(){
        return cy.get('#modal_title')
    }

    getXButton(){
        return cy.get('.delete')
    }

    getPSQquantityLabel(){
        return cy.get('form > div > label:nth-child(1)')
    }

    getPENameLabel(){
        return cy.get('form > div > label:nth-child(1)')
    }

    getPEPriceLabel(){
        return cy.get('form > div > label:nth-child(1)')
    }

    getQuantityInputBox(){
        return cy.get('#quantity')
    }
    getProductInputBox(){
        return cy.get('#product')
    }
    getPriceInputBox(){
        return cy.get('#price')
    }

    getSubmitButton(){
        return cy.get('#submit')
    }

    getProductTable(){
        return cy.get('#product_table')
    }

    getTBody(){
        return cy.get('tbody')
    }
}

  
module.exports = TGDynamicTables;













