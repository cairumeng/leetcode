var myPow = function (x, n) {
  if (x == 0) return 0
  if (n == 0) return 1
  var reciprocal = false
  if (n < 0) {
    reciprocal = true
    n = -n
  }
  var multiple = function (n) {
    var multification = null
    if (n == 1) return x
    if (n % 2 == 0) {
      multification = multiple(n / 2)
      return multification * multification
    } else {
      multification = multiple((n - 1) / 2)
      return multification * multification * x
    }
  }
  var result = multiple(n)
  if (reciprocal) return (1 / result).toFixed(5)
  return result.toFixed(5)
}

// var myPow = function(x, n) {
//     if (n===0) return 1;

//     let pow = Math.abs(n);

// 	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;

//     return n < 0 ? 1/result : result;
// };

export default myPow
