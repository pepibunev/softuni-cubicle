const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

const PORT = 5000;

//Handlebars config
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Express config
app.use(express.static(path.resolve(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}..`);
});