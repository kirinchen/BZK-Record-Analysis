const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

export class SeleniumKit {

    static instance: SeleniumKit;

    public getKit() {
        return { By, Key, until };
    }

    public async buildBrowser() {
        let driver = await new Builder().forBrowser('chrome').build();
        return driver;
    }

    static  getInstance() {
        if (!this.instance) {
            this.instance = new SeleniumKit();
        }
        return this.instance;
    }

}