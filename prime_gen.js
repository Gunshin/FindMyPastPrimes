

function GenerateNPrimes( n )
{
  primes = [];
  count = 0;
  for(var i = 2; count < n; ++i)
  {
    if(IsPrime(i))
    {
      count++;
      primes.push(i);
    }
  }
  
  return primes;
}

function IsPrime(num)
{
  if(num < 2)
    return false;

  for (var i = 2; i * i <= num; ++i) {
    if (num % i == 0)
      return false;
  }
  return true;
}

module.exports.GenerateNPrimes = GenerateNPrimes;
module.exports.IsPrime = IsPrime;