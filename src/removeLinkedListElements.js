var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next
  }
  var node = head
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head
}

export default removeElements
