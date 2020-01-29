"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_string_operations_1 = require("typescript-string-operations");
const CMCUtils_1 = require("./CMCUtils");
var CPSymbol;
(function (CPSymbol) {
    CPSymbol[CPSymbol["BTC"] = 0] = "BTC";
})(CPSymbol = exports.CPSymbol || (exports.CPSymbol = {}));
class CryptoSymbol {
    static fullName(s) {
        if (s == CPSymbol.BTC)
            return "bitcoin";
        throw new Error("not support " + s);
    }
    static historicalUrl(s, start, end) {
        let fn = this.fullName(s);
        let ss = CMCUtils_1.CMCUtils.dateStr(start);
        let es = CMCUtils_1.CMCUtils.dateStr(end);
        return typescript_string_operations_1.String.Format(this.URL_TEMP, fn, ss, es);
    }
}
exports.CryptoSymbol = CryptoSymbol;
CryptoSymbol.URL_TEMP = 'https://coinmarketcap.com/currencies/{0}/historical-data/?start={1}&end={2}';
//# sourceMappingURL=CryptoSymbol.js.map