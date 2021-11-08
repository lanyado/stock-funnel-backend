exports.handler = async function(req, res, db) {
	console.log("the server got a new requestr")

	const express = require('express');
	const bodyParser = require('body-parser');

	const app = express();
	app.use(bodyParser.json()); //need to parse HTTP request body
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	if (req.query.method==='stock-articles'){
		const stockName = req.query.stockName;
		if (!stockName){
			res.status(400).send('The stock name is missing');
			return;
		}
		let data = await get_data(db, stockName);
		res.send(data);
		return;
	}
}