var addBinary = function (a, b) {
  var carry = 0
  var result = ''
  var i = a.length - 1
  var j = b.length - 1
  for (; i >= 0 || j >= 0; i--, j--) {
    var sum = carry
    if (i < 0) {
      sum += b[j] - '0'
    } else if (j < 0) {
      sum += a[i] - '0'
    } else {
      sum += a[i] - '0' + (b[j] - '0')
    }
    carry = parseInt(sum / 2)
    result = (sum % 2) + result
  }
  if (carry == 1) {
    return 1 + result
  }
  return result
}

export default addBinary
