import { String, StringBuilder } from 'typescript-string-operations';
import { CMCUtils } from './CMCUtils';
export enum CPSymbol {
    BTC,
}

export class CryptoSymbol {

    static URL_TEMP: string = 'https://coinmarketcap.com/currencies/{0}/historical-data/?start={1}&end={2}';

    public static fullName(s: CPSymbol) {
        if (s == CPSymbol.BTC) return "bitcoin";
        throw new Error("not support "+s);
    }

    public static historicalUrl(s: CPSymbol, start: Date, end: Date): string {
        let fn = this.fullName(s);
        let ss = CMCUtils.dateStr(start);
        let es = CMCUtils.dateStr(end);
        return String.Format(this.URL_TEMP, fn,ss,es);
    }




}



