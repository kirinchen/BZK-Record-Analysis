
import { UntilsUtils, Config } from 'bzk';
import { DBSaver } from './db/DBSaver';
import { ZonedDateTime } from '@js-joda/core';
import { DBUtils } from './db/DBUtils';
import { DBQueryer } from './db/DBQueryer';
import { BtcQuote } from './build-in/BtcQuote';

console.log('Hello world');

const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Test";

mongo.connect(url, function (err, client) {
    if (err) {
        throw err;
    }
    console.log("Connected!!!:" + client);
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
    let c = new Config({});
    /*let dbs = new DBSaver(c);
    await dbs.connect();
    dbs.add([
        {
            at: DBUtils.toDate( new Date()),
            hash: "qqq",
            source: "xxx",
        }
    ]);*/

    let bq = new BtcQuote(c);
    bq.backup(new Date(2020, 1, 10), new Date(2020, 3, 3));

    let dbq = new DBQueryer(c);
    let os = await dbq.findBetweenAt(new Date(2020, 0, 1), new Date(2020, 3, 3));
    console.log("os:" + JSON.stringify(os));
})();







