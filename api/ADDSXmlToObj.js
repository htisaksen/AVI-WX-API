// Requires --------------------------------------------------------------------
  var Promise = require("bluebird");
  var https = require('https'),
    fs = require('fs'),
    xml2js = require('xml2js');
  var parser = new xml2js.Parser();
// Requires --------------------------------------------------------------------

url = 'https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KFRG'

parser.on('error', function(err) { console.log('Parser error', err); });

// Inits------------------------------------------------------------------------

// We append the XML as text to data
  var data = '';
// Inits------------------------------------------------------------------------


  // https.get(url, function(res) {
  //     if (res.statusCode >= 200 && res.statusCode < 400) {
  //       res.on('data', function(data_) {
  //          data += data_.toString();
  //       });
  //       res.on('end', function() {
  //         parser.parseString(data, function(err, result) {
  //           console.log(data)
  //           console.log('FINISHED', err, result);
  //         });
  //       });
  //     }
  // });

  var parseStringAsync = Promise.promisify(parser.parseString);

  https.get(url, function(res) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on('data', function(data_) {
           data += data_.toString();
        });
        res.on('end', function() {
          parser.parseString(data, function(err, result) {
            console.log(data)
            console.log('FINISHED', err, result);
          });
        });
      }
  });
