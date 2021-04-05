const dbClient = require("../config/DBconfig");
const mongo = require('mongodb')

dbClient.connect({ useNewUrlParser: true });

const getAll = async () => {
    try {

        const db = dbClient.db("client");
        const coll = db.collection("people");

        const querry = await coll.find({}).toArray();

        console.log(querry);

    } catch (error) {
        console.log(error.stack);
    }

}

const createOne = async () => {

    try {
        const db = dbClient.db("client");
        const coll = db.collection("people");

        let personDocument = {
            "name": { "first": "Paco", "last": "Lopez" },
            "heartbeat": 76
        }

        const p = await coll.insertOne(personDocument);

    } catch (error) {
        console.log(error.stack);
    }

}


const deleteOne = async (id) => {

    try {


        const db = dbClient.db("client");
        const coll = db.collection("people");

        const target = { _id: new mongo.ObjectId(id) };

        const p = await coll.deleteOne(target);


    } catch (error) {
        console.log(error.stack);
    }

}

const updateOne = async (id, document) => {

    await dbClient.connect();

    const db = dbClient.db("client");
    const coll = db.collection("people");

    const myquerry = { _id: new mongo.ObjectId(id) };
    var newValues = { $set: document };

    const p = await coll.updateOne(myquerry, newValues);

}

module.exports = {
    getAll: getAll,
    createOne: createOne,
    deleteOne: deleteOne,
    updateOne: updateOne
}