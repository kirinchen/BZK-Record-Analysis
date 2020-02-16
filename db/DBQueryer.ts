import { DBer } from "./DBer";

export class DBQueryer extends DBer {

    public async findAt() {
        let col = await this.initCollection();
        let cursor = col.find({
            "at": {
                $gte: new Date("2010-01-01T00:00:00Z"),
                $lt: new Date("2020-05-01T00:00:00Z"),
            }
        });

        //Limit to max 10 records
        cursor.limit(50);

        //Skip specified records. 0 for skipping 0 records.
        cursor.skip(0);

        cursor.each(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log('Fetched:', doc);
                if (doc !== null) {

                }

            }
        });
    }


}