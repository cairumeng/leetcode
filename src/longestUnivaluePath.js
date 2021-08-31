const longestUnivaluePath = (root) => {
  let maxPath = 0
  const dfs = (root) => {
    if (!root) return 0
    let l = dfs(root.left)
    let r = dfs(root.right)
    if (root.val !== root.left?.val) l = 0
    if (root.val !== root.right?.val) r = 0
    maxPath = Math.max(maxPath, l + r)
    return Math.max(l, r) + 1
  }
  dfs(root)
  return maxPath
}
export default longestUnivaluePath
