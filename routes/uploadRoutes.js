const csv = require('fast-csv');
const mongoose = require('mongoose');

const Restaurant = mongoose.model('restaurants');

module.exports = app => {
	app.post('/', async (req, res) => {
		if (!req.files) {
        	return res.status(400).send('No files were uploaded.');
    	}
    	const restaurantFile = req.files.file;
    	const restaurants = [];
    	console.log('restaurantFile', restaurantFile);
    	csv
     		.fromString(restaurantFile.data.toString(), {
         		headers: true,
         		ignoreEmpty: true
     		})
     		.on("data", function(data){
         		data['_id'] = new mongoose.Types.ObjectId();
          
         		restaurants.push(data);
     		})
     		.on("end", function(){
         		Restaurant.create(restaurants, function(err, documents) {
            		if (err) throw err;
         		});
          
         		res.send(restaurants.length + ' authors have been successfully uploaded.');
     		});
	});
};


