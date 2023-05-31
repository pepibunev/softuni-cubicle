const express = require('express');
const app = express();


const PORT = 5000;

//Handlebars config
const handlebarsConfig = require('./config/handlebarsConfig');
handlebarsConfig(app);

//Express config
const expressConfig = require('./config/expressConfig')
expressConfig(app)

//Routes
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});