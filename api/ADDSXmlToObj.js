module.exports = function getXML(xmlEndPoint){
// Requires --------------------------------------------------------------------
  var Promise = require("bluebird"),
    https = require('https'),
    fs = require('fs'),
    xml2js = Promise.promisifyAll(require('xml2js')), // example: xml2js
    parser = new xml2js.Parser();
// Requires --------------------------------------------------------------------

parser.on('error', function(err) { console.log('Parser error', err); });

// Inits------------------------------------------------------------------------

// We append the XML as text to data
  var data = '';
// Inits------------------------------------------------------------------------

  https.get(xmlEndPoint, function(res) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on('data', function(data_) {
           data += data_.toString();
           var xml = data
           xml2js.parseStringAsync(xml)
           .then(function (result) {
             console.log("result = " + JSON.stringify(result));
             //return result;
           })
           .catch(function (err) {
             //console.err(err);
             //return err;
           });
        });
      }
  });
};
