import { DateTimeFormatter,ZonedDateTime, convert } from "@js-joda/core";

export class DBUtils {

    public static toDateString(inDateStr: string, formate: string): Date;
    public static toDateString(inDateStr: string, formate: DateTimeFormatter): Date;
    public static toDateString(d: Date): Date;
    public static toDateString(arg1: string | Date, arg2?: string | DateTimeFormatter): Date {
        if (typeof arg1 === 'string' && typeof arg2 === 'string' ) {
            let ldt: ZonedDateTime = ZonedDateTime.parse(arg1, DateTimeFormatter.ofPattern(arg2));
            return this.zonedDateTime2MongoISoDate(ldt);
        }
        if (typeof arg1 === 'string' &&  arg2 instanceof DateTimeFormatter) {
            let ldt: ZonedDateTime = ZonedDateTime.parse(arg1, arg2);
            return this.zonedDateTime2MongoISoDate(ldt);
        }
        if (arg1 instanceof Date) {
            let ldt: ZonedDateTime = ZonedDateTime.parse(arg1.toISOString());
            return this.zonedDateTime2MongoISoDate(ldt);
        }
        throw new Error("not support this!!!");
    }

    public static zonedDateTime2MongoISoDate(ldt: ZonedDateTime): Date {
        return convert(ldt).toDate();
    }

}

