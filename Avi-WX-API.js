var getXml = require('./getXmlToObj.js')

url = 'https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KFRG'

console.log(getXml(url))
