var mySqrt = function (x) {
  var root = 0
  while (root * root <= x) {
    root++
  }
  return root - 1
}

var mySqrt2 = function (x) {
  if (x === 0) return 0
  if (x < 4) return 1

  var left = 0
  var right = x
  var median
  while (right - left > 1) {
    median = parseInt((left + right) / 2)
    if (median * median == x) {
      return median
    } else if (median * median > x) {
      right = median
    } else {
      left = median
    }
  }
  return left
}
export default mySqrt2
