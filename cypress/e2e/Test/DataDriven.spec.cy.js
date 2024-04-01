import LoginPage from '../../support/pageObjects/LoginPage';

escribe('Data-Driven Login Tests', function() {
    before(function() {
      cy.task('readExcelFile', 'Test.xlsx').then((data) => {
        this.testData = data; 
      });
    });
  
    beforeEach(function() {
      LoginPage.visitPage('https://parabank.parasoft.com/parabank/register.htm');
    });
  
    it('performs login for each set of credentials', function() {
      this.testData.forEach((userData) => {
        LoginPage.login(userData);
        
        cy.url().should('include', 'https://parabank.parasoft.com/parabank/overview.htm')
      });
    });
  });