var express = require('express');
var app = express();
var getXml = require('./Utilities/getXmlToObj');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//prettify json output
app.set('json spaces', 2);

// Routes are in controllers
app.use(require('./controllers'));

app.listen('3005', function(){
  console.log('Listening on port 3005')
});
