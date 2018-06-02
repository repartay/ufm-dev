const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  address: String,
  cityName: String,
  stateName: String,
  phoneNumberPrefix: String,
  phoneNumberBase: String,
  twoWordDescription: String,
  hasAlcohol: String,
  hasBreakfast: String,
  linkFb: String,
  linkYelp: String,
  isChamberMember: String,
  price: String,
});

module.exports = restaurantSchema;
