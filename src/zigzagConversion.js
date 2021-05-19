var convert = function (s, numRows) {
  if (numRows == 1) return s
  var arr = []
  var reverse = false
  for (var i = 0, j = 0; i < s.length; i++) {
    if (arr[j]) arr[j].push(s[i])
    else arr.push([s[i]])
    if (j == numRows - 1) reverse = true
    if (j == 0) reverse = false
    reverse ? j-- : j++
  }
  var result = ''
  for (var j = 0; j < arr.length; j++) {
    result += arr[j].join('')
  }
  return result
}

export default convert
