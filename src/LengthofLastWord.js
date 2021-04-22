var lengthOfLastWord = function (s) {
  var len = 0
  var isFound = false
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      len++
      isFound = true
    } else if (isFound) {
      return len
    }
  }
  return len
}

export default lengthOfLastWord
