import { Config } from "bzk";
import { DBSaver } from "../db/DBSaver";
import { RecordObj } from "../AtRecord";
import { DBQueryer, Cursor } from "../db/DBQueryer";
import { RecordQuery } from "../db/RecordQuery";
let c = new Config({});
let dbs = new DBSaver(c);

let createRow = async (i: number) => {
    let now = new Date();
    let is = i * 60 * 60 * 24;
    let sd = new Date(now.setSeconds(now.getSeconds() + is));
    await dbs.add([
        RecordObj.gen({
            at: sd,
            hash: "h" ,
            source: "xxx",
            type: "ccc"
        }).obj
    ]);
};

test('Insert DB', async () => {
  
    await createRow(0);
});


test('Base Query', async () => {
    console.log("QQ");
    let now = new Date();
    let std = new Date(now.setSeconds(now.getSeconds() - 100000));
    let edd = new Date(now.setSeconds(now.getSeconds() + 100000));
    console.log("std:"+std+" edd:"+edd);
    let dbq = new DBQueryer(c);
    let cur = await dbq.find(RecordQuery.q().startEnd(std, edd));
    let arr = await cur.toArray();
    console.log("count:" + arr.length);
    expect(arr.length > 0).toBeTruthy()
});

test('Jump Insert', async () => {
    for (let i = 0; i < 100;i++) {
        
        if ((i > 30 && i < 50) || (i > 70 && i < 90)) {
            console.log("lost i:"+i);
        } else {
            await createRow(i);
        }
    }
});



