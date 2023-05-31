const express = require('express');

const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig')
const homeController = require('./controllers/homeController');

const app = express();
const PORT = 5000;

handlebarsConfig(app);
expressConfig(app)

//Routes
app.get('/', homeController.getHome);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});