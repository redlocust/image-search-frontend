var express = require("express");

var router = express.Router();

var imageSearch = require('../controllers/imageSearch');

router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

router.get('/latest', imageSearch.getLatestQuery);
router.get('/:imageQuery', imageSearch.getImageQuery);

module.exports = router;