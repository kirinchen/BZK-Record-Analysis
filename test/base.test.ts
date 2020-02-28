import { Config } from "bzk";
import { DBSaver } from "../db/DBSaver";
import { RecordObj } from "../AtRecord";

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



describe("Test Suite 1",  () => {

    it("Insert DB", async () => {

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

    it("Test A", () => {
        console.log("QQ");
    });


});
