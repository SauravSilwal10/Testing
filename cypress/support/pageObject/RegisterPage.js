
import BaseClass from "../BaseClass";
import { faker } from '@faker-js/faker';
class RegistrationPage extends BaseClass  {
    constructor() {
        super();
        this.firstNameInput ="//input[@id='customer.firstName']"
        this.lastNameInput ="//input[@id='customer.lastName']"
        this.addressInput ="//input[@id='customer.address.street']"
        this.cityInput ="//input[@id='customer.address.city']"
        this.stateInput = "//input[@id='customer.address.state']"
        this.zipCodeInput = "//input[@id='customer.address.zipCode']"
        this.phoneInput ="//input[@id='customer.phoneNumber']"
        this.ssnInput= "//input[@id='customer.ssn']"
        this.userNameInput ="//input[@id='customer.username']"
        this.passwordInput ="//input[@id='customer.password']"
        this.confirmPasswordInput ="//input[@id='repeatedPassword']"
        this.submitButton = "//input[@value='Register']"
    }
  
    fillFirstName(firstName) {
      this.typeIntoField(this.firstNameInput,firstName)
    }
  
    fillLastName(lastName) {
        this.typeIntoField(this.lastNameInput,lastName)
    }

     fillAddress(address) {
        this.typeIntoField(this.addressInput,address)
      }

      fillCity(city) {
        this.typeIntoField(this.cityInput,city)
      }

      fillState(state) {
        this.typeIntoField(this.stateInput,state)
      }

      fillZipCode(zipCode) {
        this.typeIntoField(this.zipCodeInput,zipCode)
      }

    fillPhone(phone) {
        this.typeIntoField(this.phoneInput,phone)
    }
    fillSsn(ssn) {
        this.typeIntoField(this.ssnInput,ssn)
      }

      fillUsername() {
        const username = faker.internet.userName()
        this.typeIntoField(this.userNameInput, username)
    }
    fillPassword(password){
        this.typeIntoField(this.passwordInput , password)
    }
    fillConfirmPassword(confirmPassword) {
        this.typeIntoField(this.confirmPasswordInput,confirmPassword)
    }
    submit() {
        this.clickButton(this.submitButton);  
    }

    register(userData) {
      const uniqueUsername = faker.internet.userName();
       this.fillFirstName(userData.firstName)
       this.fillLastName(userData.lastName);
       this.fillAddress(userData.address)
       this.fillCity(userData.city)
       this.fillState(userData.state)
       this.fillZipCode(userData.zipCode)
       this.fillPhone(userData.phone)
       this.fillSsn(userData.ssn)
       this.fillUsername(uniqueUsername);
       this.fillPassword(userData.password)
       this.fillConfirmPassword(userData.confirmPassword)
       this.submit();

  }
}
  export default  new RegistrationPage();
  