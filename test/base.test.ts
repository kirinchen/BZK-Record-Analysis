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
    return sd;
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
    let st: Date;
    let ed: Date;
    for (let i = 0; i < 100;i++) {
        if ((i > 30 && i < 50) || (i > 70 && i < 90)) {
            //console.log("lost i:"+i);
        } else {
            let d = await createRow(i);
            if (st == null) st = d;
            ed = d;
            console.log(st.toISOString() + "_" + ed.toISOString());
        }
    }
    let dbq = new DBQueryer(c);
    console.log(st.toISOString() + "  !!!!  " + ed.toISOString());
    let ar = await dbq.listLost(st, ed, "ccc", 60 * 60 * 24);
    expect(ar.length > 0).toBeTruthy();
    console.log(JSON.stringify(ar));
});







