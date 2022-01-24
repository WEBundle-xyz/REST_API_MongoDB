const express = require('express');

const app = express();

app.get('/quote', function (req, res, next) {
	res.json({
		quote: 'This is the quote!',
	});
});

app.listen(3000);
