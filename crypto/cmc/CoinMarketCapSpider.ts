import { CPSymbol, CryptoSymbol } from "./CryptoSymbol";
import { SeleniumKit } from "../../comm/SeleniumKit";
import {  WebDriver } from "selenium-webdriver";
const sk = SeleniumKit.getInstance();
const { By, Key, until } = sk.getKit();

export class CoinMarketCapSpider {

    symbol: CPSymbol = CPSymbol.BTC;

    constructor(cb: CPSymbol) {
        this.symbol = cb;
    }

    public async fetch() {
        let driver = await sk.buildBrowser();
        try {
            await this.climb(driver);
        } catch (e) {
            console.error(e);
        } finally {
            //driver.quit();
        }
    }

    private async climb(driver: WebDriver) {
        /*let cmcurl = CryptoSymbol.historicalUrl(this.symbol);
        await driver.get(cmcurl);
        //await driver.findElement(By.name('cmc-date-range-picker')).sendKeys('cheese', Key.ENTER);
        let firstResult = await driver.wait(until.elementLocated(By.css('.cmc-table__table-wrapper-outer')), 10000);

        let cBtns = await driver.findElement(By.css('input[placeholder="Start date"]'));

        cBtns.clear();
        let v = await cBtns.getAttribute('value');
        console.log("usdBtn:" + v);
        //await cBtns.sendKeys("Jan 29, 2018");*/
    }



}