const db = require('../data/database');

class Quote {
	static async getRandomQuote() {
		// quotes is the name of the collection inside the 'first-app' database
		const quotes = await db.getDb().collection('quotes').find().toArray();
		const randomQuote = Math.floor(Math.random() * quotes.length);

		return randomQuote;
	}
}

module.exports = Quote;
