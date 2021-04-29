var getPosition = function (c, collection) {
  return collection.indexOf(c)
}

var isIsomorphic = function (s, t) {
  var slen = s.length
  if (slen !== t.length) return false
  var cS = []
  var cT = []
  var ps, pt
  for (var i = 0; i < slen; i++) {
    ps = getPosition(s[i], cS)
    pt = getPosition(t[i], cT)
    if (ps !== pt) return false
    if (ps == -1) {
      cS.push(s[i])
      cT.push(t[i])
    }
  }
  return true
}

export default isIsomorphic
