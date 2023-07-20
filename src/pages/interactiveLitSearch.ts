import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
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
        submission_message: "//div[@id='SubmitCaseMsgDiv']",
        errorMessage:"There was a problem submitting your case. If you continue to receive this message please contact Interface Security Systems to make any changes.",
        permissionErrorMessage:"You do not have permission to access this option."

    }
    async clickInteractiveSearchLink() {
        await this.base.waitAndClick(this.Elements.interactiveSearchTab);
    }

    async clickOnSearchBox() {
        await this.page.locator(this.Elements.search_textbox).click();
        await this.page.locator(this.Elements.search_textbox).fill("IAN30528 ")
        await this.page.locator(this.Elements.search_textbox).click();
        await this.page.locator(this.Elements.first_search_result).click();
    }


    async addButtonFuncionality() {
        await this.page.locator(this.Elements.add_button).click();
        await this.page.locator(this.Elements.panel_checkbox).check();
        await this.page.locator(this.Elements.contact_checkbox).check();
        await this.page.locator(this.Elements.name_textbox).fill("Test user");
        await this.page.locator(this.Elements.title_textbox).fill("Test Position");
        await this.page.locator(this.Elements.passcode_textbox).fill(randomValuePasscode.toString());
        await this.page.locator(this.Elements.phone_textbox).fill(randomValuePhone.toString());
        await this.page.locator(this.Elements.save_changes_button).click();

    }

    async submitButton() {
        await this.page.locator(this.Elements.submit_case).click();
        await fixture.page.waitForLoadState();
        fixture.logger.info("Waiting for 5 seconds")
        await fixture.page.waitForTimeout(5000);
    }

    async returnMessage() {
        const Message = await this.page.locator(this.Elements.submission_message);
        const innertext = await Message.innerText();
        return innertext
    }

    async returnSRNo() {
        const SRNo = await this.page.locator(this.Elements.submission_message);
        const innertext = await SRNo.innerText();
        //  const innertext ="Case Submitted Successfully. Case #: SR01213494"
        const match = innertext.match(/Case #: ([A-Z0-9]+)/);
        const caseNumber = match ? match[1] : null;
        return caseNumber;

    }

    async returnerrorMessageAfterSubmit()
        {
            const errorMessageAfterSubmit = await this.page.getByText(this.Elements.errorMessage);
            const innertext = await errorMessageAfterSubmit.innerText();
            return innertext
        }

    async returnPermissionMessage()
        {
            const errorMessageAfterSubmit = await this.page.getByText(this.Elements.permissionErrorMessage);
            const innertext = await errorMessageAfterSubmit.innerText();
            return innertext
        }
 
}
