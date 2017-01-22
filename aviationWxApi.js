var Client = require('node-rest-client').Client;

var client = new Client();

// direct way
client.get("http://remote.site/rest/xml/method", function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});
