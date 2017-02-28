var express = require("express"),
    router = express.Router(),
    getXml = require('../Utilities/getXmlToObj');

//Grabs most recent metar data with provided Airport ICAO code.
router.get('/:airportId',function(req, res){
  airport = req.params.airportId
  addsEndpoint = "https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString="+airport
  return getXml(addsEndpoint, function(json){
    if(json.response.data[0].METAR){
      res.json(json.response.data[0].METAR);
    } else {
      res.json({"error":"Invalid Airport or no METAR services at Airport"})
    }  });
})

module.exports = router;
