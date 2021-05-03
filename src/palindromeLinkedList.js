var isPalindrome = function (head) {
  var arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) return false
  }
  return true
}

export default isPalindrome
