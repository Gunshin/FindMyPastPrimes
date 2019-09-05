
var prime_gen = require('./prime_gen');

function GenerateMultiplcationGrid( n )
{
  if(n < 1)
  {
    return [];
  }
  
  primes = prime_gen.GenerateNPrimes(n);
  primes_multiplication_grid = [primes];
  for(var i = 0; i < n; ++i)
  {
    grid_row = [primes[i]];
    for(var j = 0; j < n; ++j)
    {
      grid_row.push(primes[i] * primes[j]);
    }
    primes_multiplication_grid.push(grid_row);
  }
  
  return primes_multiplication_grid;
  
}

module.exports.GenerateMultiplcationGrid = GenerateMultiplcationGrid;