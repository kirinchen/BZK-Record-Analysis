import { String, StringBuilder } from 'typescript-string-operations';
export enum CPSymbol {
    BTC,
}

export class CryptoSymbol {

    static URL_TEMP: string = 'https://coinmarketcap.com/zh/currencies/{0}/historical-data/';

    public static fullName(s: CPSymbol) {
        if (s == CPSymbol.BTC) return "bitcoin";
        throw new Error("not support "+s);
    }

    public static historicalUrl(s: CPSymbol) {
        let fn = this.fullName(s);
        return String.Format(this.URL_TEMP, fn);
    }


}



