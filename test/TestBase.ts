import assert = require('assert');
import { CryptoSymbol, CPSymbol } from '../crypto/cmc/CryptoSymbol';

describe("Test Suite 1", () => {
    it("Test A", () => {
        let bc = CryptoSymbol.fullName(CPSymbol.BTC);
        assert.equal(bc, "bitcoin");
        let cmcurl = CryptoSymbol.historicalUrl(CPSymbol.BTC);
        assert.equal(cmcurl, "https://coinmarketcap.com/zh/currencies/bitcoin/historical-data/");
    });


});
