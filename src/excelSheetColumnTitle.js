var letterNumsTable = {
  0: 'Z',
}

for (var i = 0; i < 25; i++) {
  letterNumsTable[i + 1] = String.fromCharCode('A'.charCodeAt() + i)
}

var convertToTitle = function (columnNumber) {
  if (columnNumber == 1) return 'A'
  var title = ''
  var quotient = columnNumber
  var remainder = 0
  while (quotient > 0) {
    remainder = quotient % 26

    title = letterNumsTable[remainder] + title
    quotient = parseInt(quotient / 26)
    if (remainder == 0) quotient--
  }
  return title
}

export default convertToTitle
