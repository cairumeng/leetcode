var findSum = function (node, sum) {
  if (!node) return false
  if (node.val == sum && !node.left && !node.right) {
    return true
  }
  sum -= node.val
  return hasPathSum(node.left, sum) || hasPathSum(node.right, sum)
}

var hasPathSum = function (root, targetSum) {
  return findSum(root, targetSum)
}

export default hasPathSum
