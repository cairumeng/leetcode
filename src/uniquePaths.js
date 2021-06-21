var uniquePaths = function (m, n) {
  if (m == 1 || n == 1) return 1
  var result = []
  for (var i = 1; i <= m; i++) {
    result.push(new Array(n).fill(1))
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      result[i][j] = result[i - 1][j] + result[i][j - 1]
    }
  }
  return result[i - 1][j - 1]
}
export default uniquePaths
