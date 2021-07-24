var kthSmallest = function (matrix, k) {
  var mergedMatrix = []
  var len = matrix.length
  for (var i = 0; i < len; i++) {
    if (i == 0) mergedMatrix = matrix[i]
    else mergedMatrix = mergedMatrix.concat(matrix[i])
  }

  mergedMatrix.sort((a, b) => a - b)
  return mergedMatrix[k - 1]
}
export default kthSmallest
