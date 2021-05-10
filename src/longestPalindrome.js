var longestPalindrome = function (s) {
  var arr = s.split('')
  arr.sort()
  var count = 0
  for (var i = 0; i < arr.length - 1; ) {
    if (arr[i] == arr[i + 1]) {
      count++
      i += 2
    } else i++
  }
  count *= 2
  return count < arr.length ? count + 1 : count
}

export default longestPalindrome
