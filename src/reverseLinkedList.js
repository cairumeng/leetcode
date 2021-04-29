var reverseList = function (head) {
  if (!head) return head
  var arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr.reduce((prev, current) => {
    return { val: current, next: prev }
  }, null)
}

export default reverseList
