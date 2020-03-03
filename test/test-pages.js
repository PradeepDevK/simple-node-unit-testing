const expect = require('chai').expect,
    request = require('request');

it('Main page content', function (done) {
    request('http://localhost:8099/', function (error, response, body) {
        console.log(body);
        expect(body).to.equal('Node Unit-Testing');
        done();
    });
});

it('Main page status', function (done) {
    request('http://localhost:8099/', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('About page content', function (done) {
    request('http://localhost:8099/about', function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});