const mongoose = require('mongoose');
const { Schema } = mongoose;
const RestaurantSchema = require('./CityRestaurant');

const citySchema = new Schema ({
	nameCity: String,
	nameState: String,
	namePretty: String,
  hasLogo: Boolean,
  logoName: String,
	restaurants: [RestaurantSchema],
	dateCreated: Date
});

mongoose.model('cities', citySchema);
