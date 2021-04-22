var strStr = function (haystack, needle) {
  var n = needle.length
  var h = haystack.length
  if (n == 0) return 0
  if (n > h) return -1
  var result
  for (var i = 0; i <= h - n; i++) {
    if (haystack[i] === needle[0]) {
      result = haystack.slice(i, i + n)
      if (result == needle) {
        return i
      }
    }
  }
  return -1
}

var strStr2 = function (haystack, needle) {
  if (needle.length === 0) return 0
  for (var i = 0, j = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      j++
    } else if (j > 0) {
      i = i - j
      j = 0
    }
    if (j === needle.length) {
      return i - j + 1
    }
  }
  return -1
}

export default strStr2
