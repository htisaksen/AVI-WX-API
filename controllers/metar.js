var express = require("express"),
    router = express.Router(),
    getXml = require('../Utilities/getXmlToObj');

//Grabs most recent metar data with provided Airport ICAO code.
router.get('/:airportId',function(req, res){
  airport = req.params.airportId
  addsEndpoint = "https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString="+airport
  return getXml(addsEndpoint, function(json){
    res.json(json.response.data[0].METAR[0]);
  });
})

module.exports = router;
