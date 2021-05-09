var isSubsequence = function (s, t) {
  if (s.length > t.length) return false
  var i = 0
  var j = 0
  while (s[i] && t[j]) {
    if (s[i] == t[j]) {
      i++
    }
    j++
  }
  return i == s.length
}

export default isSubsequence
