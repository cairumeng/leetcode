var ints = [1, 5, 10, 50, 100, 500, 1000]
var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

var intToRoman = function (number) {
  var result = ''

  var intToRoman2 = function (num) {
    var i = 0
    while (i < 7) {
      if (ints[i] == num) {
        result += romans[i]
        return result
      } else if (ints[i] > num) {
        break
      } else i++
    }
    var quot
    if (i % 2 == 1 && num >= ints[i] - ints[i - 1]) {
      result += romans[i - 1] + romans[i]
      num = num - (ints[i] - ints[i - 1])
    } else if (i % 2 == 0 && num >= ints[i] - ints[i - 2]) {
      result += romans[i - 2] + romans[i]
      num = num - (ints[i] - ints[i - 2])
    } else {
      quot = Math.floor(num / ints[i - 1])
      result += romans[i - 1].repeat(quot)
      num = num - ints[i - 1] * quot
    }
    return num == 0 ? result : intToRoman2(num)
  }
  return intToRoman2(number)
}
export default intToRoman
