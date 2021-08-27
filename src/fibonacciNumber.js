var fib2 = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}
var fib = function (n) {
  const map = {
    0: 0,
    1: 1,
    2: 1,
  }
  for (var i = 3; i <= n; i++) {
    map[i] = map[i - 1] + map[i - 2]
  }
  return map[n]
}
export default fib
