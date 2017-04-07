var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

var apiRouter = require('./app_api/routes/main');

var port = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', express.static(path.join(__dirname, '/app_api')));

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});