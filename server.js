var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

var apiRouter = require('./app_api/routes/main');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', express.static(path.join(__dirname, '/app_api')));

app.use('/api', apiRouter);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});