var searchNode = function (node, p, q) {
  if (node.val >= p.val && node.val <= q.val) return node
  if (node.val < p.val) return searchNode(node.right, p, q)
  if (node.val > q.val) return searchNode(node.left, p, q)
}

var lowestCommonAncestor = function (root, p, q) {
  return p.val > q.val ? searchNode(root, q, p) : searchNode(root, p, q)
}
