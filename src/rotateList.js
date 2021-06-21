var getNodeLength = function (head) {
  var node = head
  var length = 0
  while (node) {
    length++
    node = node.next
  }
  return length
}
var rotateRight = function (head, k) {
  var node = head
  var count = 0
  var length = getNodeLength(head)
  if (length == 0 || length == 1) return head
  k = k % length
  if (k === 0) return head
  var rotatePosi = length - k
  var newHead
  while (node) {
    count++
    if (count == rotatePosi) {
      var rotateNode = node.next
      newHead = rotateNode
      node.next = null
      while (rotateNode?.next) {
        rotateNode = rotateNode.next
      }
      rotateNode.next = head
      return newHead
    }
    node = node.next
  }
}

export default rotateRight
