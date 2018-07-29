import { browser, protractor, ExpectedConditions } from "protractor";
import { LoginPage } from "../pages/login-page";
import { AdminCustomerPage } from "../pages/admin-customer-page"; 
import { env } from "./../config/env"
import { DashboardPage } from "../pages/dashboard-page";
const { When, Then } = require("cucumber");
import { expect } from "chai";

const loginPage: LoginPage = new LoginPage();
const dashboardPage: DashboardPage = new DashboardPage();
const adminCustomerPage: AdminCustomerPage = new AdminCustomerPage();

When(/^User logs in into system$/, async () => {
    await browser.get(env.baseUrl);
    await loginPage.loginInput.sendKeys(env.defaultLogin);
    await loginPage.passwordInput.sendKeys(env.defaultPassword);
    await loginPage.submitButton.click();
    await browser.wait(ExpectedConditions.presenceOf(dashboardPage.userEmailLink));
});

When(/^User navigates to ADMIN_CUSTOMER page$/, async () => {
    await browser.get(env.pageAdminCustomerUrl);
});

When(/^User click 'Add new customer' on Administration\/Customers Page$/, async () => {
    await adminCustomerPage.plusButton.click();
});

Then(/^Customers modal is visible on Administration Customers Page$/, async () => {
    expect(await adminCustomerPage.customerModalPopup.isPresent()).to.be.true;
    expect(await adminCustomerPage.customerModalPopup.isDisplayed()).to.be.true;
});

Then(/^Customers modal is not visible on Administration Customers Page$/, async () => {
    if (await adminCustomerPage.customerModalPopup.isPresent()) {
        expect(await adminCustomerPage.customerModalPopup.isDisplayed()).to.be.false;
    }
});

When(/^User click 'Abort Create new Customer' on Administration\/Customers Page$/, async () => {
    await adminCustomerPage.abortCreateNewCustomerButton.click()
});

When(/^User click '(\d+)' page number on Administration\/Customers Page$/, async (pageNumber) => {
    await browser.sleep(500);
    await adminCustomerPage.paginationLinks.get(+pageNumber).click();
    await browser.sleep(500);
});

Then(/^Page number '(\d+)' is active on Administration\/Customers Page$/, async (pageNumber) => {
    const classAttr = await adminCustomerPage.paginationLinks.get(+pageNumber).getAttribute('class');
    expect(classAttr).to.contain("active");
});