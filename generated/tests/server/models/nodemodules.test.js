var dbURI = 'mongodb://localhost:27017/meaniscule-app-tests';
var clearDB = require('mocha-mongoose')(dbURI);

var expect = require('chai').expect;
var mongoose = require('mongoose');

require('../../../server/db/models/nodemodule');

var Nodemodule = mongoose.model('Nodemodule');

describe('Nodemodule model', function () {

  it('should exist', function () {
      console.log("hi");
      expect(Nodemodule).to.be.a('function');
  });

});