/**
 * Module tests
 */

var logoran = require('logoran')
  , should = require('should');

describe('module', function() {
  it('should expose Router', function(done) {
    var Router = require('..');
    should.exist(Router);
    Router.should.be.type('function');
    done();
  });
});
