const db = require('../data/database');

class Quote {
	static async getRandomQuote() {
		// quotes is the name of the collection inside the 'first-app' database
		const quotes = await db.getDb().collection('quotes').find().toArray();
		const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

		const randomQuote = quotes[randomQuoteIndex];

		return randomQuote.text;
	}
}

module.exports = Quote;
