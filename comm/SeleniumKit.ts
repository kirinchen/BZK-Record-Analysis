import { Builder, By, Key, until, ThenableWebDriver, WebDriver } from "selenium-webdriver";
import { String, StringBuilder } from 'typescript-string-operations';
import { Config } from 'bzk';
require('chromedriver');

export class SeleniumKit {

    config: Config;
    driver: WebDriver;

    public constructor(c: Config) {
        this.config = c;
    }


    public getKit() {
        return { By, Key, until };
    }

    public async init() {
        this.driver = await new Builder().forBrowser(this.config.get("",'chrome')).build();
        
    }

    public async setAttribute(driver: WebDriver, slct: string, attr: string, val: any) {
        let temp = "document.querySelector('{0}').setAttribute('{1}','{2}')";
        let exs = String.Format(temp, slct, attr, val);
        console.log("exs:" + exs);
        return await driver.executeScript(exs);
    }




}