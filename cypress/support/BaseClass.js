class BaseClass {
    visitPage(url) {
      cy.visit(url);
    }
    typeIntoField(selector, text) {
        cy.xpath(selector).type(text);
      }
    clickButton(selector) {
      cy.xpath(selector).click();
    }
  }
  
  export default BaseClass