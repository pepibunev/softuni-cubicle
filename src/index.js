const express = require('express');

const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');
const routes = require('./routes');
const dbConnect = require('./config/dbConfig');

const app = express();
const PORT = 5001;

handlebarsConfig(app);
expressConfig(app);

dbConnect()
    .then(() => console.log('DB Connected successfully'))
    .catch(err => console.log('DB error:', err));

//Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
