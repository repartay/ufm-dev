const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema ({
	name: String,
	address: String,
	phoneNumber: String,
  	twoWordDescription: String,
	website: String,
	linkYelp: String,
	linkFb: String
});

module.exports = restaurantSchema;
