var removeNthFromEnd = function (head, n) {
  var link1 = head
  var link2 = head
  var i = 0
  var j = 0
  while (link1) {
    i++
    link1 = link1.next
  }
  if (i == n) return head.next
  while (link2) {
    j++
    if (j == i - n) link2.next = link2.next.next
    else link2 = link2.next
  }
  return head
}

var removeNthFromEnd = function (head, n) {
  var link1 = head
  var link2 = head
  while (n >= 0) {
    if (!link2) return head.next
    link2 = link2.next
    n--
  }

  while (link2) {
    link2 = link2.next
    link1 = link1.next
  }
  link1.next = link1.next.next
  return head
}
export default removeNthFromEnd
