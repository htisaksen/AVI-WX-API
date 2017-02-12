var getXml = require('./getXmlToObj');


url = 'https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KFRG'

var x = getXml(url,function(json){
  return json;
})
console.log(x)
