var assert = require('assert');
var chai = require('chai')

var primegen  = require('../prime_gen')

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
  
  describe('#GenerateNPrimes()', function() {
    it('Should return a list of primes up to the Nth term', function() {
      
      chai.expect(primegen.GenerateNPrimes(5)).to.eql([2,3,5,7,11])
      chai.expect(primegen.GenerateNPrimes(7)).to.eql([2,3,5,7,11,13,17])
      
      chai.expect(primegen.GenerateNPrimes(5)).that.does.not.include(1)
      chai.expect(primegen.GenerateNPrimes(7)).that.does.not.include(4)
    });
  });
  
  describe('#IsPrime()', function() {
    it('Should return is a number is prime or not', function() {
      
      chai.expect(primegen.IsPrime(2)).to.equal(true)
      chai.expect(primegen.IsPrime(5)).to.equal(true)
      chai.expect(primegen.IsPrime(7)).to.equal(true)
      
      chai.expect(primegen.IsPrime(-10)).to.equal(false)
      chai.expect(primegen.IsPrime(1)).to.equal(false)
      chai.expect(primegen.IsPrime(4)).to.equal(false)
      chai.expect(primegen.IsPrime(6)).to.equal(false)
      
    });
  });
  
  
});
