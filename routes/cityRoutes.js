const mongoose = require('mongoose');

const City = mongoose.model('cities');

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
    res.send(city);
  });
  // ADMIN - uploadList
  app.post('/api/upload/:cityId', async (req, res) => {
    const thisCity = await City.updateOne({
      nameCity: req.params.cityId,
    }, {
      $set: { restaurants: req.body.restaurants },
    }).exec();
    res.send({});
  });
  // ADMIN - submitNew
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
};
