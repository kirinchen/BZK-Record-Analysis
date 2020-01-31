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
const { By, Key, until } = SeleniumKit_1.SeleniumKit.getKit();
class CoinMarketCapSpider {
    constructor(c, cb) {
        this.symbol = CryptoSymbol_1.CPSymbol.BTC;
        this.symbol = cb;
        this.sk = new SeleniumKit_1.SeleniumKit(c);
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sk.init();
            try {
                yield this.climb();
            }
            catch (e) {
                console.error(e);
            }
            finally {
                //driver.quit();
            }
        });
    }
    climb() {
        return __awaiter(this, void 0, void 0, function* () {
            let nowAt = new Date();
            let cmcurl = CryptoSymbol_1.CryptoSymbol.historicalUrl(this.symbol, new Date(2020, 0, 1), nowAt);
            yield this.sk.driver.get(cmcurl);
            //await driver.findElement(By.name('cmc-date-range-picker')).sendKeys('cheese', Key.ENTER);
            let firstResult = yield this.sk.driver.wait(until.elementLocated(By.css('.cmc-table__table-wrapper-outer')), 10000);
            let trs = yield this.sk.driver.findElements(By.css('.cmc-table-row'));
            console.log("trs size:" + trs.length);
            trs.forEach(this.parseRow);
        });
    }
    parseRow(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let s = yield e.getText();
            console.log("row:" + s);
        });
    }
}
exports.CoinMarketCapSpider = CoinMarketCapSpider;
//# sourceMappingURL=CoinMarketCapSpider.js.map