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
const CoinMarketCapSpider_1 = require("./crypto/cmc/CoinMarketCapSpider");
const CryptoSymbol_1 = require("./crypto/cmc/CryptoSymbol");
const bzk_1 = require("bzk");
console.log('Hello world');
const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Test";
mongo.connect(url, function (err, client) {
    if (err) {
        throw err;
    }
    console.log("Connected:" + client);
});
/*
import { Builder, By, Key, until } from "selenium-webdriver";
require('chromedriver');
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('https://www.google.com');

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

        let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        console.log(await firstResult.getAttribute('textContent'));
    }
    finally {
        driver.quit();
    }
})();*/
let c = new bzk_1.Config({});
(function example() {
    return __awaiter(this, void 0, void 0, function* () {
        let cmcs = new CoinMarketCapSpider_1.CoinMarketCapSpider(c, CryptoSymbol_1.CPSymbol.BTC);
        yield cmcs.fetch();
    });
})();
//# sourceMappingURL=app.js.map