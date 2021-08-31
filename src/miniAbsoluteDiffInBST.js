var getMinimumDifference = (root) => {
  var nodes = []
  var dsf = (node) => {
    if (node) {
      dsf(node.left)
      nodes.push(node.val)
      dsf(node.right)
    }
  }
  dsf(root)
  let diff = nodes[1] - nodes[0]
  for (var i = 1; i < nodes.length - 1; i++) {
    diff = Math.min(nodes[i + 1] - nodes[i], diff)
  }
  return diff
}
export default getMinimumDifference
