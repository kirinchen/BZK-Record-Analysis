"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoSymbol_1 = require("./CryptoSymbol");
const SeleniumKit_1 = require("../../comm/SeleniumKit");
const sk = SeleniumKit_1.SeleniumKit.getInstance();
const { By, Key, until } = sk.getKit();
class CoinMarketCapSpider {
    constructor(cb) {
        this.symbol = CryptoSymbol_1.CPSymbol.BTC;
        this.symbol = cb;
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield sk.buildBrowser();
            try {
                yield this.climb(driver);
            }
            catch (e) {
                console.error(e);
            }
            finally {
                //driver.quit();
            }
        });
    }
    climb(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            /*let cmcurl = CryptoSymbol.historicalUrl(this.symbol);
            await driver.get(cmcurl);
            //await driver.findElement(By.name('cmc-date-range-picker')).sendKeys('cheese', Key.ENTER);
            let firstResult = await driver.wait(until.elementLocated(By.css('.cmc-table__table-wrapper-outer')), 10000);
    
            let cBtns = await driver.findElement(By.css('input[placeholder="Start date"]'));
    
            cBtns.clear();
            let v = await cBtns.getAttribute('value');
            console.log("usdBtn:" + v);
            //await cBtns.sendKeys("Jan 29, 2018");*/
        });
    }
}
exports.CoinMarketCapSpider = CoinMarketCapSpider;
//# sourceMappingURL=CoinMarketCapSpider.js.map