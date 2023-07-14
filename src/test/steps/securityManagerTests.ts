import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import securityManager from "../../pages/securityManager";
import * as data from "../../helper/util/test-data/loginCredentials.json"


setDefaultTimeout(60 * 1000 * 5)
let securityManagerPage: securityManager

Given('User navigates to the security application', async function () {
    securityManagerPage = new securityManager(fixture.page)
    await securityManagerPage.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username in security Manager', async function () {
    await securityManagerPage.enterUserName(data.userNameSecurity)

});

Given('User enter the password in security Manager', async function () {
    await securityManagerPage.enterPassword(data.passwordSecurity)
    console.log(data.passwordSecurity);
})

When('User click on the login button in security Manager', async function () {
    await securityManagerPage.clickLoginButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('Click Home link', async function () {
    await securityManagerPage.clickHomeLink()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
});


When('Click on first panel type', async function () {
    await securityManagerPage.clickFirstPanel()
});

When('Create new row and add details', async function () {
    await securityManagerPage.addBlankrows()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
});

When('Click on contact button', async function () {
    await securityManagerPage.clickupdateButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })

 When('Verify success message', async function () {
    const OriginalMessage = await securityManagerPage.returnSuccessMessage()
    const ExpectedSuccessMessage = "Contacts update successful. Please allow 2 business days for passcode changes to be applied to your system."
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
    // expect(OriginalMessage).toContain(ExpectedSuccessMessage);
    if (ExpectedSuccessMessage === OriginalMessage) {
        console.log("Contact details are updated");
      } else {
        throw new Error("No records updated");
      }
      await fixture.page.waitForLoadState();
      fixture.logger.info("Waiting for 2 seconds")
 })

