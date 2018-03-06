const mongoose = require('mongoose');

const City = mongoose.model('cities');
// const fileStorage = require('../middlewares/fileStorage');

module.exports = (app) => {
	app.get('/api/state', async (req, res) => {
		const cities = await City.find({ });
		res.send(cities);
	});
	
	app.get('/api/:stateId', async (req, res) => {
		const cities = await City.find({ nameState: req.params.stateId });
		res.send(cities);
	});

	app.post('/api/new', async (req, res) => {
		console.log('----req.body', req.body, '--------');
		const { nameCity, nameState, restaurants } = req.body;
		console.log('-----req.files', req.files);
		const newCity = new City({
			nameCity,
			nameState,
			restaurants
		});
		console.log('newCity', newCity);
		try {
			await newCity.save();
			res.send(newCity);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};