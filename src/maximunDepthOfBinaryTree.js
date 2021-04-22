// var getMaxDepth = function (left, right, depth) {
//   var depthL = 0
//   var depthR = 0
//   if (!left && !right) {
//     return depth
//   }
//   depth++
//   left ? (depthL = getMaxDepth(left.left, left.right, depth)) : depthL

//   right ? (depthR = getMaxDepth(right.left, right.right, depth)) : depthR

//   return (depth = depthL >= depthR ? depthL : depthR)
// }

// var maxDepth = function (root) {
//   if (!root) return 0
//   return getMaxDepth(root.left, root.right, 1)
// }

var maxDepth = function (root) {
  if (!root) return 0
  var left = maxDepth(root.left)
  var right = maxDepth(root.right)
  return Math.max(left, right) + 1
}

export default maxDepth
