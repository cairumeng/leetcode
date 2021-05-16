// var traverseTree = function (node, obj) {
//   if (!node) return
//   !obj[node.val] ? (obj[node.val] = 1) : obj[node.val]++
//   traverseTree(node.left, obj)
//   traverseTree(node.right, obj)
// }

// var findMode = function (root) {
//   var obj = {}
//   traverseTree(root, obj)
//   var values = Object.values(obj)
//   var max = Math.max(...values)

//   var result = []
//   for (var i in obj) {
//     if (obj[i] == max) {
//       result.push(i * 1)
//     }
//   }
//   return result
// }

var findMode = function (root) {
  var obj = {}
  var max = -1

  var traverseTree = function (node, obj) {
    if (!node) return
    obj[node.val] = (obj[node.val] || 0)++

    if (obj[node.val] > max) max = obj[node.val]
    traverseTree(node.left, obj)
    traverseTree(node.right, obj)
  }

  traverseTree(root, obj)

  var result = []
  for (var i in obj) {
    if (obj[i] == max) {
      result.push(i * 1)
    }
  }
  return result
}

export default findMode
