function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var buildTree = function (l, r, nums) {
  if (l > r) return null
  var median = parseInt((l + r) / 2)
  return new TreeNode(
    nums[median],
    buildTree(l, median - 1, nums),
    buildTree(median + 1, r, nums)
  )
}

var sortedArrayToBST = function (nums) {
  return buildTree(0, nums.length - 1, nums)
}

export default sortedArrayToBST
