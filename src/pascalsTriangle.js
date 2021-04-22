var newArr = function (i, lastRowArr) {
  var newArr = []
  newArr[0] = 1
  newArr[i] = 1
  for (var j = 1; j < i; j++) {
    newArr[j] = lastRowArr[j - 1] + lastRowArr[j]
  }
  return newArr
}

var generate = function (numRows) {
  var result = [[1]]
  if (numRows == 1) return result
  for (var i = 1; i < numRows; i++) {
    result.push(newArr(i, result[i - 1]))
  }
  return result
}

export default generate
