const express = require('express');
require('dotenv').config();
const sequelize = require('./config/connection');
const Model = require('./models');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use( express.json());
app.use( express.urlencoded({ extended: false }));
app.use( cors({
    origin: 'http://localhost:3000' 
}))

app.use('/', routes);

sequelize.sync( {force: false} ).then( () => {
    app.listen(port, () => {
        console.log(`Server running at: http://localhost:${port}`)
    });
})