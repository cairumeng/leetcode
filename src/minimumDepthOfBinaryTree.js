var minDepth = function (root) {
  if (!root) return 0
  var l = minDepth(root.left)
  var r = minDepth(root.right)
  if (l === 0 && r > 0) {
    return r + 1
  }
  if (r === 0 && l > 0) {
    return l + 1
  }
  return Math.min(l, r) + 1
}
export default minDepth
