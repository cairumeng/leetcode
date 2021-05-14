var repeatedSubstringPattern = function (s) {
  var mid = Math.floor(s.length / 2)
  for (var i = 0; i < mid; i++) {
    var substring = s.substring(0, i + 1)
    if (s.length % (i + 1) == 0) {
      var string = substring.padEnd(s.length, substring)
      if (s == string) return true
    }
  }
  return false
}

export default repeatedSubstringPattern
