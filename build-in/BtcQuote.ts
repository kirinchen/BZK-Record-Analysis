import { CoinMarketCapSpider, CPSymbol } from 'bzk-proxy-api';
import { AtRecord } from '../AtRecord';
import { DBUtils } from '../db/DBUtils';
import { BISF, BuildInSrc } from './BuildInSrc';
import { RTF, RecordType } from './RecordType';


export class BtcQuote extends AtRecord {

    public async syncUpToDate(startAt: Date) {
        await this.syncTobackup(startAt, new Date());
    }

    public async syncTobackup(startAt: Date, endAt: Date) {

    }

    public async backup(startAt: Date, endAt: Date) {
        let cms = await new CoinMarketCapSpider(this.config, CPSymbol.BTC)
            .setStartAt(startAt)
            .setEndAt(endAt);

        await cms.fetch();

        let ds= cms.getData().map(d => {
            let ans= {
                at: DBUtils.zonedDateTime2Date(d.date),
                hash: DBUtils.toHash(d),
                source: BISF.toSymbol(BuildInSrc.CMC),
                type: RTF.toSymbol(RecordType.BtcQuote),
            }
            return DBUtils.appendObj(ans, d, k => {
                if (k === 'date') return true;
                return false;
            });
        });

        this.saver.add(ds);
    }

}