module.exports = function getXML(xmlUrl,callback){
// Requires --------------------------------------------------------------------
  var https = require('https'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser();
// End Requires ----------------------------------------------------------------

  // We append the XML as a string to data
  var data = "";

  //error check on xml2js parse
  parser.on('error', function(err) { console.log('Parser error', err); });


    https.get(xmlUrl, function(res) {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          res.on('data', function(data_) {
             data += data_.toString();
          });
          res.on('end', function() {
            parser.parseString(data, function(err, result) {
              //console.log('FINISHED', err, result);
              //var json = JSON.stringify(result)
              //console.log(json)
              return callback(result);
            });
          });
        }
    });
};
