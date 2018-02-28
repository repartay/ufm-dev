const mongoose = require('mongoose');

const City = mongoose.model('cities');

module.exports = (app) => {
	app.get('/api/state', async (req, res) => {
		const cities = await City.find({ });
		res.send(cities);
	});
	
	app.get('/api/:stateId', async (req, res) => {
		const cities = await City.find({ nameState: req.params.stateId });
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