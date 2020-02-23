import { Config } from "bzk";
import { ConfigNameF, ConfigName } from "../ConfigName";

import { ZonedDateTime, ZoneId, DateTimeFormatter } from '@js-joda/core'
import { DBer } from "./DBer";
import { DBUtils } from "./DBUtils";

export class DBSaver extends DBer {


    public async add(atobjs: object[]) {
        let collection = await this.initCollection();
        atobjs.forEach(o => DBUtils.vaildObj(o));
        collection.insertMany(atobjs, function (err, result) {
            console.log("err:" + err + " result:" + result);
        });
    }



}