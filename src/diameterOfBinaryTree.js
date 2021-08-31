var diameterOfBinaryTree = function (root) {
  var max = 0

  var dfs = (root) => {
    if (root === null) return 0
    let l = dfs(root.left)
    let r = dfs(root.right)
    max = Math.max(l + r, max)
    return Math.max(l, r) + 1
  }
  return max
}
export default diameterOfBinaryTree
