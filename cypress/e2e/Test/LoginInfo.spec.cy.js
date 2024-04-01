import LoginInfoPage from '../../support/pageObject/LoginInfoPage'
require('cypress-xpath');
describe('Registration Test', () => {
    before(() => {
        LoginInfoPage.visitPage('https://parabank.parasoft.com/parabank/register.htm');
      });


  it('allows a user to register', () => {
      LoginInfoPage.logininfo   ({     
        firstName : 'John'  ,
        lastName  : 'Doe',        
        address : '123 Main St',
        city:'Anytown',    
        state: 'Anystate',   
        zipCode: '12345',      
        phone :'555-555-5555', 
        ssn: '123-45-6789', 
     });
     cy.contains('Your login information was located successfully. You are now logged in.');
  });
});