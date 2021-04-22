var depth = function (node) {
  if (!node) return 0
  return Math.max(depth(node.left), depth(node.right)) + 1
}

var isBalanced = function (root) {
  if (!root) return true
  if (isBalanced(root.left) && isBalanced(root.right)) {
    return Math.abs(depth(root.left) - depth(root.right)) <= 1
  }
  return false
}

var getHeight = function (node) {
  if (!node) return 0
  var left = getHeight(node.left)
  var right = getHeight(node.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return Math.max(left, right) + 1
}

var isBalanced2 = function (root) {
  if (!root) return true
  return !(getHeight(root) == -1)
}

export default isBalanced2
