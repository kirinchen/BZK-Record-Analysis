var dateFormat = require('dateformat');
export class CMCUtils {

    public static dateStr(d: Date) {
        let pat = "yyyymmdd";
        return dateFormat(d, pat);
    }

}