module.exports = function getXML(xmlUrl){
// Requires --------------------------------------------------------------------
  var https = require('https'),
    fs = require('fs'),
    xml2js = require('xml2js');
  var parser = new xml2js.Parser();
// End Requires --------------------------------------------------------------------


// Inits------------------------------------------------------------------------

  // We append the XML as text to data
  var data = "";
// End Inits------------------------------------------------------------------------

  //error check on xml2js parse
  parser.on('error', function(err) { console.log('Parser error', err); });

  https.get(xmlUrl, function(res) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on('data', function(data_) {
           data += data_.toString();
           //console.log(data)
        });
        res.on('end', function() {
          parser.parseString(data, function(err, result) {
            //console.log('FINISHED', err, result);
          });
        });
      }
  });
};
