var generateMatrix = function (n) {
  var result = new Array(n)
  var num = 1
  var increment = 1
  var start = 0
  var end = n - 1
  var i = start
  var j = start
  var attributeNum = function (i, j) {
    if (result[i] == null) result[i] = new Array(n)
    if (result[i][j]) return
    result[i][j] = num
    num++
  }

  while (num <= n * n) {
    while (i >= start && i <= end) {
      while (j >= start && j <= end) {
        attributeNum(i, j)
        j += increment
      }
      attributeNum(i, j - increment)
      i += increment
    }
    if (increment < 0) {
      start++
      end--
      i = start
      j = start
    } else {
      i -= increment
      j -= increment
    }

    increment = -increment
  }
  return result
}

export default generateMatrix
