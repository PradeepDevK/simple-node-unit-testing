const expect = require('chai').expect,
    request = require('request');

describe('Status and Content', () => {
    describe('Main Page', () => {
        it('status', (done) => {
            request('http://localhost:8099/', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', (done) => {
            request('http://localhost:8099/', (error, response, body) => {
                expect(body).to.equal('Node Unit-Testing');
                done();
            });
        });
    });

    describe('About Page', () => {
        it('status', (done) => {
            request('http://localhost:8099/about', (error, response, body) => {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });
});