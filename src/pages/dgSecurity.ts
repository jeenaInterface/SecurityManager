import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
const { randomValuePhone } = require('../helper/util/test-data/randomdata');
const { randomValuePasscode } = require('../helper/util/test-data/randomdata');


export default class dgSecurity {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userName: "//input[@id ='MainContent_LoginUser_UserName']",
        passwordInput: "//input[@id ='MainContent_LoginUser_Password']",
        loginBtn: "//input[@id ='MainContent_LoginUser_LoginButton']",
        errorMessage: "alert",
        homeLink: "//a[text() ='Home']",
        firstPanel: "//a[text() ='INTERFACE SECURITY SYSTEMS']",
        CheckThirdCheckBox: "//input[@id = 'chkEdit3']",
        phoneTextbox: "//div[@id='contMobiletb3']//input[@type='text']",
        HomePhone: "//div[@id='contHometb3']//input[@type='text']",
        passcode: "//div[@id = 'contPasscodetb3']/input[@type='text']",
        updateButton: "//input[@id='btnContactUpdate']",
        successMessage: "Contacts update successful. Please allow 2 business days for passcode changes to be applied to your system."

    }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLDG);


    }
    async enterUserName(user: string) {
        await this.page.locator(this.Elements.userName).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }


    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async clickHomeLink() {
        await this.base.waitAndClick(this.Elements.homeLink);
    }

    async clickFirstPanel() {
        await this.base.waitAndClick(this.Elements.firstPanel);
    }

    async editContactDetails() {
        await this.page.locator(this.Elements.CheckThirdCheckBox).check();
        await this.page.locator(this.Elements.phoneTextbox).fill(randomValuePhone.toString())
        await this.page.locator(this.Elements.HomePhone).fill(randomValuePhone.toString())
        await this.page.locator(this.Elements.passcode).fill(randomValuePasscode.toString())
    }

    async clickupdateButton() {
        await this.base.waitAndClick(this.Elements.updateButton);
    }

    async returnSuccessMessage() {
        const SuccessMessage = await this.page.getByText(this.Elements.successMessage);
        const innertext = await SuccessMessage.innerText();
        return innertext
    }


}