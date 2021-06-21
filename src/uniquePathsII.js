var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length
  var n = obstacleGrid[0].length

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (obstacleGrid[i][j] == 0) {
        if (i == 0 && j == 0) obstacleGrid[i][j] = 1
        else
          obstacleGrid[i][j] =
            (obstacleGrid[i][j - 1] || 0) +
            (obstacleGrid[i - 1] ? obstacleGrid[i - 1][j] : 0)
      } else obstacleGrid[i][j] = 0
    }
  }
  return obstacleGrid[i - 1][j - 1]
}
export default uniquePathsWithObstacles
