var lengthOfLongestSubstring = function (s) {
  var maxLen = 0
  var len = 0
  var arr = []
  var startIndex = 0
  for (var i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      maxLen = Math.max(len, maxLen)
      arr = []
      len = 0
      i = startIndex + 1
      startIndex = i
    }
    arr.push(s[i])
    len++
  }
  return len > maxLen ? len : maxLen
}

var k = 0
var maxLength = 0
for (i = 0; i < s.length; i++) {
  for (j = k; j < i; j++) {
    if (s[i] === s[j]) {
      k = j + 1
      break
    }
  }
  if (i - k + 1 > maxLength) {
    maxLength = i - k + 1
  }
}
return maxLength

export default lengthOfLongestSubstring2
