var express = require("express");
var request = require('request');

var router = express.Router();

var Query = require('../models/db');

router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

///////
//  Create page with latest queries
//////
router.get('/latest', (req, res) => {

    Query.find({}, null, {sort: '-when'}, (err, records) => {
        if (err) {res.json({error: err.log})}

        var numberRecords = (records.length > 10) ? (10)  : records.length;

        var arr = [];

        for(var i = 0, j = numberRecords; i < j; i++ ) {

            var obj = {};
            obj.term = records[i].term;
            obj.when = records[i].when;
            arr.push(obj);
        }

        res.json(arr);
    });
});


router.get('/:imageQuery', function (req, res, next) {

    var offset = req.query.offset;
    var startImageInterval = (offset - 1) * (10);
    var endImageInterval = (offset) * (10);

    var url = 'https://www.googleapis.com/customsearch/v1?q='+ req.params.imageQuery +'&cx=009450657259060162830%3Az9mqnzccxpi&searchType=image&lowRange='+ startImageInterval + '&key=AIzaSyCGsdsSaRofXRsQzrMn5S1QRw0rCh9lUfU';

    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            var json = parseJSON(body, offset);
            res.contentType('application/json');
            res.send(json);
            recordQueryToDB(req.params.imageQuery);

        }
    });

});

function parseJSON (json) {
    var arr = [];

    if (json.items === undefined) {return arr}

    json.items.forEach(function (elem, index) {

        var obj = {};
        obj.url = elem.link;
        obj.snippet = elem.title;
        obj.thumbnail = elem.image.thumbnailLink;
        obj.context = elem.image.contextLink;
        arr.push(obj);
    });

    return JSON.stringify(arr);
}


function recordQueryToDB(query) {
    var record = new Query({
        term: query,
        when: (new Date().toISOString())
    });

    record.save(function (err, record) {
        if (err) return console.error(err);
        console.log('we save: ' + query);
    });
}


module.exports = router;