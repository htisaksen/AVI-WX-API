var express = require("express"),
    router = express.Router();

router.use('/api/metar', require('./metar'));
router.use('/api/taf', require('./taf'));

module.exports = router;
