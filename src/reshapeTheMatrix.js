var matrixReshape = function (mat, r, c) {
  var data = []
  var m = mat.length
  for (var i = 0; i < m; i++) {
    if (i == 0) {
      data = mat[i]
    } else data = data.concat(mat[i])
  }
  var len = data.length
  if (len / r !== c) return mat
  var result = []
  for (var j = 0; j < len; j += c) {
    result.push(data.slice(j, j + c))
  }
  return result
}
export default matrixReshape
