import { SeleniumKit } from "./comm/SeleniumKit";
import { CoinMarketCapSpider } from "./crypto/cmc/CoinMarketCapSpider";
import { CPSymbol } from "./crypto/cmc/CryptoSymbol";
import { UntilsUtils } from 'bzk';

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



(async function example() {
    let cmcs = new CoinMarketCapSpider(CPSymbol.BTC);
    await cmcs.fetch();
})();



