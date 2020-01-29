"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_string_operations_1 = require("typescript-string-operations");
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
    static historicalUrl(s) {
        let fn = this.fullName(s);
        return typescript_string_operations_1.String.Format(this.URL_TEMP, fn);
    }
}
exports.CryptoSymbol = CryptoSymbol;
CryptoSymbol.URL_TEMP = 'https://coinmarketcap.com/zh/currencies/{0}/historical-data/';
//# sourceMappingURL=CryptoSymbol.js.map