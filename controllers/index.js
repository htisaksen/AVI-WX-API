var express = require("express"),
    router = express.Router();

router.use('/metar', require('./metar'));
router.use('/taf', require('./taf'));

module.exports = router;
