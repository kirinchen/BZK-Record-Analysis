import { CPSymbol, CryptoSymbol } from "./CryptoSymbol";
import { SeleniumKit } from "../../comm/SeleniumKit";
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
            //TODO handle
        } finally {
            driver.quit();
        }
    }

    private async climb(driver) {
        let cmcurl = CryptoSymbol.historicalUrl(this.symbol);
        await driver.get(cmcurl);
        await driver.findElement(By.name('cmc-date-range-picker')).sendKeys('cheese', Key.ENTER);
    }



}