import RegistrationPage from '../../support/pageObject/RegisterPage';
require('cypress-xpath');
describe('Registration Test', () => {
    before(() => {
        RegistrationPage.visitPage('https://parabank.parasoft.com/parabank/register.htm');
      });
  it('allows a user to register', () => {
      RegistrationPage.register   ({     
        firstName : 'John'  ,
        lastName  : 'Doe',        
        address : '123 Main St',
        city:'Anytown',    
        state: 'Anystate',   
        zipCode: '12345',      
        phone :'555-555-5555', 
        ssn: '123-45-6789', 
        password:'Password',  
        confirmPassword:'Password'
     });
     cy.contains('Your account was created successfully. You are now logged in.').should('be.visible');
  });
});