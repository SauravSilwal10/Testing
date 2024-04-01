import BaseClass from "../BaseClass";
class LoginInfoPage extends BaseClass  {
    constructor() {
        super();
        this.forgotInput= "//a[normalize-space()='Forgot login info?']"
        this.firstNameInput ="//input[@id='firstName']"
        this.lastNameInput ="//input[@id='lastName']"
        this.addressInput ="//input[@id='address.street']"
        this.cityInput ="//input[@id='address.city']"
        this.stateInput = "//input[@id='address.state']"
        this.zipCodeInput = "//input[@id='address.zipCode']"
        this.ssnInput= "//input[@id='ssn']"
        this.buttonInput= "//input[@value='Find My Login Info']"
    }
      forgotInfo(){
        this.clickButton(this.forgotInput);
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
    fillSsn(ssn) {
        this.typeIntoField(this.ssnInput,ssn)
      }

    button() {
        this.clickButton(this.buttonInput);  
    }

    logininfo(userData) {
       this.forgotInfo();
       this.fillFirstName(userData.firstName)
       this.fillLastName(userData.lastName);
       this.fillAddress(userData.address)
       this.fillCity(userData.city)
       this.fillState(userData.state)
       this.fillZipCode(userData.zipCode)
       this.fillSsn(userData.ssn)
       this.button();

  }
}
  export default  new LoginInfoPage ();
  