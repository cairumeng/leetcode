// var rotate = function (matrix) {
//   var n = matrix[0].length
//   var pivot = function (i, j) {
//     var k = i
//     var temp = []
//     while (k <= j) {
//       temp.push(matrix[i][k])
//       k++
//     }
//     console.log(temp)

//     k = j
//     while (k >= i) {
//       console.log('swap', [i, k], [ - k, i])
//       matrix[i][k] = matrix[n - k][i]
//       k--
//     }
//     console.log(matrix)
//     k = i
//     while (k <= j) {
//       matrix[k][i] = matrix[j][k]
//       k++
//     }
//     k = j
//     while (k >= i) {
//       matrix[j][j - k] = matrix[k][j]
//       k--
//     }
//     k = i
//     while (temp[k] != undefined) {
//       matrix[k][j] = temp[k]
//       k++
//     }

//     i++
//     j--
//     console.log(matrix)

//     if (i < j && i !== j) pivot(i, j)
//   }
//   pivot(0, matrix.length - 1)
//   return matrix
// }

var rotate = function (matrix) {
  var n = matrix.length - 1

  var getPrev = function ({ i, j }) {
    return { i: n - j, j: i }
  }

  for (var i = 0; i <= Math.floor(n / 2); i++) {
    for (var j = i; j < n - i; j++) {
      var origin = { i, j }
      var current = { i, j }
      var temp = matrix[origin.i][origin.j]

      while (true) {
        var prev = getPrev(current)
        if (prev.i == origin.i && prev.j == origin.j) {
          matrix[current.i][current.j] = temp
          break
        }
        matrix[current.i][current.j] = matrix[prev.i][prev.j]
        current = prev
      }
    }
  }

  return matrix
}

export default rotate
