var isLowerCaseLetter = function (c) {
  var ascii = c.charCodeAt()
  return ascii >= 97 && ascii <= 122
}
var licenseKeyFormatting = function (s, k) {
  var str = ''
  var count = 0
  for (var i = s.length - 1; i >= 0; i--) {
    var c = s[i]
    if (c !== '-') {
      count++
      if (isLowerCaseLetter(c)) c = c.toUpperCase()
      if (count == k + 1) {
        str = c + '-' + str
        count = 1
      } else str = c + str
    }
  }
  return str
}

export default licenseKeyFormatting
