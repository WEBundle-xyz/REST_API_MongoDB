const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
	const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
	database = client.db('first-app'); // this is the name of the database
}

function getDb() {
	if (!database) {
		throw new Error('Database is not connected!');
	}

	return database;
}
module.exports = {
	initDb: initDb,
	getDb: getDb,
};
