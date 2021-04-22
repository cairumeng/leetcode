// var getStr = function (s) {
//   var str = ''
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] >= 'a' && s[i] <= 'z') {
//       str += s[i]
//     } else if (s[i] >= 'A' && s[i] <= 'Z') {
//       str += s[i].toLowerCase()
//     } else if (s[i] >= '0' && s[i] <= '9') {
//       str += s[i]
//     }
//   }
//   return str
// }

// var isPalindrome = function (s) {
//   var str = getStr(s)
//   for (var i = 0, j = str.length - 1; i <= j; i++, j--) {
//     if (str[i] !== str[j]) return false
//   }
//   return true
// }

var getValidCharacter = function (c) {
  if ((c >= '0' && c <= '9') || (c >= 'a' && c <= 'z')) {
    return c
  }
  if (c >= 'A' && c <= 'Z') return c.toLowerCase()
  return null
}

var isPalindrome = function (s) {
  var si, sj
  for (var i = 0, j = s.length - 1; i <= j; i++, j--) {
    while (i <= j && !(si = getValidCharacter(s[i]))) i++
    while (j >= i && !(sj = getValidCharacter(s[j]))) j--
    if (i <= j && si !== sj) return false
  }
  return true
}

export default isPalindrome
