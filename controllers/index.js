var express = require("express"),
    router = express.Router();

router.get('/',function(req,res){
  res.send('Please use /api/metar/(ICAO Code)  OR  /api/taf/(ICAO Code)')
})

router.use('/api/v1/metar', require('./metar'));
router.use('/api/v1/taf', require('./taf'));

module.exports = router;
