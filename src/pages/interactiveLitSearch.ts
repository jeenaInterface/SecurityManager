import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
const { randomValuePhone } = require('../helper/util/test-data/randomdata');
const { randomValuePasscode } = require('../helper/util/test-data/randomdata');


export default class interactiveLiteSearch {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        interactiveSearchTab: "//a[text()='Interactive Site Search']",
        search_textbox: "//input[@id='caseSiteSearchInput']",
        first_search_result: "//a[@tabindex = 2]",
        add_button: "//input[@id='Add']",
        panel_checkbox: "//input[@id='panel']",
        contact_checkbox: "//input[@id='contact']",
        name_textbox: "//input[@id='name']",
        title_textbox: "//input[@id='title']",
        phone_textbox: "//input[@id='phone']",
        passcode_textbox: "//input[@id='passcode']",
        save_changes_button: "//input[@id='submitEdit']",
        submit_case: "//a[text()='Submit Case ']",
        submission_message: "//div[@id = 'SubmitCaseMsgDiv']"
    }
    async clickInteractiveSearchLink() {
        await this.base.waitAndClick(this.Elements.interactiveSearchTab);
    }

    async clickOnSearchBox() {
        await this.page.locator(this.Elements.search_textbox).click();
        await this.page.locator(this.Elements.search_textbox).fill("DOLLAR GENERAL DG00851")
        await this.page.locator(this.Elements.search_textbox).click();
        await this.page.locator(this.Elements.first_search_result).click();
    }


    async addButtonFuncionality() {
        await this.page.locator(this.Elements.add_button).click();
        await this.page.locator(this.Elements.panel_checkbox).check();
        await this.page.locator(this.Elements.contact_checkbox).check();
        await this.page.locator(this.Elements.name_textbox).fill("Test user");
        await this.page.locator(this.Elements.title_textbox).click();
        await this.page.locator(this.Elements.title_textbox).fill("ASST MGR");
        await this.page.locator(this.Elements.passcode_textbox).fill(randomValuePasscode.toString());
        await this.page.locator(this.Elements.phone_textbox).fill(randomValuePhone.toString());
        await this.page.locator(this.Elements.save_changes_button).click();

    }

    async submitButton() {
        await this.page.locator(this.Elements.submit_case).click();
    }

    async returnMessage() {
        const Message = await this.page.locator(this.Elements.submission_message);
        const innertext = await Message.innerText();
        return innertext
    }

    

}