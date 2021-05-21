var myAtoi = function (s) {
  var num = 0
  var i = 0
  var sign = 1
  var max = Math.pow(2, 31) - 1
  var min = -Math.pow(2, 31)
  while (s[i] && s[i] == ' ') i++
  if (s[i] == '-') {
    sign = -1
    i++
  } else if (s[i] == '+') {
    i++
  }

  while (s[i] && s[i].charCodeAt() == 48) i++
  while (s[i] && s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57) {
    num = num * 10 + s[i] * 1
    i++
  }
  num = num * sign
  if (num > max) return max
  if (num < min) return min
  return num
}

export default myAtoi
