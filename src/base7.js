var convertToBase7 = function (num) {
  if (num == 0) return '0'
  var str = ''
  var sign = null
  if (num < 0) {
    sign = '-'
    num = -num
  }
  while (num > 0) {
    var mode = num % 7
    num = Math.floor(num / 7)
    str = mode + str
  }
  return sign ? sign + str : str
}
export default convertToBase7
