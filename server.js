
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //res.send('index.html');
    res.json({mess: "123"});
});

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('port ' + port);
});