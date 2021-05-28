var divide = function (dividend, divisor) {
  var result = 0
  var sign = 1
  if (dividend === -Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) - 1
  }
  if (dividend < 0 || divisor < 0) {
    if (dividend < 0 && divisor < 0) sign = 1
    else sign = -1
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
  }

  while (dividend >= divisor) {
    dividend -= divisor
    result++
  }

  return result * sign
}

export default divide
