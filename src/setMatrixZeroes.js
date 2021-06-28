var setZeroes = function (matrix) {
  var is = []
  var js = []
  var m = matrix.length
  var n = matrix[0].length
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        if (!is.includes(i)) is.push(i)
        if (!js.includes(j)) js.push(j)
      }
    }
  }
  for (var i = 0; i < is.length; i++) {
    for (var j = 0; j < n; j++) {
      if (matrix[is[i]][j] !== 0) matrix[is[i]][j] = 0
    }
  }

  for (var j = 0; j < js.length; j++) {
    for (var i = 0; i < m; i++) {
      if (matrix[i][js[j]] !== 0) matrix[i][js[j]] = 0
    }
  }
  return matrix
}

export default setZeroes
