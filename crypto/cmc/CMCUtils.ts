var dateFormat = require('dateformat');
export class CMCUtils {

    public static C_allStartAt: Date = new Date(2013,0,1); 

    public static dateStr(d: Date) {
        let pat = "yyyymmdd";
        return dateFormat(d, pat);
    }

}