"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const CryptoSymbol_1 = require("../crypto/cmc/CryptoSymbol");
describe("Test Suite 1", () => {
    it("Test A", () => {
        let bc = CryptoSymbol_1.CryptoSymbol.fullName(CryptoSymbol_1.CPSymbol.BTC);
        assert.equal(bc, "bitcoin");
        let sd = new Date(2017, 0, 1);
        let ed = new Date(2018, 10, 1);
        let cmcurl = CryptoSymbol_1.CryptoSymbol.historicalUrl(CryptoSymbol_1.CPSymbol.BTC, sd, ed);
        console.log("cmcurl:" + cmcurl);
        console.log("sd:" + sd + " ed:" + ed);
        assert.equal(cmcurl, "https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20170101&end=20181101");
    });
});
//# sourceMappingURL=TestBase.js.map