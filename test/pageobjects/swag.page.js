const { $, expect, browser } = require('@wdio/globals')
// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SwagPage {
    /**
     * define selectors using getter methods
     */
    // get inputUsername () {
    //     return $('#username');
    // }

    get swagUsernameInput(){
      return $('#user-name')
    }

    setswagUsernameInputValue(value){
      this.swagUsernameInput.setValue(value)
    }
    

    get swagPasswordInput(){
      return $('#password')
    }

    setswagPasswordInputValue(value){
      this.swagPasswordInput.setValue(value)
    }
    

    get loginButton(){
      return $('#login-button')
    }

    clickLoginButton (){
      this.loginButton.click()
    }
    
     verifyTitle (title){
      expect(browser.getTitle()).toHaveText(title)
    }

     verifyUrl(url){
      expect(browser.getUrl()).toHaveText(url)
    }


     get addToCartButton(){
      return $('#add-to-cart-sauce-labs-backpack')
    }
   clickAddToCartButton (){
      this.addToCartButton.click()
    }

    
    get cartQuantity(){
      return $('#shopping_cart_container > a > span')
    }
    verifyCartQuantity (quantity){
      expect(this.cartQuantity).toHaveText(quantity)
    }


     get cartButton(){
      return $('#shopping_cart_container > a')
    }

    clickCartButton (){
      this.cartButton.click()
    }


      get checkoutButton(){
      return $('#checkout')
    }

    clickCheckoutButton (){
      this.checkoutButton.click()
    }

      get checkoutform(){
        return $('#checkout_info_container > div > form > div.checkout_info')
      }

      get swagFirstnameInput(){
      return $('#first-name')
    }

    setswagFirstnameInputValue(value){
      this.swagFirstnameInput.setValue(value)
      expect(this.swagFirstnameInput).toHaveText(value)
    }


       get swagLastnameInput(){
      return $('#last-name')
    }

    setswagLastnameInputValue(value){
      this.swagLastnameInput.setValue(value)
      expect(this.swagLastnameInput).toHaveText(value)
    }


      get swagZipInput(){
      return $('#postal-code')
    }

    setswagZipInputValue(value){
      this.swagZipInput.setValue(value)
      expect(this.swagZipInput).toHaveText(value)
    }


     get continueButton(){
      return $('#continue')
    }

    clickContinueButton (){
      this.continueButton.click()
    }


     get finishButton(){
      return $('#finish')
    }

    clickFinishButton (){
      this.finishButton.click()
    }


      get backHomeButton(){
      return $('#back-to-products')
    }

    clickBackHomeButton (){
      this.backHomeButton.click()
    }
    // get inputPassword () {
    //     return $('#password');
    // }

    // get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
   open () {
          return browser.url(`https://www.saucedemo.com/`)
      }
}

module.exports = new SwagPage();
