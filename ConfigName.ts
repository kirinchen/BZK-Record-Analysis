export enum ConfigName {
    mongodbHost, mongodbCollection, mongodbDatabase
}

export class ConfigNameF {

    public static path(c: ConfigName): string {
        if (c == ConfigName.mongodbHost) return "ra.mongodb.host";
        if (c == ConfigName.mongodbDatabase) return "ra.mongodb.database";
        if (c == ConfigName.mongodbCollection) return "ra.mongodb.collection";
        throw new Error("not support :" + c);
    }

}