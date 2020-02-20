import { CoinMarketCapSpider, CPSymbol } from 'bzk-proxy-api';
import { AtRecord } from '../AtRecord';


export class BtcQuote extends AtRecord {

    public async backup(startAt: Date, endAt: Date) {
        let cms = await new CoinMarketCapSpider(this.config, CPSymbol.BTC)
            .setStartAt(startAt)
            .setEndAt(endAt);

        await cms.fetch();

        cms.getData();

        TODO

    }

}