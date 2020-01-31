import { CPSymbol, CryptoSymbol } from "./CryptoSymbol";
import { SeleniumKit } from "../../comm/SeleniumKit";
import { WebDriver, WebElement } from "selenium-webdriver";
import { Config } from "bzk";
import { CMCUtils } from "./CMCUtils";
const { By, Key, until } = SeleniumKit.getKit();

export class CoinMarketCapSpider {
    sk: SeleniumKit;
    symbol: CPSymbol = CPSymbol.BTC;

    constructor(c: Config, cb: CPSymbol) {
        this.symbol = cb;
        this.sk = new SeleniumKit(c);
    }

    public async fetch() {
        await this.sk.init();
        try {
            await this.climb();
        } catch (e) {
            console.error(e);
        } finally {
            //driver.quit();
        }
    }

    private async climb() {
        let nowAt = new Date();
        let cmcurl = CryptoSymbol.historicalUrl(this.symbol, new Date(2020, 0, 1), nowAt);
        await this.sk.driver.get(cmcurl);
        //await driver.findElement(By.name('cmc-date-range-picker')).sendKeys('cheese', Key.ENTER);
        let firstResult = await this.sk.driver.wait(until.elementLocated(By.css('.cmc-table__table-wrapper-outer')), 10000);
        let trs = await this.sk.driver.findElements(By.css('.cmc-table-row'));
        console.log("trs size:" + trs.length);
        trs.forEach(this.parseRow);
    }

    private async parseRow(e: WebElement) {
        let s = await e.getText();
        console.log("row!!:" + s);
        let tds = await e.findElements(By.css('div'));

    }



}