var isUgly = function (n) {
  if (n == 0) return false
  if (n == 1) return true
  var primes = [2, 3, 5]
  for (var i = 0; i < primes.length; i++) {
    while (n % primes[i] == 0) {
      if (n / primes[i] == 1) return true
      n = n / primes[i]
    }
  }
  return false
}

export default isUgly
