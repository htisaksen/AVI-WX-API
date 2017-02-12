//var getXml = require('./ADDSXmlToObj');
var Promise = require("bluebird");
var getXml = Promise.promisifyAll(require('./ADDSXmlToObj')); // example: xml2js


url = 'https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KFRG'

getXml(url).then(function(result){
  console.log(result)
})
