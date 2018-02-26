const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/City');
require('./services/mongoose');

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req,res) => {
	res.send({ hi: 'there '});
});

require('./routes/cityRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
