var say = function (str) {
  var count = 1
  var result = ''
  for (var i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) count++
    else {
      result += count + str[i - 1]
      count = 1
    }
  }
  return result + count + str[str.length - 1]
}
var countAndSay = function (n) {
  if (n == 1) return '1'
  return say(countAndSay(n - 1))
}
export default countAndSay
