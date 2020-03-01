import { Config } from "bzk";
import { DBSaver } from "../db/DBSaver";
import { RecordObj } from "../AtRecord";
import { DBQueryer, Cursor } from "../db/DBQueryer";
import { RecordQuery } from "../db/RecordQuery";

/*
describe("Test Suite 1", () => {
    it("Test A", () => {
        let bc = CryptoSymbol.fullName(CPSymbol.BTC);
        assert.equal(bc, "bitcoin");
        let sd = new Date(2017, 0, 1);
        let ed = new Date(2018, 10, 1);
        let cmcurl = CryptoSymbol.historicalUrl(CPSymbol.BTC, sd, ed);
        console.log("cmcurl:" + cmcurl);
        console.log("sd:" + sd+" ed:"+ed);
        assert.equal(cmcurl, "https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20170101&end=20181101");
    });


});*/

let c = new Config({});

test('Insert DB', async () => {
    let dbs = new DBSaver(c);
    await dbs.add([
        RecordObj.gen({
            at: new Date(),
            hash: "aaa",
            source: "xxx",
            type: "ccc"
        }).obj
    ]);
});


test('Base Query', async () => {
    console.log("QQ");
    let now = new Date();
    let std = new Date(now.setSeconds(now.getSeconds() - 100000));
    let edd = new Date(now.setSeconds(now.getSeconds() + 100000));
    console.log("std:"+std+" edd:"+edd);
    let dbq = new DBQueryer(c);
    let cur = await dbq.find(RecordQuery.q().startEnd(std, edd));
    let arr = await cur.toArray();
    console.log("count:" + arr.length);
    expect(arr.length > 0).toBeTruthy()
});

