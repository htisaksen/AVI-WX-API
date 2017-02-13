var express = require("express"),
    router = express.Router();

    router.use('/metar', require('./metar'));

    module.exports = router;
