
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //res.send('index.html');
    res.json({mess: "123"});
});

app.listen(3000, () => {
    console.log('port 3000');
});