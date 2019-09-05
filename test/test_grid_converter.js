var assert = require('assert');
var chai = require('chai')

var grid_converter  = require('../grid_converter')

describe('Primes', function() {
  
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });
  
  describe('#ConvertGridToConsoleOutputArray()', function() {
    it('Should return a converted 1D array for writing to console', function() {
      
      chai.expect(grid_converter.ConvertGridToConsoleOutputArray(
        [
          [   2, 3, 5, 7, 11],
          [2, 4, 6, 10,14,22],
          [3, 6, 9, 15,21,33],
          [5, 10,15,25,35,55],
          [7, 14,21,35,49,77],
          [11,22,33,55,77,121]
        ]
      )).to.eql(
        [
          "   |  2|  3|  5|  7| 11|",
          "  2|  4|  6| 10| 14| 22|",
          "  3|  6|  9| 15| 21| 33|",
          "  5| 10| 15| 25| 35| 55|",
          "  7| 14| 21| 35| 49| 77|",
          " 11| 22| 33| 55| 77|121|",
        ]
      )
      
      chai.expect(grid_converter.ConvertGridToConsoleOutputArray([])).to.be.empty;
      
    });
  });

});
