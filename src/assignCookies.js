var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  var count = 0
  for (var j = s.length - 1, i = g.length - 1; j >= 0 && i >= 0; ) {
    if (s[j] >= g[i]) {
      i--
      j--
      count++
    } else i--
  }
  return count
}
export default findContentChildren
