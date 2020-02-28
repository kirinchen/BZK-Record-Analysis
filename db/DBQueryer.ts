import { DBer } from "./DBer";
import { privateDecrypt } from "crypto";

export class DBQueryer extends DBer {

    public async findBetweenAt(start: Date, end: Date): Promise<object[]> {
        let col = await this.initCollection();
        let cursor = col.find({
            "at": {
                $gte: start,
                $lt: end,
            }
        });
        //Skip specified records. 0 for skipping 0 records.
        return this.cursor2Array(cursor);
    }

    private cursor2Array(cursor: any): object[] {
        cursor.skip(0);
        let ans: object[] = [];
        cursor.each(function (err, doc) {
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