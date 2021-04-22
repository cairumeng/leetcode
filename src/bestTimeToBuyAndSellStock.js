// var maxProfit = function (prices) {
//   var maxProfit = 0
//   var buyPrice = prices[0]
//   var sellPrice = 0
//   for (var i = 1, j = 0, k = 0; i < prices.length; i++) {
//     if (prices[i] < buyPrice) {
//       buyPrice = prices[i]
//       j = i
//       sellPrice = 0
//     } else if (prices[i] > sellPrice) {
//       sellPrice = prices[i]
//       k = i
//       if (sellPrice - buyPrice > 0 && k >= j) {
//         maxProfit = Math.max(sellPrice - buyPrice, maxProfit)
//       }
//     }
//   }
//   return maxProfit
// }

var maxProfit = function (prices) {
  var maxProfit = 0
  var buyPrice = prices[0]

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i]
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - buyPrice)
    }
  }
  return maxProfit
}
export default maxProfit
