var express = require("express"),
    router = express.Router(),
    getXml = require('../Utilities/getXmlToObj');

//Grabs most recent taf data with provided Airport ICAO code.
router.get('/:airportId',function(req, res){
  airport = req.params.airportId
  addsEndpoint = "https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&hoursBeforeNow=0&stationString="+airport
  return getXml(addsEndpoint, function(json){
    res.json(json.response.data[0].TAF);
  });
})

module.exports = router;
