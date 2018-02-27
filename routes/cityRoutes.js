const mongoose = require('mongoose');

const City = mongoose.model('cities');

module.exports = (app) => {
	// 01 FETCH LIST OF ALL CITIES tested and passed
	app.get('/api/list', async (req, res) => {
		const cities = await City.find({ });
		console.log('cities:', cities);
		res.send(cities);
	});
	// 02 CREATE NEW CITY MODEL INSTANCE untested
	app.post('/api/new', async (req, res) => {
		const { nameCity, nameState } = req.body;
		// make uri versions of each
		const newCity = new City({
			nameCity,
			nameState,
			dateCreated: Date.now()
		});
		const city = await req.newCity.save();
		res.send(city);
	});
};