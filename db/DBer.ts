import { Config } from "bzk";
import { ConfigNameF, ConfigName } from "../ConfigName";
const mongo = require('mongodb').MongoClient;
export class DBer {

    protected url: string;
    protected db: string;
    protected collectionName: string;
    protected client: any;

    constructor(c: Config) {
        this.db = c.get(ConfigNameF.path(ConfigName.mongodbDatabase), "Test");
        this.url = c.get(ConfigNameF.path(ConfigName.mongodbHost), "mongodb://localhost:27017");
        this.collectionName = c.get(ConfigNameF.path(ConfigName.mongodbCollection), "TestColl");
    }

    public async connect() {
        this.client = await this.connectClient();
    }

    public async initCollection() {
        if (!this.isConnected()) {
            await this.connect();
        }
        let _db = this.client.db(this.db);
        console.log("client:" + this.client + " _db:" + _db);
        let collection = _db.collection(this.collectionName);
        console.log("collection:" + collection);
        return collection;
    }

    public isConnected(): boolean {
        return !!this.client && !!this.client.topology && this.client.topology.isConnected();
    }
    

    public close(): void {
        this.client.close(); //Ãö³¬³s½u
        this.client = null;
    }

    private async connectClient(): Promise<any> {
        return new Promise<any>((rev, rej) => {
            mongo.connect(this.url, function (err, client) {
                if (err) {
                    rej(err);
                    return;
                }
                console.log("Connected!!!:" + client);
                rev(client);
            });

        });
    }

}