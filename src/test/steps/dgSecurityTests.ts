import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import dgSecurity from "../../pages/dgSecurity";
import * as data from "../../helper/util/test-data/loginCredentials.json"


setDefaultTimeout(60 * 1000 * 5)
let dgSecurityPage: dgSecurity

Given('User navigates to the dg security application', async function () {
    dgSecurityPage = new dgSecurity(fixture.page)
    await dgSecurityPage.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username in dg security', async function () {
    await dgSecurityPage.enterUserName(data.userNamedg)

});

Given('User enter the password in dg security', async function () {
    await dgSecurityPage.enterPassword(data.passworddg)
    console.log(data.passworddg);
})

When('User click on the login button in dgSecurityManager', async function () {
    await dgSecurityPage.clickLoginButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('Click Home link', async function () {
    await dgSecurityPage.clickHomeLink()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
});


When('Click on first panel type', async function () {
    await dgSecurityPage.clickFirstPanel()
});

When('Edit the account', async function () {
    await dgSecurityPage.editContactDetails()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
});

When('Click on contact button', async function () {
    await dgSecurityPage.clickupdateButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })

 When('Verify success message', async function () {
    const OriginalMessage = await dgSecurityPage.returnSuccessMessage()
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

