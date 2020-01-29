import { SeleniumKit } from "./comm/SeleniumKit";

console.log('Hello world');
//require('chromedriver');
/*const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Test";

mongo.connect(url, function (err, client) {
    if (err) {
        throw err;
    }
    console.log("Connected:" + client);
});*/
/*
const { Builder, By, Key, until } = require('selenium-webdriver');

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

let sk = SeleniumKit.getInstance();
let { By, Key, until } = sk.getKit();

(async function example() {
    let driver = await sk.buildBrowser();
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
})();