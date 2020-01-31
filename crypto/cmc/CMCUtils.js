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
CMCUtils.C_allStartAt = new Date(2013, 0, 1);
//# sourceMappingURL=CMCUtils.js.map