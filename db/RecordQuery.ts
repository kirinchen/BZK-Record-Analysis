
export enum RObjKey {
    at = "at",
    hash = "hash",
    source = "source",
    type = "type"
}

export class RecordQuery {



    //query: object = { $and: [{ price: { $ne: 1.99 } }, { price: { $exists: true } }] };
    private query: any[] = [];

    public startEnd(startAt: Date, endAt: Date): RecordQuery {
        let o = {};
        o[RObjKey.at] = {
            $gte: startAt,
            $lt: endAt,
        };
        this.query.push(o);
        return this;
    }

    public type(_t: string): RecordQuery {
        let o = {};
        o[RObjKey.type] = {
            $eq:_t
        };
        this.query.push(o);
        return this;
    }

    public build() {
        if (this.query.length <= 0) throw new Error("this.query is null :" + this.query);
        if (this.query.length == 1) return this.query[0];
        return { $and: this.query };
    }

    public static q(): RecordQuery {
        return new RecordQuery();
    }




}