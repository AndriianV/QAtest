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

    async setswagUsernameInputValue(value){
      await this.swagUsernameInput.setValue(value)
    }
    

    get swagPasswordInput(){
      return $('#password')
    }

    async setswagPasswordInputValue(value){
      await this.swagPasswordInput.setValue(value)
    }
    

    get loginButton(){
      return $('#login-button')
    }

    async clickLoginButton (){
      await this.loginButton.click()
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
    async clickAddToCartButton (){
    await  this.addToCartButton.click()
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

    async clickCartButton (){
    await   this.cartButton.click()
    }


      get checkoutButton(){
      return $('#checkout')
    }

    async clickCheckoutButton (){
    await   this.checkoutButton.click()
    }

      get checkoutform(){
        return $('#checkout_info_container > div > form > div.checkout_info')
      }

      get swagFirstnameInput(){
      return $('#first-name')
    }

    async setswagFirstnameInputValue(value){
    await   this.swagFirstnameInput.setValue(value)
    expect(this.swagFirstnameInput).toHaveText(value)
    }


       get swagLastnameInput(){
      return $('#last-name')
    }

    async setswagLastnameInputValue(value){
    await   this.swagLastnameInput.setValue(value)
    expect(this.swagLastnameInput).toHaveText(value)
    }


      get swagZipInput(){
      return $('#postal-code')
    }

    async setswagZipInputValue(value){
    await   this.swagZipInput.setValue(value)
    expect(this.swagZipInput).toHaveText(value)
    }


     get continueButton(){
      return $('#continue')
    }

    async clickContinueButton (){
    await   this.continueButton.click()
    }


     get finishButton(){
      return $('#finish')
    }

    async clickFinishButton (){
    await   this.finishButton.click()
    }


      get backHomeButton(){
      return $('#back-to-products')
    }

    async clickBackHomeButton (){
    await   this.backHomeButton.click()
    }

     get swagProductName(){
      return $('#item_0_title_link > div')
    }
    async getProductNameText() {
    return await this.swagProductName.getText()
    }

     get cartProductName(){
      return $('#item_0_title_link > div')
    }
    verifyProductName (productName){
    expect(this.cartProductName).toHaveText(productName)
    }

    get swagProductPrice(){
      return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div')
    }
    async getProductPriceText() {
    return await this.swagProductPrice.getText()
    }

    get totalPrice(){
      return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label')
    }
    verifyTotalPrice (productPrice){
    expect(this.totalPrice).toHaveText(productPrice)
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
