"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const CryptoSymbol_1 = require("../crypto/cmc/CryptoSymbol");
describe("Test Suite 1", () => {
    it("Test A", () => {
        let bc = CryptoSymbol_1.CryptoSymbol.fullName(CryptoSymbol_1.CPSymbol.BTC);
        assert.equal(bc, "bitcoin");
        let cmcurl = CryptoSymbol_1.CryptoSymbol.historicalUrl(CryptoSymbol_1.CPSymbol.BTC);
        assert.equal(cmcurl, "https://coinmarketcap.com/zh/currencies/bitcoin/historical-data/");
    });
});
//# sourceMappingURL=TestBase.js.map