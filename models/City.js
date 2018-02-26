const mongoose = require('mongoose');
const { Schema } = mongoose;
const RestaurantSchema = require('./CityRestaurant');

const citySchema = new Schema ({
	nameCity: String,
	nameState: String,
	uriCity: String,
	uriState: String,
	restaurants: [RestaurantSchema],
	dateCreated: Date
});

mongoose.model('cities', citySchema);