import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import interactiveLiteSearch from "../../pages/interactiveLitSearch";


setDefaultTimeout(60 * 1000 * 5)
let interactiveLiteSearchPage: interactiveLiteSearch

When('Click on interactiveLite search link', async function () {
    interactiveLiteSearchPage = new interactiveLiteSearch(fixture.page)
    await interactiveLiteSearchPage.clickInteractiveSearchLink()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    
});

When('select a site if the user has permission to access the page', async function () {
    // const permissionMessage = await interactiveLiteSearchPage.returnPermissionMessage()
    // const ExpectedPermissionMessage = "You do not have permission to access this option."

    // if (permissionMessage != ExpectedPermissionMessage) {
        await interactiveLiteSearchPage.clickOnSearchBox()
        await fixture.page.waitForLoadState();
        fixture.logger.info("Waiting for 2 seconds")
        await fixture.page.waitForLoadState();
        await fixture.page.waitForTimeout(5000);
    // } else {
    //     throw new Error("You do not have permission to access this option.");
    // }
    // await fixture.page.waitForLoadState();
    // fixture.logger.info("Waiting for 2 seconds")
});

When('Fill the details', async function () {
    await interactiveLiteSearchPage.addButtonFuncionality()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
});

When('Click on submit button', async function () {
    await interactiveLiteSearchPage.submitButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(5000);
});

When('Confirm validation message', async function () {
    const OriginalMessage = await interactiveLiteSearchPage.returnMessage()
    const ExpectedErrorMessage = "Case Submitted Successfully."
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    // expect(OriginalMessage).toContain(ExpectedSuccessMessage);
    if (OriginalMessage.includes(ExpectedErrorMessage)) {
        console.log("Submitted the case");
        console.log("OriginalMessage",OriginalMessage);
    } else {
        throw new Error("Not created the case");
    }
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
})


