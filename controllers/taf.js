var express = require("express"),
    router = express.Router(),
    getXml = require('../Utilities/getXmlToObj');

//Grabs most recent taf data with provided Airport ICAO code.
router.get('/:airportId',function(req, res){
  airport = req.params.airportId
  addsEndpoint = "https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&hoursBeforeNow=3&timeType=issue&mostRecent=true&stationString="+airport
  return getXml(addsEndpoint, function(json){
    if(json.response.data[0].TAF){
      res.json(json.response.data[0].TAF[0]);
    } else {
      res.json({"error":"Invalid Airport or no TAF services at Airport"})
    }
  });
})

module.exports = router;
