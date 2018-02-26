const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/City');
require('./models/CityRestaurant');
require('./services/mongoose');

mongoose.connect(keys.mongoURI);
// mongoose.connect('mongdb://localhost/server');

const app = express();

app.use(fileUpload());

require('./routes/uploadRoutes')(app);
// app.get('/template', template.get);
// app.post('/', upload.post);

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
