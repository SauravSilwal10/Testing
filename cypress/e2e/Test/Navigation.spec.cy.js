import NavigationPage from '../../support/pageObject/NavigationPage';

describe('Menu Navigation Tests', () => {
  before(() => {

    NavigationPage.visitPage('https://parabank.parasoft.com/parabank/register.htm'); 
  });

  it('should navigate to Menu 1 successfully', () => {
    NavigationPage.goToMenu1();
    cy.contains('ParaSoft Demo Website').should('be.visible');
  });

  it('should navigate to Menu 2 successfully', () => {
    NavigationPage.goToMenu2();
    cy.url().should('include', 'https://parabank.parasoft.com/parabank/services.htm');
  });

  it('should navigate to Menu 3 successfully', () => {
    NavigationPage.goToMenu3();
    cy.url().should('include', 'https://www.parasoft.com/products/');
  });

  it('should navigate to Menu 4 successfully', () => {
    NavigationPage.goToMenu4();
    cy.url().should('include', 'https://www.parasoft.com/solutions/');
  });

  it('should navigate to Menu 5 successfully', () => {
    NavigationPage.goToMenu5();
    cy.url().should('include', 'https://parabank.parasoft.com/parabank/admin.htm');
  });
});