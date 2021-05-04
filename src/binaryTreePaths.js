var binaryTreePaths = function (root) {
  var arr = []

  var createPath = function (node, path) {
    path += node.val.toString()
    if (!node.left && !node.right) {
      arr.push(path)
      return
    }
    if (node.left) createPath(node.left, path + '->')
    if (node.right) createPath(node.right, path + '->')
  }
  createPath(root, '')
  return arr
}

export default binaryTreePaths
