import { Config } from "bzk";
import { DBSaver } from "./db/DBSaver";
import { DBQueryer } from "./db/DBQueryer";
import { DBUtils } from "./db/DBUtils";
import { RObjKey } from "./db/RecordQuery";

export interface SetRecord {

    at: Date;
    hash: string;
    type: string;
    source: string;

}

export class RecordObj {

    public obj: object;

    public constructor(o: object) {
        DBUtils.vaildObj(o);
        this.obj = o;
    }

    public put(k: string, v: any): RecordObj {
        this.obj[k] = v;
        return this;
    }
    
    public get at(): Date {
        return this.obj[RObjKey.at];
    }

    public get hash(): string {
        return this.obj[RObjKey.hash];
    }

    public get source(): string {
        return this.obj[RObjKey.source];
    }

    public get type(): string {
        return this.obj[RObjKey.type];
    }

    public static gen(_o: SetRecord): RecordObj {
        return new RecordObj(_o);
    }


}

export abstract class AtRecord {

    protected config: Config;
    protected saver: DBSaver;
    protected queryer: DBQueryer;


    public constructor(c: Config) {
        this.config = c;
        this.saver = new DBSaver(c);
    }

    public abstract async backup(startAt: Date, endAt: Date);
}