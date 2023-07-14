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

When('select a site', async function () {
    await interactiveLiteSearchPage.clickOnSearchBox()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
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
});

When('Confirm validation message', async function () {
    const OriginalMessage = await interactiveLiteSearchPage.returnMessage()
    const ExpectedErrorMessage = "There was a problem submitting your case. If you continue to receive this message please contat Interface Security Systems to make any changes."
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
    // expect(OriginalMessage).toContain(ExpectedSuccessMessage);
    if (ExpectedErrorMessage != OriginalMessage) {
        console.log("Submitted the case");
      } else {
        throw new Error("Not created the case");
      }
      await fixture.page.waitForLoadState();
      fixture.logger.info("Waiting for 2 seconds")
 })


