var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  var map = new Map()

  for (var i = 0; i < s.length; i++) {
    var key = s[i]
    if (!map.has(key)) {
      map.set(key, 1)
    } else {
      map.set(key, map.get(key) + 1)
    }
  }

  for (var i = 0; i < t.length; i++) {
    var key = t[i]
    if (!map.has(key)) {
      return false
    } else if (map.get(key) == 1) {
      map.delete(key)
    } else {
      map.set(key, map.get(key) - 1)
    }
  }
  return map.size == 0
}

export default isAnagram
