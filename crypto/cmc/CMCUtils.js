"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateFormat = require('dateformat');
class CMCUtils {
    static dateStr(d) {
        let pat = "yyyymmdd";
        return dateFormat(d, pat);
    }
}
exports.CMCUtils = CMCUtils;
//# sourceMappingURL=CMCUtils.js.map