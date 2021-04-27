var letterToNumber = function (c) {
  return c.charCodeAt() - 'A'.charCodeAt() + 1
}

var titleToNumber = function (columnTitle) {
  var num = 0
  for (var i = 0; i < columnTitle.length; i++) {
    num = num * 26
    num += letterToNumber(columnTitle[i])
  }
  return num
}

export default titleToNumber
