var hasCycle = function (head) {
  var p1 = head
  var p2 = head
  while (p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) return true
  }
  return false
}

export default hasCycle
