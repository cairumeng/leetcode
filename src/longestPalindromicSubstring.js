var isPalindrome = function (str, i, j) {
  while (i <= j) {
    if (str[i] !== str[j]) return false
    i++
    j--
  }
  return true
}
var longestPalindrome = function (s) {
  var longestPalindrome = s[0]
  for (var i = 0; i < s.length; i++) {
    var str = s[i]
    for (var j = i + 1; j < s.length; j++) {
      str += s[j]
      if (s[j] == s[i]) {
        if (isPalindrome(s, i, j) && str.length > longestPalindrome.length)
          longestPalindrome = str
      }
    }
  }
  return longestPalindrome
}

export default longestPalindrome
