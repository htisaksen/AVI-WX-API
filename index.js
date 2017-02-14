var express = require('express');
var app = express();
var getXml = require('./Utilities/getXmlToObj');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./controllers'));

app.listen('3000', function(){
  console.log('Listening on port 3000')
});
