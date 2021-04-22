/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  var mergedList
  var head

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      if (!mergedList) {
        head = l1
        mergedList = l1
      } else {
        mergedList.next = l1
        mergedList = mergedList.next
      }
      l1 = l1.next
    } else {
      if (!mergedList) {
        head = l2
        mergedList = l2
      } else {
        mergedList.next = l2
        mergedList = mergedList.next
      }
      l2 = l2.next
    }
  }

  if (l1) {
    mergedList.next = l1
  } else {
    mergedList.next = l2
  }

  return head
}

export default mergeTwoLists
