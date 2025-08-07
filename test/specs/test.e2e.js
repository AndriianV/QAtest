import { faker } from '@faker-js/faker'
import SwagPage from '../pageobjects/swag.page'


describe('My Test Task', () => {
    it('should login with valid credentials', async () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const zipCode = faker.location.zipCode()

        const productPrice = 9.99;

        await SwagPage.open()
        await SwagPage.setswagUsernameInputValue('standard_user')
        await SwagPage.setswagPasswordInputValue('secret_sauce')
        await SwagPage.clickLoginButton()
        const productName =  await SwagPage.getProductNameText()
         SwagPage.verifyTitle('Swag Title')
        await SwagPage.clickAddToCartButton()
         SwagPage.verifyCartQuantity('1')
        await SwagPage.clickCartButton()
         SwagPage.verifyUrl('https://www.saucedemo.com/cart.html')
        await SwagPage.clickCheckoutButton()
        await SwagPage.checkoutform.isExisting()
        await SwagPage.setswagFirstnameInputValue(firstName)
        await SwagPage.setswagLastnameInputValue(lastName)
        await SwagPage.setswagZipInputValue(zipCode)
        await SwagPage.clickContinueButton()
         SwagPage.verifyUrl('https://www.saucedemo.com/checkout-step-two.html')
         SwagPage.verifyProductName(productName)
        const total = productPrice * 1.08

         SwagPage.verifyTotalPrice(total)
        await SwagPage.clickFinishButton()
         SwagPage.verifyUrl('https://www.saucedemo.com/checkout-complete.html')
        await SwagPage.thanksform.isExisting()
        await SwagPage.clickBackHomeButton()
         SwagPage.verifyUrl('https://www.saucedemo.com/inventory.html')
        const cartQuantity = await $('#shopping_cart_container > a > span')
        await expect(cartQuantity).not.toBeExisting();
    })
})

