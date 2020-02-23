import { Config } from "bzk";
import { DBSaver } from "./db/DBSaver";

export abstract class AtRecord {

    protected config: Config;
    protected saver: DBSaver;


    public constructor(c: Config) {
        this.config = c;
        this.saver = new DBSaver(c);
    }

    public abstract async backup(startAt: Date, endAt: Date);
}