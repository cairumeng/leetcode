var longestCommonPrefix = function (strs) {
  var len = strs.length
  if (len === 0) {
    return ''
  }

  if (len === 1) {
    return strs[0]
  }

  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 1; j <= len - 1; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].substr(0, i)
      }
    }
  }

  return strs[0]
}

export default longestCommonPrefix
