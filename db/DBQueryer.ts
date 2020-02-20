import { DBer } from "./DBer";

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
        cursor.skip(0);
        return new Promise<object[]>((rev, rej) => {
            let ans: object[] = [];
            cursor.each(function (err, doc) {
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