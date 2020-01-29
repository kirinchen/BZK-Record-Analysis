import { Builder, By, Key, until, ThenableWebDriver, WebDriver } from "selenium-webdriver";
import { String, StringBuilder } from 'typescript-string-operations';
require('chromedriver');

export class SeleniumKit {

    static instance: SeleniumKit;

    public getKit() {
        return { By, Key, until };
    }

    public async buildBrowser(): Promise<WebDriver> {
        let driver = await new Builder().forBrowser('chrome').build();
        return driver;
    }

    public async setAttribute(driver: WebDriver, slct: string, attr: string, val: any) {
        let temp = "document.querySelector('{0}').setAttribute('{1}','{2}')";
        let exs = String.Format(temp, slct, attr, val);
        console.log("exs:" + exs);
        return await driver.executeScript(exs);
    }


    static  getInstance() {
        if (!this.instance) {
            this.instance = new SeleniumKit();
        }
        return this.instance;
    }

}