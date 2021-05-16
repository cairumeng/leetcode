var findWords = function (words) {
  var obj = {}
  var result = []
  var getLettersRowObj = function (str, row) {
    for (var i = 0; i < str.length; i++) {
      obj[str[i]] = row
    }
  }
  getLettersRowObj('qwertyuiop', 1)
  getLettersRowObj('asdfghjkl', 2)
  getLettersRowObj('zxcvbnm', 3)

  for (var j = 0; j < words.length; j++) {
    var row = obj[words[j][0].toLowerCase()]
    var len = words[j].length
    for (var k = 1; k < len; k++) {
      var c = words[j][k].toLowerCase()

      if (obj[c] !== row) break
    }
    if (k == len) result.push(words[j])
  }
  return result
}
export default findWords
