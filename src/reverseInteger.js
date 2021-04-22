/**
 * @param {number} x
 * @return {number}
 */

var minInt = -Math.pow(2, 31)
var maxInt = Math.pow(2, 31) - 1

var reverse = function (x) {
  var sign = 1
  var numReverse = 0
  var i = 0
  if (x < 0) {
    sign = -1
    x = x * -1
  }
  while (x >= 1) {
    numReverse = (x % 10) + numReverse * 10
    i++
    x = parseInt(x / 10)
  }

  numReverse = numReverse * sign

  if (numReverse >= minInt && numReverse <= maxInt) {
    return numReverse
  }
  return 0
}

export default reverse
