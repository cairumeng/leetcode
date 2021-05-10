var addStrings = function (num1, num2) {
  if (num1.length < num2.length) {
    return addStrings(num2, num1)
  }
  num2 = num2.padStart(num1.length, '0')
  var sum = 0
  var result = ''
  var carry = 0
  for (var i = num1.length - 1; i >= 0; i--) {
    sum = num1[i] * 1 + num2[i] * 1 + carry
    if (sum >= 10) {
      result = (sum % 10).toString() + result
      carry = 1
    } else {
      result = sum.toString() + result
      carry = 0
    }
  }
  return carry == 1 ? carry + result : result
}
export default addStrings
