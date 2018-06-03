const mongoose = require('mongoose');

const City = mongoose.model('cities');
// const fileStorage = require('../middlewares/fileStorage');

module.exports = (app) => {
  // USER - fetchAllCitiesReadOnly
  app.get('/api/readonlycitylist', async (req, res) => {
    const cities = await City.find({ });
    res.send(cities);
  });
  // USER - fetchCityReadOnly
  app.get('/api/readonlycity/:cityId', async (req, res) => {
    const city = await City.find({ nameCity: req.params.cityId });
    res.send(city);
  });
  // ADMIN - fetchAllCitiesAdmin
  app.get('/api/admincitylist', async (req, res) => {
    const cities = await City.find({ });
    res.send(cities);
  });
  // ADMIN - fetchCityEdit
  app.get('/api/adminedit/:cityId', async (req, res) => {
    const city = await City.find({ nameCity: req.params.cityId });
    console.log('----CITY', city);
    res.send(city);
  });



  app.get('/api/:stateId', async (req, res) => {
    const cities = await City.find({ nameState: req.params.stateId });
    res.send(cities);
  });
  app.post('/api/new', async (req, res) => {
    const { nameCity, nameState, namePretty } = req.body;
    const newCity = new City({
      nameCity,
      nameState,
      namePretty,
    });
    try {
      await newCity.save();
      res.send(newCity);
    } catch (err) {
      res.status(422).send(err);
    }
  });
  app.post('/api/upload/:cityId', async (req, res) => {
    console.log('req.params.cityId----', req.params.cityId);
    console.log('thisCity', thisCity);
    const thisCity = await City.updateOne({
      nameCity: req.params.cityId,
    }, {
      $set: { restaurants: req.body.restaurants },
    }).exec();
    res.send({});
  });
};
