import { DateTimeFormatter, ZonedDateTime, convert } from "@js-joda/core";
import { RObjKey } from "./RecordQuery";
let sha1= require('sha1')

export class DBUtils {

    public static toDate(inDateStr: string, formate: string): Date;
    public static toDate(inDateStr: string, formate: DateTimeFormatter): Date;
    public static toDate(d: Date): Date;
    public static toDate(arg1: string | Date, arg2?: string | DateTimeFormatter): Date {
        if (typeof arg1 === 'string' && typeof arg2 === 'string' ) {
            let ldt: ZonedDateTime = ZonedDateTime.parse(arg1, DateTimeFormatter.ofPattern(arg2));
            return this.zonedDateTime2Date(ldt);
        }
        if (typeof arg1 === 'string' &&  arg2 instanceof DateTimeFormatter) {
            let ldt: ZonedDateTime = ZonedDateTime.parse(arg1, arg2);
            return this.zonedDateTime2Date(ldt);
        }
        if (arg1 instanceof Date) {
            let ldt: ZonedDateTime = ZonedDateTime.parse(arg1.toISOString());
            return this.zonedDateTime2Date(ldt);
        }
        throw new Error("not support this!!!");
    }

    public static zonedDateTime2Date(ldt: ZonedDateTime): Date {
        return convert(ldt).toDate();
    }

    public static vaildObj(obj: object) {
        if (!(obj[RObjKey.at] instanceof Date)) throw new Error("at not Date");
        if (typeof obj[RObjKey.hash] !== 'string') throw new Error("hash not string");
        if (typeof obj[RObjKey.source] !== 'string') throw new Error("source not string");
        if (typeof obj[RObjKey.type] !== 'string') throw new Error("type not string");

    }

    public static appendObj(o: object, apo: object, skip: (key: string) => boolean): object {
        for (let [key, value] of Object.entries(apo)) {
            if (skip(key)) continue;
            o[key] = value;
        }
        return o;
    }

    public static toHash(obj: object): string {
        let s1: string = sha1(JSON.stringify(obj));
        return s1.substr(0,16);
    }

    

}

