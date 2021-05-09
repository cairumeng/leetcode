var firstUniqChar = function (s) {
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (i !== j && s[i] == s[j]) break
      if (j == s.length - 1) return i
    }
  }
  return -1
}

export default firstUniqChar
