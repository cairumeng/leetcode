var reverseBits = function (n) {
  //   var n = n.toString(2).padStart(32, '0')
  var result = 0
  var increment = 1

  for (var i = 0; i < 32; i++) {
    if (n & 1) {
      result += increment
    }
    increment *= 2
    n = n >> 1
  }
  return result
}

var reverseBits2 = function (n) {
  return parseInt(
    n.toString(2).padStart(32, '0').split('').reverse().join(''),
    2
  )
}

var reverseBits3 = function (n) {
  var r = n & 1
  for (var i = 1; i < 32; i++) {
    n = n >> 1
    r = (r << 1) | (n & 1)
  }
  return r
}

export default reverseBits3
