const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema ({
	name: String,
	address: String,
	city: String,
	state: String,
	phoneNumber: String,
	twoWordDescription: String
});

mongoose.model('restaurants', restaurantSchema);
// module.exports = restaurantSchema;