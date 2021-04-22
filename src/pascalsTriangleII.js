var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1]
  var preRow = getRow(rowIndex - 1)
  var newRow = []
  newRow.push(1)
  for (var i = 1; i < rowIndex; i++) {
    newRow[i] = preRow[i - 1] + preRow[i]
  }
  newRow.push(1)
  return newRow
}

export default getRow
