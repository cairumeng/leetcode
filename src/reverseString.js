var reverseString = function (s) {
  var len = s.length
  if (len == 1) return s
  var i, j
  if (len % 2 == 0) {
    i = len / 2 - 1
    j = i + 1
  } else {
    i = Math.floor(len / 2) - 1
    j = i + 2
  }
  while (i >= 0) {
    if (s[i] !== s[j]) {
      var temp = s[i]
      s[i] = s[j]
      s[j] = temp
    }
    i--
    j++
  }
  return s
}

export default reverseString
