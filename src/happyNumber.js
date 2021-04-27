var getSum = function (n) {
  var quotient = n
  var remainder = 0
  var sum = 0
  while (quotient > 0) {
    remainder = quotient % 10
    sum += remainder * remainder
    quotient = Math.floor(quotient / 10)
  }
  return sum
}

var isHappy = function (n) {
  var sum = n
  var history = {}
  while (true) {
    if (sum == 1) {
      return true
    }
    if (history[sum]) {
      return false
    }
    history[sum] = sum
    sum = getSum(sum)
  }
}

function isHappy2(n) {
  let slow = (fast = n)
  while (true) {
    slow = sq(slow)
    fast = sq(sq(fast))
    if (slow === fast) break
  }

  return slow === 1
}

function sq(num) {
  let sum = 0
  while (num > 0) {
    let d = num % 10
    sum += d * d
    num = Math.floor(num / 10)
  }
  return sum
}
export default isHappy2
