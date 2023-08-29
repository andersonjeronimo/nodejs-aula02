
const { MongoClient } = require("mongodb");


async function createConnection() {
    if (!global.connection) {
        let uri = process.env.MONGODB_CONNECTION;
        let client = new MongoClient(uri);
        try {
            const connection = await client.connect();
            global.connection = connection.db(process.env.DB_NAME);
        } catch (error) {
            console.log(error);
            global.connection = null;
        }
    }
}

async function findDocuments(collectionName) {
    await createConnection();
    try {
        const documents = await global.connection
            .collection(collectionName)
            .find({}).toArray();
        return documents;
    } catch (error) {
        console.log(error);
    }
}

async function insertDocument(collectionName, document) {
    await createConnection();
    try {
        const id = await global.connection
            .collection(collectionName)
            .insertOne(document);
        return id;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { findDocuments, insertDocument };