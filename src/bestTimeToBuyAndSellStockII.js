var maxProfit = function (prices) {
  var buyPrice = 10000
  var sellPrice = 0
  var profit = 0
  var min = 10000
  var max = 0
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i]
      min = Math.min(prices[i], min)
    } else {
      if (prices[i + 1] && prices[i + 1] > prices[i]) {
        continue
      }
      sellPrice = prices[i]
      max = Math.max(max, prices[i])
      profit += sellPrice - buyPrice
      buyPrice = 10000
    }
    if (prices[i] > max) {
      profit = Math.max(profit, prices[i] - min)
    }
  }
  return profit
}

// var findNextMax = function (prices, i) {
//   var j = i + 1
//   while (j < prices.length && prices[j] > prices[j + 1]) {
//     j++
//   }
//   return j == prices.length ? -1 : j
// }

// var maxProfit = function (prices) {
//   if (prices.length === 1) return 0

//   var profit = 0

//   for (var i = 1; i < prices.length; i++) {
//     if (prices[i] < prices[i - 1]) {
//     }
//     var j = findNextMax(prices, i)
//     if (j === -1) {
//       return profit
//     }
//   }
// }
var maxProfit2 = function (prices) {
  if (prices.length === 1) return 0

  var profit = 0
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1]
  }
  return profit
}

export default maxProfit2
