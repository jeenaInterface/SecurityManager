import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";


export default class boldNet {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userName: "//input[@name='username']",
        password: "//input[@name='password']",
        loginButton: "//span[text()='LOG IN']",
        searchButton: "(//md-icon[@md-font-icon='fa-search'])[1]",
        searchBox: "//input[@bt-focus='ctrl.focusQuery']",
        searchIcon: "//span[text()='Search']",
        searchResult: "//span[text()='AGB0010']",
        contactList: "(//span[contains(text(),'Contact List')])[1]/./..",
        CodeToAssign41: "(//span[contains(text(), 'Code To Assign 041')])[1]",
        contactDeleteButton: "//md-icon[@md-font-icon='fa-trash-o']",
        OkayButtonInPopup: "//span[text()='Ok']",
        saveButtonOnTheTop: "(//md-icon[@md-font-icon='fa fa-save'])[1]",
        confirmCustomerCommentpopup: "//span[text()='Ok']",
        searchOnContact: "(//input[@ng-change='btCtrl.search()'])[1]"

    }
    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLBOLD);


    }
    async enterUserName(user: string) {
        await this.page.locator(this.Elements.userName).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.password).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginButton);
    }

    async clickOnSearchButton() {
        await this.base.waitAndClick(this.Elements.searchButton);
    }

    async searchSite() {
        await this.page.locator(this.Elements.searchBox).fill("AGB0010 ");
    }

    async clickOnSearchIcon() {
        await this.base.waitAndClick(this.Elements.searchIcon);

}

async clickOnSearchResult() {
    await this.base.waitAndClick(this.Elements.searchResult);

}

async clickOnContactMenu() {
    await this.base.waitAndClick(this.Elements.contactList);

}

async clickOnContact41() {
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(5000);
    await this.base.waitAndClick(this.Elements.searchOnContact)
    await this.page.locator(this.Elements.searchOnContact).fill("41");
    await this.base.waitAndClick(this.Elements.CodeToAssign41);

}

async clickOnDeleteButton() {
    await this.base.waitAndClick(this.Elements.contactDeleteButton);

}
async clickOnOkayButton() {
    await this.base.waitAndClick(this.Elements.OkayButtonInPopup);

}
async clickOnSaveButton() {
    await this.base.waitAndClick(this.Elements.saveButtonOnTheTop);

}
async clickOnOKAYButton() {
    await this.base.waitAndClick(this.Elements.confirmCustomerCommentpopup);

}

async VerifynewContact()
{
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(5000);
    await this.base.waitAndClick(this.Elements.searchOnContact)
    await this.page.locator(this.Elements.searchOnContact).fill("41");
    const visibleParameter = await this.page.locator(this.Elements.CodeToAssign41).isVisible();
    return visibleParameter !== null;
}

}