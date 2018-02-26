const mongoose = require('mongoose');
const { Schema } = mongoose;
const RestaurantSchema = require('./CityRestaurant');

const citySchema = new Schema ({
	nameCity: {
		type: String,
		required: true
	},
	nameState: {
		type: String,
		required: true
	},
	uriCity: String,
	uriState: String,
	restaurants: [RestaurantSchema]
});

mongoose.model('cities', citySchema);