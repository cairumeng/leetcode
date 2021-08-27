var isUpperCase = (c) => c >= 'A' && c <= 'Z'

var detectCapitalUse = function (word) {
  var len = word.length
  var count = 0
  for (var i = 0; i < len; i++) {
    if (isUpperCase(word.charAt(i))) count++
  }
  console.log(count)
  if (count === len || count === 0) return true
  if (count === 1 && isUpperCase(word.charAt(0))) {
    return true
  } else {
    return false
  }
}

export default detectCapitalUse
