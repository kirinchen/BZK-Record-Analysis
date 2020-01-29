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
const SeleniumKit_1 = require("./comm/SeleniumKit");
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
let sk = SeleniumKit_1.SeleniumKit.getInstance();
let { By, Key, until } = sk.getKit();
(function example() {
    return __awaiter(this, void 0, void 0, function* () {
        let driver = yield sk.buildBrowser();
        try {
            // Navigate to Url
            yield driver.get('https://www.google.com');
            // Enter text "cheese" and perform keyboard action "Enter"
            yield driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);
            let firstResult = yield driver.wait(until.elementLocated(By.css('h3>div')), 10000);
            console.log(yield firstResult.getAttribute('textContent'));
        }
        finally {
            driver.quit();
        }
    });
})();
//# sourceMappingURL=app.js.map