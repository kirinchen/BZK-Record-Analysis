import assert = require('assert');
import { CoinMarketCapSpider } from '../crypto/cmc/CoinMarketCapSpider';
import { CPSymbol } from '../crypto/cmc/CryptoSymbol';


describe("Test Suite 1", () => {
    it("Test A", async () => {
        //this.timeout(9000); 
        let cmcs = new CoinMarketCapSpider(CPSymbol.BTC);
        await cmcs.fetch();
        assert.ok(true, "This shouldn't fail");
    }).timeout(9000);


});
