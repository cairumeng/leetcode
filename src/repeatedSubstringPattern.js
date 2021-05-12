var repeatedSubstringPattern = function (s) {
  for (var i = 0; i < Math.floor(s.length / 2); i++) {
    var substring = s.substring(0, i + 1)
    if (s.length % (i + 1) == 0) {
      var string = substring.padEnd(s.length, substring)
      if (s == string) return true
    }
  }
  return false
}

export default repeatedSubstringPattern
