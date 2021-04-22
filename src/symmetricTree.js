var isSymmetricTree = function (n1, n2) {
  if (!n1 && !n2) return true
  if (n1 && n2 && n1.val === n2.val) {
    return (
      isSymmetricTree(n1.left, n2.right) && isSymmetricTree(n1.right, n2.left)
    )
  }
  return false
}

var isSymmetric = function (root) {
  if (!root) return true
  return isSymmetricTree(root.left, root.right)
}
export default isSymmetric
