const { MongoClient } = require('mongodb');
const envdata = require('./envdata.json');

const uri = `mongodb+srv://${envdata.mongodbuser}:${envdata.mongodbpass}@testcluster.vpruvym.mongodb.net/?retryWrites=true&w=majority`;
// console.log(`connection.js::${envdata.mongodbuser}::`)
const client = new MongoClient(uri);

async function insertDB(dbName, collectionName, query){
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    await collection.insertOne(query)
    .catch(err =>{
        console.log(`connection.js=>inserDB::err::${err}::`, err);
        return err;
    });
    return "Data inserted successfully";
}

async function findAllDB(dbName, collectionName){
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const cursor = await collection.find();
    const results = await cursor.toArray();
    console.log(JSON.stringify(results));
    return results;
}

async function findSpecificDB(dbName, collectionName, tag, value){
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    let cursor;
    switch(tag){
        case 'commissioner':
            cursor = await collection.findMany({ commissioner: value });
            break;
        case 'contactType':
            cursor = await collection.findMany({ contactType: value });
            break;
        case 'contactValue':
            cursor = await collection.findMany({ contactValue: value });
            break;
        case 'paid':
            cursor = await collection.findMany({ paid: value });
            break;
        default:
            result = "Cannot search by that tag";
            break;
    }
    const result = await cursor.toArray();
    console.log(JSON.stringify(result));
    return result;
}

module.exports = { insertDB, findAllDB, findSpecificDB };