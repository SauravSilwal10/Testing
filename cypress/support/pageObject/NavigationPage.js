import BaseClass from "../BaseClass";

class NavigationPage extends BaseClass {

  constructor() {
    super();
    this.firstMenu ="//ul[@class='leftmenu']//li//a[@href='about.htm'][normalize-space()='About Us']"
    this.secondMenu ="//ul[@class='leftmenu']//li//a[@href='services.htm'][normalize-space()='Services']"
    this.thirdMenu ="//ul[@class='leftmenu']//a[normalize-space()='Products']"
    this.fourthMenu ="//ul[@class='leftmenu']//a[normalize-space()='Locations']"
    this.fifthMenu = "//a[normalize-space()='Admin Page']"
  }
  // goToMenu1() {
  //   this.clickButton(this.firstMenu); 
  // }

  // goToMenu2() {
  //   this.clickButton("//ul[@class='leftmenu']//li//a[@href='services.htm'][normalize-space()='Services']"); 
  // }

  // goToMenu3() {
  //   this.clickButton("//ul[@class='leftmenu']//a[normalize-space()='Products']"); 
  // }

  // goToMenu4() {
  //   this.clickButton("//ul[@class='leftmenu']//a[normalize-space()='Locations']"); 
  // }
  goToMenu5() {
    this.clickButton(this.fifthMenu); 
  }
  
 
}


export default new NavigationPage();