// var isPrime = function (n) {
//   if (n <= 3) return n > 1
//   if (n % 6 !== 1 && n % 6 !== 5) return false
//   for (var i = 5; i <= Math.floor(Math.sqrt(n)); i += 6) {
//     if (n % i == 0 || n % (i + 2) == 0) return false
//   }
//   return true
// }
// var countPrimes = function (n) {
//   var count = 0
//   for (var i = 0; i < n; i++) {
//     if (isPrime(i)) count++
//   }
//   return count
// }

// var countPrimes2 = function (n) {
//   if (n < 3) {
//     return 0
//   }
//   let arr = new Array(n).fill(1)
//   for (let i = 2; i * i < n; i++) {
//     if (!arr[i]) {
//       continue
//     }
//     for (let j = i * i; j < n; j += i) {
//       arr[j] = 0
//     }
//   }
//   return arr.reduce((a, b) => b + a) - 2
// }
var isPrime = function (n) {
  for (var i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false
  }
  return true
}
var countPrimes3 = function (n) {
  if (n < 3) return 0
  if (n < 4) return 1
  var count = 2
  for (var i = 6; i <= n; i += 6) {
    if (isPrime(i - 1)) count++
    if (i + 1 < n && isPrime(i + 1)) count++
  }
  return count
}

export default countPrimes3
