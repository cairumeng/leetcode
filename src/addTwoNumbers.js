var addTwoNumbers = function (l1, l2) {
  var sum = new ListNode()
  var head = sum
  var carry = 0
  while (l1 || l2 || carry) {
    var add = (l1 && l1.val) + (l2 && l2.val) + carry
    if (add >= 10) {
      sum.val = add % 10
      carry = 1
    } else {
      sum.val = add
      carry = 0
    }
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    if (l1 || l2 || carry) {
      sum.next = new ListNode()
      sum = sum.next
    }
  }
  return head
}

export default addTwoNumbers
