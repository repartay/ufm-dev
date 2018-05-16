const csv = require('fast-csv');
const mongoose = require('mongoose');

const City = mongoose.model('cities');

module.exports = (app) => {
  app.post('/api/new', async (req, res) => {
    console.log('----req.body', req, '-------');
    const { nameCity, nameState } = req;
    const newCity = new City({
      nameCity,
      nameState,
    });
    console.log('newCity', newCity);
    try {
      await newCity.save();
      res.send(newCity);
    } catch (err) {
      res.status(422).send(err);
    }
    // make uri versions of each
  });

// app.get('/api/:cityId', async (req, res) => {
//  const cities = await City.find({ nameState: req.params.stateId });
//  res.send(cities);
// });
};
