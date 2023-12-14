const express = require("express");
const path = require('path');
const app = express();

//CORS Configuration
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//Middlewares
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({limit: '50mb'}));

//Routes
const reportes = require('./routes/reportes');

app.use('/api/v1/reportes', reportes);

app.use('/',(req,res) => {
    res.send('<h1> Hello World </h1>');
});

module.exports = app;