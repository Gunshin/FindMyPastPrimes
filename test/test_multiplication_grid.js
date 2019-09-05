var assert = require('assert');
var chai = require('chai')

var multi_grid_gen  = require('../multiplication_grid')

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
  
  describe('#GenerateMultiplcationGrid()', function() {
    it('Should return a 2D Array with prime multiplication table', function() {
      
      chai.expect(multi_grid_gen.GenerateMultiplcationGrid(5)).to.eql(
        [
          [   2, 3, 5, 7, 11],
          [2, 4, 6, 10,14,22],
          [3, 6, 9, 15,21,33],
          [5, 10,15,25,35,55],
          [7, 14,21,35,49,77],
          [11,22,33,55,77,121]
        ]
      )
      
      chai.expect(multi_grid_gen.GenerateMultiplcationGrid(1)).to.eql(
        [
          [   2],
          [2, 4]
        ]
      )
      
      chai.expect(multi_grid_gen.GenerateMultiplcationGrid(0)).to.be.empty;

    });
  });
  
});
