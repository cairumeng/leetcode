var trailingZeroes = function (n) {
  var fact = 5
  var count = 0

  while (fact <= n) {
    count += parseInt(n / fact)
    fact *= 5
  }
  return count
}

export default trailingZeroes
