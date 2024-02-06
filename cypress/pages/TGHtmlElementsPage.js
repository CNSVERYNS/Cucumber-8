const TGBasePage = require("./TGBasePage");

class TGHtmlElementsPage extends TGBasePage {
  /* Web Elements */
  getButtons() {
    return cy.get("#register_button, #signin_button");
  }

  getButtonMessage() {
    return cy.get(".is-block");
  }

  getFirstDropdown() {
    return cy.get("#company_dropdown1");
  }

  getSecondDropdown() {
    return cy.get("#company_dropdown2");
  }

  getTextInputOne() {
    return cy.get("#text_input1");
  }

  getTextInputTwo() {
    return cy.get("#text_input2");
  }

  //   getAppleCheckBox() {
  //     return cy.get("#checkbox_1");
  //   }

  //   getMicrosoftCheckBox() {
  //     return cy.get("#checkbox_2");
  //   }

  //   getTeslaCheckBox() {
  //     return cy.get("#checkbox_3");
  //   }

  /* Methods */
  clickButtonByText(buttonName) {
    this.getButtons().contains(buttonName).click();
  }

  //   getCheckboxByLabel(label) {
  //     switch (label) {
  //       case "Apple":
  //         return this.getAppleCheckBox();
  //       case "Microsoft":
  //         return this.getMicrosoftCheckBox();
  //       case "Tesla":
  //         return this.getTeslaCheckBox();
  //       default:
  //         throw new Error(`${label} not found`);
  //     }
  //   }

  getCheckboxByLabel(label) {

    const checkboxes = {
      Apple: "#checkbox_1",
      Microsoft: "#checkbox_2",
      Tesla: "#checkbox_3",
    };

    if(!label) {
        throw new Error(`${label} not found`);
    }

    return cy.get(checkboxes[label]);
  }
}

module.exports = TGHtmlElementsPage;
