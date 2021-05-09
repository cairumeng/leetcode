var getSum = function (node, sum) {
  if (!node) return
  if (node.left && !node.left.left && !node.left.right) {
    sum[0] += node.left.val
  }

  getSum(node.left, sum) + getSum(node.right, sum)
}

var sumOfLeftLeaves = function (root) {
  var sum = [0]
  getSum(root, sum)
  return sum[0]
}

var sumOfLeftLeaves2 = function (root) {
  let sum = 0

  const dfs = (node, isLeft) => {
    if (!node) return
    if (isLeft && !node.left && !node.right) sum += node.val

    if (node.left) dfs(node.left, true)
    if (node.right) dfs(node.right, false)
  }
  dfs(root, false)

  return sum
}

export default sumOfLeftLeaves2
