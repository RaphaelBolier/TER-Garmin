const dbClient = require('../config/DBconfig');


const getAll = async () => {

    await dbClient.connect();

    const db = dbClient.db("client");
    const coll = db.collection("people");

    const querry = await coll.find({}).toArray();

    console.log(querry);

}

/* TODO 
    Je dois tester si les fonctions si dessous fonctionnent bien avec notre base de donnees
*/
const createOne = async (document) => {
    
    await dbClient.connect();

    const db = dbClient.db("client");
    const coll = db.collection("people");
    
    const p = await coll.insertOne(document, function (err, res) {
        if (err) {
            throw err;
        }else {
            console.log("document inserted successfully")
        }
    });
}

const deleteOne = async (id) => {
    await dbClient.connect();

    const db = dbClient.db("client");
    const coll = db.collection("people");

    const myquerry = { _id: id};

    const p = await coll.deleteOne(myquerry, function (err, obj) {
        if (err) {
            throw err;
        }else {
            console.log("document deleted successfully");
        }
    });
}

const updateOne = async (id, document) => {
    await dbClient.connect();

    const db = dbClient.db("client");
    const coll = db.collection("people");

    const myquerry = { _id: id};
    var newValues = { $set: document };

    const p = await coll.updateOne(myquerry, newValues, function (err, obj) {
        if (err) {
            throw err;
        }else {
            console.log("document updated successfully");
        }
    });
}

module.exports = {
    getAll: getAll,
    createOne: createOne,
    deleteOne: deleteOne,
    updateOne: updateOne
}