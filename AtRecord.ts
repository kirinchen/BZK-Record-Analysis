import { Config } from "bzk";

export abstract class AtRecord {

    protected config: Config;

    public constructor(c: Config) {
        this.config = c;
    }

    public abstract async backup(startAt: Date, endAt: Date);
}