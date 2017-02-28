var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Weather API Tests', function() {
  it('Should provide a valid METAR', function(done) {
    chai.request('http://localhost:3000')
      .get('/metar/kjfk')
      .end(function(err, res) {
        expect(res).to.be.a('object');
        done();
      });
  });

  it('Should provide a valid TAF', function(done) {
    chai.request('http://localhost:3000')
      .get('/taf/kjfk')
      .end(function(err, res) {
        expect(res).to.be.a('object');
        done();
      });
  });
});
