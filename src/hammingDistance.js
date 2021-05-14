var hammingDistance = function (x, y) {
  var result = x ^ y
  var numOne = 0
  while (result > 0) {
    if ((result & 1) == 1) {
      numOne++
    }
    result >>= 1
  }
  return numOne
}

export default hammingDistance
