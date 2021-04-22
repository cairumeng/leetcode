var fibonacci = [1, 1, 2]
var climbStairs = function (n) {
  if (fibonacci[n]) return fibonacci[n]
  fibonacci[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return fibonacci[n]
}

var climbStairs2 = function (n) {
  if (n === 1) return 1
  var prev1 = 1
  var prev2 = 2
  var tmp

  for (var i = 3; i <= n; i++) {
    tmp = prev1
    prev1 = prev2
    prev2 = tmp + prev2
  }

  return prev2
}

export default climbStairs2
