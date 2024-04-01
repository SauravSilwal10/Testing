import LoginPage from '../../support/pageObject/LoginPage';
require('cypress-xpath');
describe('Login Tests', () => {
    before(() => {
      LoginPage.visitPage('https://parabank.parasoft.com/parabank/register.htm');
    });
    it('should display an error for invalid credentials', () => {
      LoginPage.login({
        username : '2',
        password:'3686'
      })

    cy.get('.error').should('be.visible')
                      .and('contain', 'An internal error has occurred and has been logged.');                                 
    });
    it('should login with valid credentials', () => {
      LoginPage.login({
       username : 'JohnDoe',
       password:'Password'
      })
       cy.url().should('include', 'https://parabank.parasoft.com/parabank/overview.htm')
     });
   
  });
