const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//requiring routes
const homeRoutes = require('./routes/home.js');

//configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//Routes
app.use('/', homeRoutes);

//Server
app.listen(3000, () => console.log('server has started'));
