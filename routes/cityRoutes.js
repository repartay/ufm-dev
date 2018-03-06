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
	app.get('/api/:cityId', async (req, res) => {
		const cities = await City.find({ nameCity: req.params.cityId });
		res.send(cities);
	});

	app.post('/api/new', async (req, res) => {
		console.log('----req.body', req.body, '--------');
		const { nameCity, nameState, namePretty } = req.body;
		const newCity = new City({
			nameCity,
			nameState,
			namePretty
		});
		console.log('newCity', newCity);
		try {
			await newCity.save();
			res.send(newCity);
		} catch (err) {
			res.status(422).send(err);
		}
	});
	app.get('/api/new/:cityId', async (req, res) => {
		const cities = await City.find({ nameCity: req.params.cityId });
		res.send(cities);
	});
	/*
	app.post('/api/edit/:cityId', async (req, res) => {
		console.log('city EDIT req.body', req.body);
		const thisCity = await City.updateOne({ 
			nameCity: req.params.cityId,
			restaurants: req.body.restaurants
		});
		res.send({});
	});
	*/
};