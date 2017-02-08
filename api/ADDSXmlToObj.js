// Requires --------------------------------------------------------------------
  var Promise = require("bluebird");
  var https = require('https'),
    fs = require('fs'),
    xml2js = require('xml2js');
  var parser = new xml2js.Parser();
// Requires --------------------------------------------------------------------

parser.on('error', function(err) { console.log('Parser error', err); });

// Inits------------------------------------------------------------------------

// We append the XML as text to data
  var data = '';
// Inits------------------------------------------------------------------------


  https.get(xmlUrl, function(res) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on('data', function(data_) {
           data += data_.toString();
        });
        res.on('end', function() {
          parser.parseString(data, function(err, result) {
            console.log('FINISHED', err, result);
            var passThrough = result;
          });
        });
      }
  });
  return passThrough
