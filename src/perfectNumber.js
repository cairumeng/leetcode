var checkPerfectNumber = (num) => {
  var sum = 0
  if (num === 1) return false
  for (var i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      var quotient = num / i
      sum += i
      if (quotient !== num) {
        sum += quotient
      }
    }
  }
  return sum === num
}
export default checkPerfectNumber
