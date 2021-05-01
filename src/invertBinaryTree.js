var invertTree = function (root) {
  if (!root) return root
  var node = root
  var temp = node.right
  node.right = node.left
  node.left = temp
  if (node.left) invertTree(node.left)
  if (node.right) invertTree(node.right)
  return node
}

export default invertTree
