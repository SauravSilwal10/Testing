import BaseClass from "../BaseClass";
class LoginPage  extends BaseClass {
  constructor(){
    super();
  
    this.usernameInput = '//input[@name="username"]';
    this.passwordInput = '//input[@name="password"]';
    this.loginButton = "//input[@value='Log In']";
  }
   
    typeUsername(username) {
      this.typeIntoField(this.usernameInput,username)
    }
    typePassword(password) {
      this.typeIntoField(this.passwordInput,password)
    }
  
   
    clickLogin() {
      this.clickButton(this.loginButton)
    }
  
    login(userData) {
      this.typeUsername(userData.username);
      this.typePassword(userData.password);
      this.clickLogin();
    }
  }
  
  
  export default new LoginPage();