const express = require('express');
const app = express();

const {config} = require('./config/index')

const dataApi = require('./routes/data')

//body parser
app.use(express.json());

dataApi(app)

app.listen(config.port,  function() {
    console.log(`Listening http://localhost:${config.port}`)
});