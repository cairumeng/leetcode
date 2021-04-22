/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //x reverse overflow problem
  var rev = 0
  var temp = x
  if (x < 0) {
    return false
  }
  while (temp >= 1) {
    rev = (temp % 10) + rev * 10
    temp = parseInt(temp / 10)
  }

  if (x === rev) {
    return true
  }

  return false
}

var isPalindrome2 = function (x) {
  //space complexity O(n)
  if (x < 0) {
    return false
  }
  x = x.toString()
  for (var i = 0, j = x.length - 1; i <= j; i++, j--) {
    if (x[i] !== x[j]) {
      return false
    }
  }
  return true
}

var isPalindrome3 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  var rev = 0
  while (x > rev) {
    rev = (x % 10) + rev * 10
    x = parseInt(x / 10)
  }
  return x === rev || parseInt(rev / 10) === x
}

export default isPalindrome3
