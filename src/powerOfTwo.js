var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  if (n == 1) return true
  if (n & (n - 1)) {
    return false
  } else {
    return true
  }
}

export default isPowerOfTwo
