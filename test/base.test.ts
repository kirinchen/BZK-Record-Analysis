import { CryptoSymbol, CPSymbol } from '../crypto/cmc/CryptoSymbol';
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

test('Base Test', () => {
    expect(3).toBe(3);
});
