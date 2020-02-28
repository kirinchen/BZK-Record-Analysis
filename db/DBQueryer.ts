import { DBer } from "./DBer";
import { privateDecrypt } from "crypto";

export class Cursor {

    private c: any;

    constructor(_c: any) {
        this.c = _c;
    }

    public count(): number {
        return this.c.count();
    }

    public toArray(): object[] {
        this.c.skip(0);
        let ans: object[] = [];
        this.c.each(function (err, doc) {
            if (err) {
                throw new Error(err);
            } else {
                console.log('Fetched:', doc);
                if (doc !== null) {
                    ans.push(doc);
                } else {
                    return ans;
                }
            }
        });
        return ans;
    }

}

export class DBQueryer extends DBer {

    public async findBetweenAt(start: Date, end: Date): Promise<Cursor> {
        let col = await this.initCollection();
        let cursor = col.find({
            "at": {
                $gte: start,
                $lt: end,
            }
        });
        //Skip specified records. 0 for skipping 0 records.
        return new Cursor(cursor);
    }

    public async listLost(start: Date, end: Date, gapSnc: number): Promise<{ st: Date, ed: Date }[]> {
        if (gapSnc <= 0) throw new Error(gapSnc +" gapSnc <=0 ");
        let ans : { st: Date, ed: Date }[]=[];
        let dStart: Date = start;
        while (end > dStart) {
            let dend: Date = new Date(dStart.setSeconds(dStart.getSeconds() + gapSnc));
            let cos = await this.findBetweenAt(dStart, dend);
            if (cos.count() <= 0) {
                ans.push({
                    st: dStart,
                    ed: dend
                });
            }
        }
        return ans;
    }
}