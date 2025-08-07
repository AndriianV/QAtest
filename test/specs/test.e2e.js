import { faker } from '@faker-js/faker'
import SwagPage from '../pageobjects/swag.page'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const zipCode = faker.location.zipCode()

        await SwagPage.open()
        SwagPage.setswagUsernameInputValue('standard_user')
        SwagPage.setswagPasswordInputValue('secret_sauce')
        SwagPage.clickLoginButton()
        SwagPage.verifyTitle('Swag Title')
        SwagPage.clickAddToCartButton()
        SwagPage.verifyCartQuantity('1')
        SwagPage.clickCartButton()
        SwagPage.verifyUrl('https://www.saucedemo.com/cart.html')
        SwagPage.clickCheckoutButton()
        SwagPage.checkoutform.isExisting()
        SwagPage.setswagFirstnameInputValue(firstName)
        SwagPage.setswagLastnameInputValue(lastName)
        SwagPage.setswagZipInputValue(zipCode)
        SwagPage.clickContinueButton()
        SwagPage.verifyUrl('https://www.saucedemo.com/checkout-step-two.html')
        SwagPage.clickFinishButton()
        SwagPage.verifyUrl('https://www.saucedemo.com/checkout-complete.html')
        SwagPage.clickBackHomeButton()
        SwagPage.verifyUrl('https://www.saucedemo.com/inventory.html')
    })
})

