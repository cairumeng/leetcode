var findTheDifference = function (s, t) {
  if (s.length == 0) return t
  var obj = {}
  for (var i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1)
  }

  for (var j = 0; j < t.length; j++) {
    if (!obj[t[j]] || obj[t[j]] < 0) return t[j]
    else obj[t[j]]--
  }
}
export default findTheDifference
