console.log('Hello world');

const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Test";

mongo.connect(url, function (err, client) {
    if (err) {
        throw err;
    }
    console.log("Connected:" + client);
});