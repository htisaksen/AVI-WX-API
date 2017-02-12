var getXml = require('./Utilities/getXmlToObj');


url = 'https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KFRG'

var x = getXml(url,function(json){
  return json;
})
