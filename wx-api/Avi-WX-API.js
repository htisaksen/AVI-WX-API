var express require('express');
      app = express(),
      getXml = require('./Utilities/getXmlToObj'),
      bodyparser = require('body-parser');

//url = 'https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KFRG'

app.use(bodyParser.json());


var x = getXml(url,function(json){
  return json;
})
