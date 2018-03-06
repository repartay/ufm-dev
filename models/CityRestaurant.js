const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema ({
	name: String,
	address: String,
	city: String,
	state: String,
	category: String,
	phoneNumber: String,
	website: String,
	linkYelp: String,
	linkFb: String
});

module.exports = restaurantSchema;