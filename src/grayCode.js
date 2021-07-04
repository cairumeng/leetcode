var grayCode = function (n) {
  var increments = []
  var result = [0]
  var lastResult = 0
  var pow = 1
  for (var i = 0; i < n; i++) {
    if (i > 0) pow *= 2
    increments.push(pow)
    lastResult += pow
    result.push(lastResult)
    for (var j = increments.length - 2; j >= 0; j--) {
      lastResult -= increments[j]
      result.push(lastResult)
      increments.push(-increments[j])
    }
  }
  return result
}

export default grayCode
