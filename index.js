const express = require('express');
require('dotenv').config();
const sequelize = require('./config/connection');
const Model = require('./models');

const app = express();
const port = process.env.PORT;

sequelize.sync( {force: true} ).then( () => {
    app.listen(port, () => {
        console.log(`Server running at: http://localhost:${port}`)
    });
})