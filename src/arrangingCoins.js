var arrangeCoins = function (n) {
  var count = 0
  for (var i = 1, sum = 0; sum + i <= n; i++) {
    sum += i
    count++
  }
  return count
}
export default arrangeCoins
