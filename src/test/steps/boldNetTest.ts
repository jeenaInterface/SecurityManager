import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import boldNet from "../../pages/boldNet";
import * as data from "../../helper/util/test-data/loginCredentials.json"

setDefaultTimeout(60 * 1000 * 5)
let boldNetPage: boldNet

Given('User navigates to the BoldNet application', async function () {
    boldNetPage = new boldNet(fixture.page)
    await boldNetPage.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(5000);
})

Given('User enter the username in BoldNet', async function () {
    await boldNetPage.enterUserName(data.userNameBoldNet)

});

Given('User enter the password in BoldNet', async function () {
    await boldNetPage.enterPassword(data.passwordBoldNt)
    console.log(data.passwordBoldNt);
})

When('User click on the login button in BoldNet', async function () {
    await boldNetPage.clickLoginButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('Click on search button in home page', async function () {
    await boldNetPage.clickOnSearchButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
});


When('Enter search text', async function () {
    await boldNetPage.searchSite()
});

When('Click on search icon', async function () {
    await boldNetPage.clickOnSearchIcon()
});

When('Click on search Result', async function () {
    await boldNetPage.clickOnSearchResult()
});

When('Click on contact menu', async function () {
    await boldNetPage.clickOnContactMenu()
});

When('Delete an account containing the text Code To Assign 041', async function () {
    const IsVisible = await boldNetPage.VerifynewContact()
    console.log("IsVisible",IsVisible)
    if (IsVisible !== null)
    {
    await boldNetPage.clickOnContact41()
    await boldNetPage.clickOnDeleteButton()
    await boldNetPage.clickOnOkayButton()
    await boldNetPage.clickOnSaveButton()
    await boldNetPage.clickOnOKAYButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(5000);
    }
    else {
        throw new Error("No entry is existing with the text 41");
      }
});


When('Verify new contact is created in BoldNet', async function () {
    const IsVisible = await boldNetPage.VerifynewContact()
    console.log("IsVisible",IsVisible)
     if (IsVisible !== null)
     {
        console.log("Contact is created");
    } else {
      throw new Error("No record created");
    }
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 5 seconds")
    await fixture.page.waitForTimeout(5000);
     
});
