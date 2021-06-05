var stringSum = function (num1, num2) {
  var carry = 0
  var result = ''
  if (num1.length > num2.length) return stringSum(num2, num1)
  for (var i = num1.length - 1, j = num2.length - 1; i >= 0; i--, j--) {
    var sum = num1[i] * 1 + num2[j] * 1 + carry
    if (sum > 9) {
      carry = 1
      result = sum - 10 + result
    } else {
      result = sum + result
      carry = 0
    }
  }
  if (j >= 0) {
    var sup = num2.slice(0, j + 1)
    if (carry > 0) {
      sup = stringSum('1', sup)
    }
    result = sup + result
  }
  if (j < 0 && carry > 0) {
    result = carry + result
  }
  return result
}

var multiply = function (num1, num2) {
  if (num1 == '0' || num2 == '0') return '0'
  if (num1.length > num2.length) return multiply(num2, num1)

  var multification = null
  for (var i = num1.length - 1, digit = 0; i >= 0; i--, digit++) {
    var n1 = num1[i] * 1
    var carry = 0
    var result = ''
    for (var j = num2.length - 1; j >= 0; j--) {
      if (n1 == 0) break
      var n2 = num2[j] * 1
      var multi = n1 * n2 + carry
      if (multi > 9) {
        result = (multi % 10) + result
        carry = Math.floor(multi / 10)
      } else {
        result = multi + result
        carry = 0
      }
    }

    result = result.padEnd(result.length + digit, '0')
    if (carry > 0) result = carry + result
    if (!multification) {
      multification = result
    } else {
      multification = stringSum(multification, result)
    }
  }
  return multification
}

export { stringSum }
export default multiply
