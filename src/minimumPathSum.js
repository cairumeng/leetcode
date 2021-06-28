var minPathSum = function (grid) {
  var m = grid.length
  var n = grid[0].length
  var minSum = function (i, j) {
    if (i < 0 || j < 0) return Number.MAX_VALUE
    if (i == 0 && j == 0) return grid[i][j]
    return Math.min(minSum(i - 1, j), minSum(i, j - 1)) + grid[i][j]
  }
  return minSum(m - 1, n - 1)
}

var minPathSum2 = function (grid) {
  var m = grid.length
  var n = grid[0].length
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue
      }
      const up = i === 0 ? Number.MAX_VALUE : grid[i - 1][j]
      const left = j === 0 ? Number.MAX_VALUE : grid[i][j - 1]

      grid[i][j] += Math.min(up, left)
    }
  }
  return grid[m - 1][n - 1]
}

export default minPathSum2
