var plusOne2 = function (digits) {
  var l = digits.length
  if (digits[l - 1] === 9) {
    digits[l - 1] = 0
    for (var i = l - 2; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0
      } else {
        digits[i] += 1
        return digits
      }
    }
    digits.unshift(1)
    return digits
  }
  digits[l - 1] += 1
  return digits
}

var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1
      return digits
    }
    digits[i] = 0
  }

  digits.unshift(1)
  return digits
}

export default plusOne
