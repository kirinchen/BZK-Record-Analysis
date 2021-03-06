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
        let rStart, rEnd: Date;
        while (end > dStart) {
            let _dStart = new Date(dStart);
            let dend: Date = new Date(_dStart.setSeconds(_dStart.getSeconds() + gapSnc));
            //console.log(dend.toISOString() + " : " + dStart.toISOString());
            //let cos = await this.findBetweenAt(dStart, dend);
            let cos = await this.find(RecordQuery.q().startEnd(dStart, dend).type(type));
            let count = await cos.count();
            if (count <= 0) {
                if (!rStart) rStart =  new Date( dStart);
                rEnd = new Date( dend);
            } else {
               
            
                if (rStart != null && rEnd != null) {
                    ans.push({
                        st: rStart,
                        ed: rEnd
                    });
                    rStart = null;
                    rEnd = null;
                }

            }
            dStart = dend;

        }
        return ans;
    }
}