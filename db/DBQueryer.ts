import { DBer } from "./DBer";
import { privateDecrypt } from "crypto";
import { RecordQuery } from "./RecordQuery";

export class Cursor {

    private c: any;

    constructor(_c: any) {
        this.c = _c;
    }

    public async count(): Promise< number> {
        return await this.c.count();
    }

    public async toArray(): Promise<object[]> {
        return new Promise<object[]>((rev, rej) => {
            this.c.skip(0);
            let ans: object[] = [];
            this.c.each(function (err, doc) {
                if (err) {
                    rej(err);
                } else {
                    console.log('Fetched:', doc);
                    if (doc !== null) {
                        ans.push(doc);
                    } else {
                        rev(ans);
                    }
                }
            });
        });


    }

}

export class DBQueryer extends DBer {

    /*public async findBetweenAt(start: Date, end: Date): Promise<Cursor> {
        let col = await this.initCollection();
        let cursor = col.find({
            "at": {
                $gte: start,
                $lt: end,
            }
        });
        return new Cursor(cursor);
    }*/

    public async find(rq: RecordQuery): Promise<Cursor> {
        let col = await this.initCollection();
        let cursor = col.find(rq.build()); 
        return new Cursor(cursor);
    }

    

    public async listLost(start: Date, end: Date, type: string, gapSnc: number): Promise<{ st: Date, ed: Date }[]> {
        if (gapSnc <= 0) throw new Error(gapSnc +" gapSnc <=0 ");
        let ans : { st: Date, ed: Date }[]=[];
        let dStart: Date = start;
        while (end > dStart) {
            let dend: Date = new Date(dStart.setSeconds(dStart.getSeconds() + gapSnc));
            //let cos = await this.findBetweenAt(dStart, dend);
            let cos = await this.find(RecordQuery.q().startEnd(dStart, dend).type(type));
            let count = await cos.count();
            if (count <= 0) {
                ans.push({
                    st: dStart,
                    ed: dend
                });
            }
        }
        return ans;
    }
}